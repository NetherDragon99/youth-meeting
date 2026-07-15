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
  '#nextFriday>h1','nextmeeting',
  '#talkingPastorSection .nextMeetingDetail h4','servantspeaker',
  '#singerSection .nextMeetingDetail h4', 'worship',
  '#gamerSection .nextMeetingDetail h4', 'gamesactivities',
  '#myTasks>h1', 'mytasks',
  '#profilePageHeader>h2', 'settings',
  '#mainDataHeadder>p', 'mainprofildatas',
  '#userFormMainData>label:nth-child(2) p' ,'name',
  '#userFormMainData>label:nth-child(3) p' ,'gender',
  '#userFormMainData>label:nth-child(4) p' ,'phoneno',
  '#userFormMainData>label:nth-child(5) p' ,'email',
  '#userFormMainData>label:nth-child(6) p' ,'profilepic',
  '#userFormChangePassward>label:nth-child(1) p' ,'changepass',
  '#userFormChangePassward>label:nth-child(2) p' ,'oldpass',
  '#userFormChangePassward>label:nth-child(3) p' ,'newpass',
  '#userFormChangePassward>label:nth-child(4) p' ,'confirmpass',
  '#userFormSubmitBtn>div>p' ,'submit',
  '#logOutBtn>div>p' ,'logout',
  '#appSettingsHeader p' ,'appsettings',
  '#appSettings>label:nth-child(2) p' ,'lang',
  '#appSettings>label:nth-child(2) select option:nth-child(1)' ,'ar',
  '#appSettings>label:nth-child(2) select option:nth-child(2)' ,'en',

  '#userFormUsername', 'writeyourname',
  '#userFormGender>option:nth-child(1)', 'chooseyourgender',
  '#userFormGender>option:nth-child(2)', 'male',
  '#userFormGender>option:nth-child(3)', 'female',
  '#userFormGender>option:nth-child(4)', 'other',
  '#userFormGender>option:nth-child(5)', 'pnts',
  '#userFormOldPass', 'passyouwanttochange',
  '#userFormNewPass', 'newpass',
  '#userFormConfirmPass', 'confirmpass'
];
export const placeholderTranslate = [

]
let index = 1;
export function applyLanguage(lang, items) {
  // console.log(items.length);

  if (lang === "ar") {
    document.documentElement.style.setProperty("--main-direction", "rtl");
    index = 1;
  } else if (lang === "en") {
    document.documentElement.style.setProperty("--main-direction", "ltr");
    index = 0;
  } else {
    lang = "ar";
    applyLanguage(lang);
  }

  for (let index = 0; index < items.length; index += 2) {
    getElement(items[index], items[index + 1])
  }
}
applyLanguage(language, allSiteToTranslate);

function getElement(element, target) {
  console.log(document.querySelector(`${element}`).tagName);
  
  if (document.querySelector(`${element}`).tagName == 'INPUT') {
    return document.querySelector(`${element}`).placeholder = translate[target][index];
  }else if (document.querySelector(`${element}`)) {
    return document.querySelector(`${element}`).innerHTML = translate[target][index];
  }else{
    console.log(`error on element: ${element}`);
    
  }
}