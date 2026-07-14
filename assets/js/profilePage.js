
//#region profile page scrolling functions
const settingsIcon = document.getElementById('settingsIcon');
const profileIcon = document.getElementById('currentProfilePic');

const userDataPage = document.getElementById("userProfileForm");
const appSettingsPage = document.getElementById("appSettings");

const mainContainer = document.getElementById("profileContainer");

const pageTitle = document.querySelector("#profilePageHeader>h2");


settingsIcon.onclick = scrollToSettings;
profileIcon.onclick = scrollToProfile;


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
import * as translatePage from "./translate.js";

const languageBar = document.getElementById('appLanguage');
languageBar.onchange = ()=>{
  console.log(languageBar.value);
  localStorage.setItem('main language', languageBar.value);

  translatePage.applyLanguage(languageBar.value, translatePage.allSiteToTranslate);
}


//#endregion