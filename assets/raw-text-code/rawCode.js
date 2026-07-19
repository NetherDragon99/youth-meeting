export const floatingTaskDom = (title, des, left, top, width, height, btnName, btnValue) => `
<div id="floatingTask" class="opened" style="left: ${left}px; top: ${top}px; width: ${width}px; max-height: ${height}px;">
    <div id="floatingTaskHeader">${title}</div>
    <div id="floatingTaskBody">${des}</div>
    <button data-value="${btnValue??''}" style="display:${btnValue?'block':'none'}">${btnName=== ''?'press me': btnName??'press me'}</button>
    <div class="icon-cancel" id="globalCloseArea"></div>
  </div>`