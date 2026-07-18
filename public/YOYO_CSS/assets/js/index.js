import * as getDate from "./fetching.js";

//#region draw pages

document.getElementById('rankPage').innerHTML = await getDate.getPageElements('/page/rank');
document.getElementById('comunityPage').innerHTML = await getDate.getPageElements('/page/comunity');
document.getElementById('profilePage').innerHTML = await getDate.getPageElements('/page/profile');

const rankPage = await import("./rankPage.js");
const homePage = await import("./homePage.js");
const profilePage = await import("./profilePage.js");
const translate = await import("./translate.js");

//#endregion


// #region scroll function
// page scroll navigation style function
const pagesFooter = document.querySelectorAll('footer>#footerContainer>a:not(:nth-child(3))');
const selectedBar = document.querySelector('footer> #selectedArea');
const footerContainer = document.getElementsByTagName('footer')[0];
const homeUserProfileIcon = document.getElementById('userProfilePic');

if (homeUserProfileIcon) {
  homeUserProfileIcon.addEventListener('click', () => {
    const profileFooter = document.getElementById('profilePageFooter');

    if (profileFooter) {
      profileFooter.click();
    }
  });
}

pagesFooter.forEach(v => v.addEventListener('click', () => {
  pagesFooter.forEach(value => value.classList.remove('selected'));

  v.classList.add('selected');
  selectedBar.style.left = `${v.getBoundingClientRect().left - footerContainer.getBoundingClientRect().left}px`;
  selectedBar.style.width = `${v.getBoundingClientRect().width}px`;

  localStorage.setItem('lastOpenedPage', location.hash || '#homePage')
}))

setTimeout(() => {
  let hash = localStorage.getItem('lastOpenedPage')
  if (!hash || hash === 'null') {
    localStorage.setItem('lastOpenedPage', '#homePage');
    hash = '#homePage';
  }

  if (hash.startsWith('"') && hash.endsWith('"')) {
    hash = JSON.parse(hash)
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

