

// getting data 'locally'
export let translate = await getData((new URL('../raw-text-code/translate.json', import.meta.url)));

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
    const getRank = await fetch(url);
    const pageRes = await getRank.text();
    const tempRankPage = (new DOMParser()).parseFromString(pageRes, 'text/html');
    let page = '';

    tempRankPage.querySelectorAll('body>section').forEach(item => page += item.outerHTML);

    return page;
  } catch (error) {
    console.log(error);
  }
}