import { userOnlineState } from "./online-state.js";
console.log(userOnlineState);


// getting data 'locally'
export let translate = await getData((new URL('../../raw-text-code/translate.json', import.meta.url)));

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;

  } catch (error) {
    console.log(error);
  }
}

// fetch pages
export async function getPageElements(url) {
  try {
    const getRank = await fetch((new URL(url, import.meta.url)));
    const pageRes = await getRank.text();
    const tempRankPage = (new DOMParser()).parseFromString(pageRes, 'text/html')
    let page = ''
    tempRankPage.querySelectorAll('body>section ,body>header').forEach(item => page += item.outerHTML);

    return page
  } catch (error) {
    console.log(error);
  }
}


//#region google sheet api
const googleSheetURL = 'https://script.google.com/macros/s/AKfycbzUIFWgZHEIuZp1R6cmgmBLSvCu2IWboMTp4p5NAfNVFqAMlpk0Nwj8HheCjWhPQD4Z/exec';

// get data
export async function getDataAPI(sheetName, condition, returned, resHash, onlyChanges) {
  if (!userOnlineState) return;

  try {
    const request = await fetch(googleSheetURL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      redirect: "follow",
      body: JSON.stringify({
        key: "YouthMeeting2026",
        action: "read",
        sheetName: sheetName,
        where: condition,
        select: returned,
        resHash: resHash,
        onlyChanges: onlyChanges || 'false'
      })
    })

    return await request.json();
  } catch (error) {
    console.log(error);
    return error
  }
}

// add and update data
export async function postDataAPI(sheetName, condition, data) {
  if (!userOnlineState) return;

  try {
    const request = await fetch(googleSheetURL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      redirect: "follow",
      body: JSON.stringify({
        key: "YouthMeeting2026",
        action: "write",
        sheetName: sheetName,
        checkBy: condition,
        data: data
      })
    })

    return await request.json();
  } catch (error) {
    console.log(error);
    return error
  }
}
//#region 

