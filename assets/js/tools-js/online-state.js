export let userOnlineState = true;


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
  message.style.animation = lang == 'ar' ? `messagesrtl ${duration}s forwards` : `messagesltr ${duration}s forwards`;

  messagesContainer.insertAdjacentElement('afterbegin', message);
  removeMessage(duration);
  console.log(text);

}
function removeMessage(duration) {
  const message = document.querySelector('.overlayMessage:last-child');
  // console.log(message);

  duration = Number(duration) * 1000;
  setTimeout(() => message.remove(), duration);
}
//#endregion



function userOnlineStateF(state) {
  if (state) {

    !userOnlineState?createMessage('back online', 'green'):null;
    userOnlineState = true;

  } else {

    createMessage('No internet mode');
    userOnlineState = false;
  }  
}
window.addEventListener('online', () => userOnlineStateF(true));
window.addEventListener('offline', () => userOnlineStateF(false));
userOnlineStateF(navigator.onLine);