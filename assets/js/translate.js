let language = localStorage.getItem('main language');

if (!language) {
  localStorage.setItem('main language', 'ar')
  language = "ar";
}
import { translate } from "./fetching.js";

export const allSiteToTranslate = [
  '#homePageFooter>p', 'home',
  '#rankPageFooter>p', 'rank',
  '#qrScanFooter>p', 'scanqr',
  '#comunityPageFooter>p', 'comunity',
  '#profilePageFooter>p', 'profile',

  '#welcome-name-header', 'hello',
  '#cocsNoDiv', 'cocsNo',
  '#userPlaceDiv', 'rankNo',
  '#notificationContainer>h4', 'notifications',
  '#nextFriday>h1', 'nextmeeting',
  '#talkingPastorSection .nextMeetingDetail h4', 'servantspeaker',
  '#singerSection .nextMeetingDetail h4', 'worship',
  '#gamerSection .nextMeetingDetail h4', 'gamesactivities',
  '#myTasks>h1', 'mytasks',

  '#profilePageHeader>h2', 'settings',
  '#mainDataHeadder[data-name="mainProfileData"]>p', 'mainprofildatas',
  '#userFormMainData>label[data-name="userName"] p', 'name',
  '#userFormMainData>label[data-name="gender"] p', 'gender',
  '#userFormMainData>label[data-name="phoneNo"] p', 'phoneno',
  '#userFormMainData>label[data-name="email"] p', 'email',
  '#userFormMainData>label[data-name="profilePic"] p', 'profilepic',
  '#userFormChangePassward>label[data-name="changePass"] p', 'changepass',
  '#userFormChangePassward>label[data-name="oldPass"] p', 'oldpass',
  '#userFormChangePassward>label[data-name="newPass"] p', 'newpass',
  '#userFormChangePassward>label[data-name="confirmPass"] p', 'confirmpass',
  '#userFormSubmitBtn>div>p', 'submit',
  '#logOutBtn>div>p', 'logout',
  '#appSettingsHeader p', 'appsettings',
  '#appSettings>label[data-name="appLanguage"] p', 'lang',
  '#appLanguage option:nth-child(1)', 'ar',
  '#appLanguage option:nth-child(2)', 'en',
  '#appSettings>label[data-name="appTheme"] p', 'theme',
  '#appTheme option:nth-child(1)', 'light',
  '#appTheme option:nth-child(2)', 'dark',
  '#refreshApp', 'reloadpage',
  '#resetData', 'cleardata',
  '#appVersion', 'appversion',

  '#userFormUsername', 'writeyourname',
  '#userFormGender>option:nth-child(1)', 'chooseyourgender',
  '#userFormGender>option:nth-child(2)', 'male',
  '#userFormGender>option:nth-child(3)', 'female',
  '#userFormGender>option:nth-child(4)', 'other',
  '#userFormGender>option:nth-child(5)', 'pnts',
  '#userFormOldPass', 'passyouwanttochange',
  '#userFormNewPass', 'newpass',
  '#userFormConfirmPass', 'confirmpass',
  '#userFormMainData[data-name="loginHeader"] p', 'signin',
  '#userFormMainData label[data-name="emailPhone"] p', 'emailphone',
  '#userFormMainData label[data-name="password"] p', 'password',
  '#userFormEmailPhone', 'writeemailorphoneno',
  '#userFormPass', 'writepassword',
  '#noAccount', 'createaccount',
  '#userFormMainData label[data-name="createaccount"] p', 'createaccount',
  '#backToSignIn', 'backtosignin'
];

let langIndex = 1;
export function applyLanguage(lang, items) {
  // console.log(items.length, lang);

  if (lang === "ar") {
    document.documentElement.style.setProperty("--main-direction", "rtl");
    langIndex = 1;
    // console.log('ar');
    
  } else if (lang === "en") {
    document.documentElement.style.setProperty("--main-direction", "ltr");
    langIndex = 0;
    // console.log('en');
    
  } else {
    lang = "ar";
    return applyLanguage(lang, allSiteToTranslate);
  }

  for (let index = 0; index < items.length; index += 2) {
    getElement(items[index], items[index + 1]);
    
  }

  document.getElementById('appLanguage').value = lang;
}
applyLanguage(language, allSiteToTranslate);

function getElement(element, target) {
  // console.log('pass here');
  
  if (document.querySelectorAll(element).length > 0) {
    // console.log('phase 1');
    
    if (document.querySelector(`${element}`).tagName == 'INPUT' && translate[target][langIndex]) {
      // console.log('input');
      
      return document.querySelector(`${element}`).placeholder = translate[target][langIndex];
      
    } else if (document.querySelector(`${element}`) && (translate[target])) {
      // console.log(element, target, translate[target][langIndex]);
      
      return document.querySelector(`${element}`).innerHTML = translate[target][langIndex];

    } else {
      console.error(`error on element: ${element}`);
    }
  }

}