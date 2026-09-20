import * as dbData from "./tools-js/indexdb.js";

export async function accountSetup() {
    let userData = JSON.parse(localStorage.getItem('user'));
    console.log(userData);
    
    await homePageAccountData(userData);
}

accountSetup();

async function homePageAccountData(data){
    const headerUserProfilePic = document.querySelector('#userProfilePic>img')
    const headerUserName = document.getElementById('userName');
    const headerCocsNo = document.getElementById('cocsNo');
    const headerRankPosition = document.getElementById('userPlace');
    const userPic = (await dbData.getDBItem(data.picId, 'photos')).image;
    // console.log(await dbData.getDBItem(data.picId, 'photos'));
    

    headerUserProfilePic.setAttribute('src', userPic);
    if (userPic && userPic !== '') {
        headerUserProfilePic.removeAttribute('hidden');
    }

    headerUserName.textContent = data.userName || 'my frind';
    headerCocsNo.textContent = data.cocs || 0;
    headerRankPosition.textContent = (()=>{
        if (data.rank === 'unranked' || !data.rank || data.rank == '') {
            return 'unranked'
        }else{
            return `#${data.rank}`
        }
    })()
}