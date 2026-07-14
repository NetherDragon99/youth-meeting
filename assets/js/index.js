
//#region public codes

// exit page by clicking outside
const bellIcons = document.querySelector('#notificationIcon:not(#notificationIcon>*)');
const mainNotificationContainer = document.getElementById('notificationContainer');

document.addEventListener('click', click => {

  if (
    (click.target.closest('#globalCloseArea')) ||
    (click.target !== bellIcons) &&
    !click.target.closest('#notificationContainer') &&
    !click.target.closest('#floatingTask')
  ) {
    mainNotificationContainer.classList.remove('opened')
    homePage.closeTask();
  }
})
//#endregion

// #region scroll function
// page scroll navigation style function
const pagesFooter = document.querySelectorAll('footer>#footerContainer>a:not(:nth-child(3))');
const selectedBar = document.querySelector('footer> #selectedArea');
const footerContainer = document.getElementsByTagName('footer')[0];

pagesFooter.forEach(v => v.addEventListener('click', () => {
  pagesFooter.forEach(value => value.classList.remove('selected'));

  v.classList.add('selected');
  selectedBar.style.left = `${v.getBoundingClientRect().left - footerContainer.getBoundingClientRect().left}px`;
  selectedBar.style.width = `${v.getBoundingClientRect().width}px`;

  localStorage.setItem('lastOpenedPage', JSON.stringify(location.hash))
}))

setTimeout(() => {
  let hash = localStorage.getItem('lastOpenedPage')
  if (!hash) {
    localStorage.setItem('lastOpenedPage', '#homePage');
    hash = '#homePage';

  }
  document.querySelector(`body>section#MainContainer ${hash}`).scrollIntoView({
    behavior: 'smooth'
  })

  pagesFooter.forEach(value => value.classList.remove('selected'));

  document.querySelector(`${hash}Footer`).classList.add('selected');

  selectedBar.style.left = `${document.querySelector(`${hash}Footer`).getBoundingClientRect().left - footerContainer.getBoundingClientRect().left}px`;
  selectedBar.style.width = `${document.querySelector(`${hash}Footer`).getBoundingClientRect().width}px`;
  selectedBar.style.borderBottom = 'rgb(199, 255, 255) solid 2px';
}, 500);
setTimeout(() => activatePageObserver(), 2000)



document.getElementById('footer').addEventListener('wheel', function (wheel) {
  // console.log(wheel);
  document.getElementById('MainContainer').scrollBy({
    left: wheel.deltaY,
    behavior: "smooth"
  })
})

const pageView = new IntersectionObserver((items) => {
  items.forEach(item => {
    if (item.isIntersecting) {
      const id = item.target.id;
      localStorage.setItem('lastOpenedPage', `#${id}`)
      location.hash = id;
      const hash = `#${id}`

      pagesFooter.forEach(value => value.classList.remove('selected'));

      document.querySelector(`${hash}Footer`).classList.add('selected');

      selectedBar.style.left = `${document.querySelector(`${hash}Footer`).getBoundingClientRect().left - footerContainer.getBoundingClientRect().left}px`;
      selectedBar.style.width = `${document.querySelector(`${hash}Footer`).getBoundingClientRect().width}px`;
      selectedBar.style.borderBottom = 'rgb(199, 255, 255) solid 2px';
    }

  })
}, { threshold: 0.7 })

function activatePageObserver() {
  document.querySelectorAll('body>section#MainContainer>*').forEach(itme => pageView.observe(itme))
}
//#endregion

import * as getDate from "./fetching.js";
import * as translate from "./translate.js";
import * as homePage from "./homePage.js";
import * as rankPage from "./rankPage.js";
import * as profilePage from "./profilePage.js";