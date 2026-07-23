import { closeTask } from "../pages-js/homePage.js";

//#region exit page by clicking outside
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
    closeTask();
  }
})
//#endregion

//#region popup messages
const messagesContainer = document.getElementById('messagesBar');

export function createMessage(text, color, duration) {
  const message = document.createElement('div');
  message.classList.add('overlayMessage');
  
  message.style.backgroundColor = `color-mix(in srgb, ${color || 'red'} 70%, transparent)`;
  message.style.border = `${color || 'red'} solid`
  message.innerHTML = text || 'empty';

  const lang = localStorage.getItem('main language');
  duration = duration || '5';
  message.style.animation = lang=='ar'?`messagesrtl ${duration}s forwards`:`messagesltr ${duration}s forwards`;

  messagesContainer.insertAdjacentElement('afterbegin', message);
  removeMessage(duration);
  console.log('message created');
  
}

function removeMessage(duration) {
  const message = document.querySelector('.overlayMessage:last-child');
  console.log(message);
  
  duration= Number(duration)*1000;
  setTimeout(()=> message.remove(), duration);
}
//#endregion
