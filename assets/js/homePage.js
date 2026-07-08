
//#region tasks

// preparing task
import * as dom from "./rawCode.js";

const homePageSection = document.getElementById('homePage');
const tasks = document.querySelectorAll('.task');


tasks.forEach(task => task.addEventListener('click', function () {
  (this.dataset.description && this.dataset.description !== '') || (this.dataset.btnvalue && this.dataset.btnvalue !== '')? setTimeout(() => {
    const style = this.getBoundingClientRect()
    // console.log(style, this.innerHTML);
    const width = style.width;
    const height = style.height;
    const left = style.left;
    const top = style.top;

    const toDom = dom.floatingTaskDom(this.innerHTML, this.dataset.description??'', left, top, width, height, this.dataset.btnname, this.dataset.btnvalue);
    homePageSection.insertAdjacentHTML('afterbegin', toDom);
    
    setTimeout(() => {
      const openedTask = document.querySelector('#floatingTask.opened');
      const bodyHeight = document.getElementsByTagName('body')[0].getBoundingClientRect().height

      openedTask.dataset.height = height;
      openedTask.dataset.top = top;
      openedTask.style.top = '50%';
      openedTask.style.transform = 'translateY(-50%)';
      openedTask.style.maxHeight = `${bodyHeight * .7}px`;
    }, 200)
  }, 100):null;
}))

export function closeTask() {
  const openedTask = document.querySelector('#floatingTask.opened');
  console.log(openedTask);
  if (openedTask) {
    
    openedTask.classList.remove('opened')
    openedTask.style.top = `${openedTask.dataset.top}px`;
    openedTask.style.maxHeight = `${openedTask.dataset.height}px`
    openedTask.style.transform = 'translateY(0)';
    setTimeout(() => {
      openedTask.remove()
    }, 1000);
  }
}
//#endregion

