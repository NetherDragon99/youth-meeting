import * as getDate from "./fetching.js";
import * as translate from "./translate.js"

//#region profile page scrolling functions
const settingsIcon = document.getElementById('settingsIcon');
const profileIcon = document.getElementById('currentProfilePic');

const userDataPage = document.getElementById("userProfileForm");
const appSettingsPage = document.getElementById("appSettings");

const containerHeader = document.getElementById('profileHeader');
const mainContainer = document.getElementById("profileContainer");

const pageTitle = document.querySelector("#profilePageHeader>h2");

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

//#endregion

//#region settings

//#region language
import * as translatePage from "./translate.js";

const languageBar = document.getElementById('appLanguage');
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
  console.log(event, 'logged out');
}

// signup
window.changeLocationToSignUp = function () {
  const newURL = new URL(location.href)
  newURL.searchParams.set('account-state', 'creat');
  console.log(newURL);

  history.pushState({}, '', newURL);

  const accountStateLinkEvent = new CustomEvent('urlDataChanged', {
    detail: { 'account-state': 'myValue' }
  });
  window.dispatchEvent(new Event('urlChanged'));
}
addEventListener('urlChanged', async ()=>{
  const params = new URLSearchParams(location.search)
  console.log(params.has('account-state'));
  
  if (params.has('account-state')) {
    document.getElementById('profilePage').innerHTML = await getDate.getPageElements('../pages/signUp.html');
    
    await translate.applyLanguage(localStorage.getItem('main language'), translate.allSiteToTranslate);
  }else if (!(params.has('account-state'))) {
    document.getElementById('profilePage').innerHTML = await getDate.getPageElements('../pages/signIn.html');
    
    await translate.applyLanguage(localStorage.getItem('main language'), translate.allSiteToTranslate);
  }
  
})

window.changeLocationToSignIn = function () {
  const newURL = new URL(location.href)
  newURL.searchParams.delete('account-state');
  console.log(newURL);

  history.pushState({}, '', newURL);

  const accountStateLinkEvent = new CustomEvent('urlDataChanged', {
    detail: { 'account-state': 'myValue' }
  });
  window.dispatchEvent(new Event('urlChanged'));
}