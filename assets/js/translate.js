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
  '#myTasks>h1', 'mytasks'
];
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
  return document.querySelector(`${element}`).innerHTML = translate[target][index];
}