import * as getDate from "../tools-js/fetching.js";
import * as translate from "../tools-js/translate.js";
import { currentAppVersion } from "../../../config.js";
import { createMessage, createUserId, managePic, selectPhoto } from "../tools-js/public.js";
import {  } from "../tools-js/manage-data.js";


let profileIcon, settingsIcon, userDataPage, appSettingsPage, containerHeader, mainContainer, pageTitle;

//#region profile page scrolling functions
function ProfilePageScrollFunction() {
  settingsIcon = document.getElementById('settingsIcon');
  profileIcon = document.getElementById('currentProfilePic');

  userDataPage = document.getElementById("userProfileForm");
  appSettingsPage = document.getElementById("appSettings");

  containerHeader = document.getElementById('profileHeader');
  mainContainer = document.getElementById("profileContainer");

  pageTitle = document.querySelector("#profilePageHeader>h2");
  settingsIcon.onclick = scrollToSettings;
  profileIcon.onclick = scrollToProfile;

  containerHeader.onwheel = wheel => {
    const lang = localStorage.getItem('main language')
    if (wheel.deltaY > 0) {
      lang == 'en' ? scrollToSettings() : lang == 'ar' ? scrollToProfile() : null;
    } else if (wheel.deltaY < 0) {
      lang == 'en' ? scrollToProfile() : lang == 'ar' ? scrollToSettings() : null;
    }
  }

  function scrollToSettings() {
    appSettingsPage.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest"
    })

  };
  function scrollToProfile() {
    userDataPage.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest"
    })
  }
}
ProfilePageScrollFunction();

//#endregion

//#region settings

//#region language
import * as translatePage from "../tools-js/translate.js";

let languageBar = document.getElementById('appLanguage');
function prepareLanguageBarF() {
  languageBar = document.getElementById('appLanguage');

  languageBar.onchange = () => {

    // console.log(languageBar.value);
    localStorage.setItem('main language', languageBar.value);

    translatePage.applyLanguage(languageBar.value, translatePage.allSiteToTranslate);

    const selectedBar = document.querySelector('footer> #selectedArea');
    const footerContainer = document.getElementsByTagName('footer')[0];

    selectedBar.style.left = `${document.querySelector(`${location.hash}Footer`).getBoundingClientRect().left - footerContainer.getBoundingClientRect().left}px`;
    selectedBar.style.width = `${document.querySelector(`${location.hash}Footer`).getBoundingClientRect().width}px`;
    selectedBar.style.borderBottom = 'rgb(199, 255, 255) solid 2px';
  }
}
//#endregion

//#region theme
let theme;
let themeBar;
theme = localStorage.getItem('app-theme') || 'dark';
import * as appTheme from "../tools-js/apptheme.js";

function applyTheme() {

  if (theme == 'light') {
    appTheme.lightTheme();
  } else {
    appTheme.darkTheme();
  }
}

function themeFiledPrepare() {
  themeBar = document.getElementById('appTheme');
  themeBar.value = theme
  themeBar.addEventListener('change', value => {
    theme = value.target.value;
    localStorage.setItem('app-theme', value.target.value)
    applyTheme();

    changeThemeIconF();
  })
  changeThemeIconF();
}
const changeThemeIconF = () => {
  const themeIcon = document.querySelector('#appSettings>label[data-name="appTheme"]>div');
  if (theme == 'light') {
    themeIcon.classList.remove('icon-moon');
    themeIcon.classList.add('icon-sun');
  } else {
    themeIcon.classList.remove('icon-sun');
    themeIcon.classList.add('icon-moon')
  }
}
//#endregion

//#region setting buttons
import { addDBItem, clearDBItem } from "../tools-js/indexdb.js";

function settingBtns() {
  // reload page 
  const homePageUrl = new URL(location.origin + location.pathname);
  const reloadPageBtn = document.getElementById('refreshApp');

  reloadPageBtn.addEventListener('click', () => {
    const lang = localStorage.getItem('main language');
    let alert;

    if (lang == "ar") {
      alert = confirm(getDate.translate['reloadpagealert'][1]);
    } else {
      alert = confirm(getDate.translate['reloadpagealert'][0]);
    }
    alert ? location.href = homePageUrl : null;
  })

  // clear data
  const clearDataBtn = document.getElementById('resetData');

  clearDataBtn.addEventListener('click', async () => {
    const lang = localStorage.getItem('main language');
    let alert;

    if (lang == "ar") {
      alert = confirm(getDate.translate['cleardataalert'][1]);
    } else {
      alert = confirm(getDate.translate['cleardataalert'][0]);
    }
    if (alert) {
      await clearSavedData();
      location.href = homePageUrl;
    }
  })
}

async function clearSavedData() {
  localStorage.clear();

  const keys = await caches.keys();
  await caches.delete(keys[0]);

  clearDBItem('photos')
}
//#endregion

//#endregion


//#region form 

// get form data
window.getFormDataBtn = async function (event, type) {
  const submitBtn = document.getElementById('userFormSubmitBtn');
  try {
    event.preventDefault();

    const lang = localStorage.getItem('main language') === 'en' ? 0 : 1;

    const formData = Object.fromEntries(new FormData(userDataPage));
    document.getElementById('userFormGender') ? formData.gender = document.getElementById('userFormGender').value : null;

    submitBtn.classList.add('active');
    submitBtn.setAttribute('disabled', 'true');
    submitBtn.classList.add('preparing');

    if (await checkingForFormData(formData)) {

      if (type === 'signUp') {
        let makeId = await createUserId();

        if (makeId) {
          formData.id = makeId;
        } else {
          submitBtn.classList.remove('preparing');
          submitBtn.classList.remove('active');
          submitBtn.removeAttribute('disabled')
          return createMessage(getDate.translate.problemhappend[lang]);
        }

        submitBtn.classList.add('sending');
        submitBtn.classList.remove('preparing');

        let picId = await managePic(formData.profilePic, formData.userName);
        // console.log(picId);

        delete formData.profilePic;
        formData.picId = picId.id;
        formData.picV = picId.version;
        formData.cocs = 0;
        formData.rank = 'unranked';
        formData.state = 'pending';

        let sendDate = await getDate.postDataAPI('users', 'id', formData);
        if (sendDate) {

          createMessage(getDate.translate.accountcreated[lang], 'green');
        }

        localStorage.setItem('user', JSON.stringify(formData))

      }
      // console.log(formData);


    }
  } catch (error) {
    console.log(error);
  }
  submitBtn.classList.remove('sending');
  submitBtn.classList.remove('active');
  submitBtn.removeAttribute('disabled');
}


