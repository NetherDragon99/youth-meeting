

// getting data 'locally'
export let rawCode = await gitData((new URL('./rawCode.json', import.meta.url)));

async function gitData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;

  } catch (error) {
    console.log(error);
  }
}

