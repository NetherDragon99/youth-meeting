import { applysignTypePage } from "../pages-js/profilePage.js";
import { getDataAPI, translate } from "./fetching.js";
import { addDBItem, getAllDBItems, getDBItem, deleteDBItem } from "./indexdb.js";
import { createMessage, userOnlineState } from "./online-state.js";
// import { changeLocationToSignIn } from "../pages-js/profilePage.js"

export let allUsersData = [];
export let userData;
export async function manageAllUsersData() {
  const oldData = await getAllDBItems('usersData');

  const lang = localStorage.getItem('main language') === 'en' ? 0 : 1;

  if (oldData.length === 0 || !(await getDBItem('allUsersDataHash', 'random'))) {

    if (!userOnlineState) {
      return createMessage(translate.plzconnecttodownload[lang])
    }

    const res = await getDataAPI('users', { state: 'active' }, ['id', 'userName', 'picId', 'picV', 'cocs', 'rank']);


    if (res) {
      allUsersData = [];
      res.data.items.forEach(async userData => {
        await addDBItem(userData, 'usersData');
        allUsersData.push(userData);
      })

      addDBItem({
        name: 'allUsersDataHash',
        value: res.data.resHash
      }, 'random');
    } else if (!res) {
      manageAllUsersData();
      console.log('try again');


    }
  } else {
    allUsersData = await getAllDBItems('usersData')
    const hash = (await getDBItem('allUsersDataHash', 'random')).value;
    const res = await getDataAPI('users', { state: 'active' }, ['id', 'userName', 'picId', 'picV', 'cocs', 'rank'], hash, 'true');

    // console.log(res, res?.data?.isDiff);

    console.log(allUsersData);

    if (res && res?.data?.isDiff === true) {
      addDBItem({
        name: 'allUsersDataHash',
        value: res?.data?.resHash
      }, 'random');

      res.data.updated.forEach(v => {
        const indexNo = allUsersData.findIndex(i => i.id === v.id);
        console.log(indexNo);

        if (indexNo !== -1) {
          allUsersData.splice(indexNo, 1, v);
          allUsersData.forEach(v => addDBItem(v, 'usersData'))
        } else {
          allUsersData.push(v)
        }

      })
      console.log(allUsersData);

    } else if (!res) {
      manageAllUsersData();
      console.log('try again');

    }

  }

  getUserData()
}

export async function getUserData() {
  let userId;
  if (localStorage.getItem('user')) {
    userId = JSON.parse(localStorage.getItem('user')).id
  } else {
    userId = await getDBItem('userId', 'random') || undefined;
  }
  // console.log(userId);

  if (!userId) {
    const newURL = new URL(location.href)
    newURL.searchParams.set('account-state', 'create');
    history.pushState({}, '', newURL);

    applysignTypePage();
  } else {
    setUpUserData()
  }
}
manageAllUsersData()
getUserData()


export function setUpUserData() {
  // console.log('hello');

}

export async function managePhotos() {
  const hash = await getDBItem('allPhotosDataHash', 'random');
  const dbImages = await getAllDBItems('photos');
  let images = [];
  let delImages = []

  if ((dbImages.length === 0 || !hash) && userOnlineState) {
    const res = await getDataAPI('photos', null, null, null, true);
    addDBItem({
      name: 'allPhotosDataHash',
      value: res.data.resHash
    }, 'random');
    res?.data?.items?.forEach(item=> images.push(item))
    console.log(res);
  } else {
    images = dbImages;
    const res = await getDataAPI('photos', null, null, hash.value, true);

    if (res.data.isDiff) {
      addDBItem({
        name: 'allPhotosDataHash',
        value: res.data.resHash
      }, 'random');
      res?.data?.updated?.forEach(v => images.push(v));
      res?.data?.deleted?.forEach(v => delImages.push(v));

    }
    // console.log(res, images, delImages);
  }

  images!== 0?images.forEach(image => {
    addDBItem(image, 'photos')
  }):null;
  delImages!== 0?delImages.forEach(image => {
    deleteDBItem(image, 'photos')
  }):null;

}


managePhotos()