async function checkingForFormData(data) {
  let lang;
  const submitBtn = document.getElementById('userFormSubmitBtn');

  localStorage.getItem('main language') === 'en' ? lang = 0 : lang = 1;



  try {
    if (data.userName === '') {
      submitBtn.classList.remove('preparing');
      return createMessage(getDate.translate.emptyusername[lang]);

    } else if (data.gender === 'unselected') {
      submitBtn.classList.remove('preparing');
      return createMessage(getDate.translate.emptygender[lang]);

    } else if (data.gender === 'other') {
      submitBtn.classList.remove('preparing');
      return createMessage(getDate.translate.othergender[lang]);

    } else if (data.gender === 'pns') {
      submitBtn.classList.remove('preparing');
      return createMessage(getDate.translate.pnsgender[lang]);

    } else if (
      data.email ? ((data.email === '') || !((data.email).includes('@'))) : null ||
        data.phhoneNo ? (((data.phoneNo.length !== 11)) || isNaN(Number(data.phoneNo))) : null
    ) {
      submitBtn.classList.remove('preparing');
      return createMessage(getDate.translate.emailorphone[lang]);

    } else if (data.emailPhone === '') {
      submitBtn.classList.remove('preparing');
      return createMessage(getDate.translate.emailPhone[lang]);

    } else if (data.password === '') {
      submitBtn.classList.remove('preparing');
      return createMessage(getDate.translate.emptypass[lang]);

    }
    const checkingEP = await checkingForEmailAndPhone(data.email, data.phoneNo);

    if (checkingEP !== 'not found') {
      submitBtn.classList.remove('preparing');
      return createMessage(checkingEP[2] === 'email' ? getDate.translate.emailinuse[lang] : checkingEP[2] === 'phone' ? getDate.translate.phoneinuse[lang] : getDate.translate.emailphoneinuse[lang]);
    }
    
    return true
  } catch (error) {
    console.log(error);
    throw new Error("error");

  }
}

export async function checkingForEmailAndPhone(email, phone) {
  try {
    const [checkEmail, checkPhone] = await Promise.all([
      getDate.getDataAPI('users', { email: email }, 'email'),
      getDate.getDataAPI('users', { phoneNo: phone }, 'phoneNo')
    ])

    if (checkEmail.status === 'success' || checkPhone.status === 'success') {
      if (checkEmail.data.count !== 0 || checkPhone.data.count !== 0) {
        return [checkEmail.data.items, checkPhone.data.items,
          `${checkEmail.data.count !== 0 && checkPhone.data.count !== 0?'email & phone':
            checkPhone.data.count !== 0?'phone':'email'
          }`];
      }
      return 'not found'
    }else{
      throw new Error("error on getting phone or email");
    }

  } catch (error) {
    console.log(error);

  }
}



window.logOut = function (event) {
  event.preventDefault()
  console.log('User logged out');

  const newURL = new URL(location.href)
  newURL.searchParams.delete('account-state');
  history.pushState({}, '', newURL);
  applysignTypePage();
}

//#endregion

//#region sign up/sign in page type
// signup
window.changeLocationToSignUp = function () {
  const newURL = new URL(location.href)
  newURL.searchParams.set('account-state', 'creat');

  history.pushState({}, '', newURL);

  const accountStateLinkEvent = new CustomEvent('urlDataChanged', {
    detail: { 'account-state': 'myValue' }
  });
  applysignTypePage();
}
// signin
window.changeLocationToSignIn = function () {
  const newURL = new URL(location.href)
  newURL.searchParams.delete('account-state');

  history.pushState({}, '', newURL);

  const accountStateLinkEvent = new CustomEvent('urlDataChanged', {
    detail: { 'account-state': 'myValue' }
  });
  applysignTypePage();
}
// apply profile page type
async function applysignTypePage() {
  const params = new URLSearchParams(location.search)
  // console.log(params.has('account-state'));

  if (params.get('account-state') == 'creat') {
    document.getElementById('profilePage').innerHTML = await getDate.getPageElements('../../pages/sign-up.blade.php');

    await translate.applyLanguage(localStorage.getItem('main language'), translate.allSiteToTranslate);

  } else if (params.get('account-state') == 'active') {
    document.getElementById('profilePage').innerHTML = await getDate.getPageElements('../../pages/update-profile.blade.php');

    await translate.applyLanguage(localStorage.getItem('main language'), translate.allSiteToTranslate);

  } else {
    document.getElementById('profilePage').innerHTML = await getDate.getPageElements('../../pages/sign-in.blade.php');

    await translate.applyLanguage(localStorage.getItem('main language'), translate.allSiteToTranslate);
  }
  await ProfilePageScrollFunction();
  applyTheme();
  themeFiledPrepare();
  prepareLanguageBarF();
  settingBtns();
  selectPhoto();
  document.documentElement.style.setProperty('--download-app-version', `"${currentAppVersion}"`)
}
applysignTypePage();
// #endregion
