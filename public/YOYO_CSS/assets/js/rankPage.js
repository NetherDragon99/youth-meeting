
//#region show all users
const showMoreUsersBtn = document.getElementById('showAllRankUsers');
const allUsersRankContainer = document.getElementById('allRankUsers');

showMoreUsersBtn.addEventListener('click', function (){
  this.remove();
  allUsersRankContainer.style.maxHeight = 'calc(100dvh - 80px)';
  allUsersRankContainer.style.overflow = 'scroll';  
})
//#endregion