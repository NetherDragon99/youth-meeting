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
  message.style.animation = lang == 'ar' ? `messagesrtl ${duration}s forwards` : `messagesltr ${duration}s forwards`;

  messagesContainer.insertAdjacentElement('afterbegin', message);
  removeMessage(duration);
  console.log('message created');

}

function removeMessage(duration) {
  const message = document.querySelector('.overlayMessage:last-child');
  console.log(message);

  duration = Number(duration) * 1000;
  setTimeout(() => message.remove(), duration);
}
//#endregion

//#region edit photo
export function selectPhoto() {
  const formPicInput = document.querySelector('#changePicFiled #userForm');
  const editPicMainContainer = document.getElementById('editProfilePic');
  const editPicContainer = document.getElementById('editProfilePicPhotoContainer');
  const cancelBtn = document.getElementById('cancelEditProfileBtn');
  const removeImageBtn = document.getElementById('photoCancel');
  const toFormProfilePic = document.getElementById('toFormProfilePic');
  const displayPic = document.querySelector('#profilePictureContainer>div>img')
  //#region remove image
  removeImageBtn.onclick = () => {
    console.log('removed');
    formPicInput.value = '';
    toFormProfilePic.value = '';
    displayPic.style.display = 'none';
    displayPic.setAttribute('src', '')
  }
  cancelBtn.onclick = () => {
    console.log('reomved');
    formPicInput.value = '';
    editPicContainer.querySelector('img').remove();
    editPicMainContainer.style.display = 'none';
    toFormProfilePic.value = '';
    displayPic.style.display = 'none';
    displayPic.setAttribute('src', '')
  }
  //#endregion


  if (formPicInput) {

    formPicInput.addEventListener('change', async pic => {
      // console.log(formPicInput.value);

      if (formPicInput.value !== '') {
        editPicMainContainer.style.display = 'flex';
        const src = URL.createObjectURL(pic.target.files[0]);
        const img = document.createElement('img');
        img.src = src;
        // console.log(img.getBoundingClientRect());

        editPicContainer.insertAdjacentElement('beforeend', img)

        setTimeout(() => {
          //#region photo size
          const insertedImg = document.querySelector('#editProfilePicPhotoContainer>img');
          const imageW = (insertedImg.getBoundingClientRect()).width;
          const imageH = (insertedImg.getBoundingClientRect()).height;
          // console.log(imageW, imageH, insertedImg.getBoundingClientRect());

          if (imageW > imageH) {
            insertedImg.style.height = '100%';
            insertedImg.style.width = 'auto';

          } else {
            insertedImg.style.height = 'auto';
            insertedImg.style.width = '100%';

          }
          //#endregion
          dragingImage();
          zoomImage();
          confirmPhotoBtn();
        }, 500);
      }
    })

  }

}

function prepareEditPhotoFiled() {
  const editPicMainContainer = document.getElementById('editProfilePic');
  const editPicContainer = document.getElementById('editProfilePicPhotoContainer');
  const cancelBtn = document.getElementById('cancelEditProfileBtn');
  const focusCircle = document.getElementById('focusAreaCircle');

  const bodyS = document.body.getBoundingClientRect()
  const w = bodyS.width;
  const h = bodyS.height;

  if (w > h) {
    editPicContainer.style.width = `${h * .8}px`;
    focusCircle.style.width = `${h * .8}px`;
  } else {
    editPicContainer.style.width = `${w * .9}px`;
    focusCircle.style.width = `${w * .9}px`;
  }
}
function dragingImage() {
  const insertedImg = document.querySelector('#editProfilePicPhotoContainer>img');
  const imgContainer = document.getElementById('editProfilePic');

  let isDraging = false;
  let imgX = 0;
  let imgY = 0;

  imgContainer.addEventListener('dragstart', e => e.preventDefault())
  imgContainer.addEventListener('pointerdown', () => isDraging = true)
  imgContainer.addEventListener('pointermove', e => {
    if (!isDraging) return;

    imgX += e.movementX;
    imgY += e.movementY;
    insertedImg.style.left = `${imgX}px`;
    insertedImg.style.top = `${imgY}px`;
  })
  imgContainer.addEventListener('pointerup', () => isDraging = false);
  imgContainer.addEventListener('pointercancel', () => isDraging = false)
}

function zoomImage() {
  const insertedImg = document.querySelector('#editProfilePicPhotoContainer>img');
  const imgContainer = document.getElementById('editProfilePic');

  let startDistance = 0;
  let scale = 1;

  imgContainer.addEventListener('touchmove', e => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const distance = Math.hypot(dx, dy);

      if (startDistance === 0) {
        startDistance = distance;
      } else {
        scale = distance / startDistance;
        insertedImg.style.transform = `scale(${scale})`;
      }
    }
  })

  imgContainer.addEventListener('wheel', e => {
    scale += e.deltaY / -2000;
    insertedImg.style.transform = `scale(${scale})`;
  })
}
function confirmPhotoBtn() {
  const confirmBtn = document.getElementById('confirmImgEdit');
  let photoContainer = document.getElementById('editProfilePicPhotoContainer');
  let pic = document.querySelector('#editProfilePicPhotoContainer>img');
  let containerW = (photoContainer.getBoundingClientRect()).width;
  let containerH = (photoContainer.getBoundingClientRect()).height;

  confirmBtn.onclick = async click => {
    click.preventDefault();

    const canvas1 = document.createElement('canvas');
    canvas1.width = containerW;
    canvas1.height = containerH;
    const ctx1 = canvas1.getContext('2d');

    const imgW = (pic.getBoundingClientRect()).width;
    const imgH = (pic.getBoundingClientRect()).height;
    const imgT = (pic.getBoundingClientRect()).top - (photoContainer.getBoundingClientRect()).top;
    const imgL = (pic.getBoundingClientRect()).left - (photoContainer.getBoundingClientRect()).left;
    // console.log(imgW, imgH, imgT, imgL);

    ctx1.drawImage(pic, imgL, imgT, imgW, imgH);
    const src = await makeProfilePicSrc(canvas1);

    document.getElementById('toFormProfilePic').value = src;
    const displayImage = document.querySelector('#profilePictureContainer>div>img');
    displayImage.src = src;
    displayImage.style.display = 'block';
    pic.remove();
    document.getElementById('editProfilePic').style.display = 'none';

  }
}

function makeProfilePicSrc(pic) {
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 200;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(pic, 0, 0, 200, 200);
  return canvas.toDataURL('image/png');
}
prepareEditPhotoFiled()


//#region turn photos to base64
export async function photoToBase64(photo) {

}

//#endregion

//#endregion
