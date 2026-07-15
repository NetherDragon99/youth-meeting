

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


// translate
// from arabic to english
async function translateToEnglish(text) {
  const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=ar|en`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.responseData.translatedText;
  } catch (error) {
    console.log("حصلت مشكلة في الترجمة:", error);
    return text; 
  }
}

