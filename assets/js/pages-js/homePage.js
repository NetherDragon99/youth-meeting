
//#region notification
const mainNotificationContainer = document.getElementById('notificationContainer');
const notificationContainer = document.getElementById('notifications')
const notifications = document.querySelectorAll('#notifications .notification');
const bellIcons = document.querySelector('#notificationIcon:not(#notificationIcon>*)');

notifications.forEach(notification => {
  notification.addEventListener('click', function () {
    if (this.classList.contains('opened')) {
      notifications.forEach(value => value.classList.remove('opened'));
    } else {
      notifications.forEach(value => value.classList.remove('opened'));
      this.classList.add('opened');
      setTimeout(notificationChecker, 100)
    }
  })
})


// open & close notification bar
bellIcons.addEventListener('click', () => mainNotificationContainer.classList.toggle('opened'))

// readed notifications
notifications.forEach(notification => {
  notification.addEventListener('click', function () {
    this.classList.remove('unreaded')
  })
})

// check for to remove unreaded icon for notifications

function notificationChecker() {
  const unreaded = document.querySelector('#notifications .notification.unreaded')
  !unreaded?bellIcons.classList.remove('unreaded'):bellIcons.classList.add('unreaded')
  
}
notificationChecker();

//#endregion

//#region tasks

// preparing task
import * as dom from "../../raw-text-code/rawCode.js";

const homePageSection = document.getElementById('homePage');
const tasks = document.querySelectorAll('.task');


tasks.forEach(task => task.addEventListener('click', function () {
  (this.dataset.description && this.dataset.description !== '') || (this.dataset.btnvalue && this.dataset.btnvalue !== '')? setTimeout(() => {
    const style = this.getBoundingClientRect()
    // console.log(style, this.innerHTML);
    const width = style.width;
    const height = style.height;
    const left = style.left;
    const top = style.top;

    const toDom = dom.floatingTaskDom(this.innerHTML, this.dataset.description??'', left, top, width, height, this.dataset.btnname, this.dataset.btnvalue);
    homePageSection.insertAdjacentHTML('afterbegin', toDom);
    
    setTimeout(() => {
      const openedTask = document.querySelector('#floatingTask.opened');
      const bodyHeight = document.getElementsByTagName('body')[0].getBoundingClientRect().height

      openedTask.dataset.height = height;
      openedTask.dataset.top = top;
      openedTask.style.top = '50%';
      openedTask.style.transform = 'translateY(-50%)';
      openedTask.style.maxHeight = `${bodyHeight * .7}px`;
    }, 200)
  }, 100):null;
}))

export function closeTask() {
  const openedTask = document.querySelector('#floatingTask.opened');

  if (openedTask) {
    
    openedTask.classList.remove('opened')
    openedTask.style.top = `${openedTask.dataset.top}px`;
    openedTask.style.maxHeight = `${openedTask.dataset.height}px`
    openedTask.style.transform = 'translateY(0)';
    setTimeout(() => {
      openedTask.remove()
    }, 1000);
  }
}
//#endregion

// go to proile
document.getElementById('profileHeaderUserProfile').addEventListener('click', click => document.getElementById('userProfileForm').scrollIntoView({
  behavior: "smooth",
  inline: "center",
  block: "nearest"
}))