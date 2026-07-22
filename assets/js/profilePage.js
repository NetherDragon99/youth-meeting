import * as getDate from "./fetching.js";
import * as translate from "./translate.js"


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
import * as translatePage from "./translate.js";

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
import * as appTheme from "./apptheme.js";

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
import * as translateE from "./fetching.js";

function settingBtns() {
  // reload page 
  const homePageUrl = new URL(location.origin + location.pathname);
  const reloadPageBtn = document.getElementById('refreshApp');

  reloadPageBtn.addEventListener('click', () => {
    const lang = localStorage.getItem('main language');
    let alert;

    if (lang == "ar") {
      alert = confirm(translateE.translate['reloadpagealert'][1]);
    } else {
      alert = confirm(translateE.translate['reloadpagealert'][0]);
    }
    alert ? location.href = homePageUrl : null;
  })

  // clear data
  const clearDataBtn = document.getElementById('resetData');

  clearDataBtn.addEventListener('click', () => {
    const lang = localStorage.getItem('main language');
    let alert;

    if (lang == "ar") {
      alert = confirm(translateE.translate['cleardataalert'][1]);
    } else {
      alert = confirm(translateE.translate['cleardataalert'][0]);
    }
    if (alert) {
      localStorage.clear();
      location.href = homePageUrl;
    }
  })
}

//#endregion

//#endregion


//#region form 

// get form data
window.getFormDataBtn = function (event, type) {
  event.preventDefault()

  const formData = Object.fromEntries(new FormData(userDataPage));
  document.getElementById('userFormGender') ? formData.gender = document.getElementById('userFormGender').value : null;

  console.log(type, formData);
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
    document.getElementById('profilePage').innerHTML = await getDate.getPageElements('../pages/sign-up.blade.php');

    await translate.applyLanguage(localStorage.getItem('main language'), translate.allSiteToTranslate);

  } else if (params.get('account-state') == 'active') {
    document.getElementById('profilePage').innerHTML = await getDate.getPageElements('../pages/update-profile.blade.php');

    await translate.applyLanguage(localStorage.getItem('main language'), translate.allSiteToTranslate);

  } else {
    document.getElementById('profilePage').innerHTML = await getDate.getPageElements('../pages/sign-in.blade.php');

    await translate.applyLanguage(localStorage.getItem('main language'), translate.allSiteToTranslate);
  }
  await ProfilePageScrollFunction();
  applyTheme();
  themeFiledPrepare();
  prepareLanguageBarF();
  settingBtns();
}
applysignTypePage();
// #endregion


// prvernt cancel photo from adding photo
