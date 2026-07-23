//#region get user data & long time actions
const db = await import("./tools-js/indexdb.js");

//#region service worker for downloading the app
if ('serviceWorker' in navigator) {
  if (location.hostname == '127.0.0.12') {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      for(let registration of registrations){
        registration.unregister();
      }
    })
  } else {
    navigator.serviceWorker.register('./service-worker.js', { type: 'module' })
      .then(registration => {
        console.log('service worker successed');
      })
      .catch(err => {
        console.log('service worker failed', err);
      })
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        window.location.reload();
        refreshing = true;
      }
    })
  }
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  document.body.classList.add('pwa-ready');
});

document.body.addEventListener('click', async (e) => {
  const targetButton = e.target.closest('#downloadAppBtn');

  if (targetButton) {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted');
    } else {
      console.log('User dismissed');
    }

    deferredPrompt = null;
    document.body.classList.remove('pwa-ready');
  }
});

window.addEventListener('appinstalled', () => {
  deferredPrompt = null;
  document.body.classList.remove('pwa-ready');
  // console.log('تم التثبيت بنجاح');
});


//#endregion

//#endregion

import * as getDate from "./tools-js/fetching.js";

//#region draw pages

document.getElementById('homePage').innerHTML = await getDate.getPageElements('../../pages/home.blade.php');
document.getElementById('rankPage').innerHTML = await getDate.getPageElements('../../pages/rank.blade.php');
document.getElementById('comunityPage').innerHTML = await getDate.getPageElements('../../pages/comunity.blade.php');
document.getElementById('profilePage').innerHTML = await getDate.getPageElements('../../pages/sign-in.blade.php');

const rankPage = await import("./pages-js/rankPage.js");
const homePage = await import("./pages-js/homePage.js");
const profilePage = await import("./pages-js/profilePage.js");
const translate = await import("./tools-js/translate.js");
const qrCodeScannerPage = await import("./pages-js/qr.js");

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
    behavior: 'smooth',
    block: 'center'
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

// set opened page to the history
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
}, { threshold: 0.8 })

function activatePageObserver() {
  document.querySelectorAll('body>section#MainContainer>*:not(#messagesBarContainer)').forEach(itme => pageView.observe(itme))
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

//#region qr code

const qrBtn = document.getElementById('qrScanFooter')
qrBtn.addEventListener('click', click => {

  qrCodeScannerPage.startScanner()
})
//#endregion



