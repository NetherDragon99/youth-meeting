
// from dd/mm/yyyy hh:mm:ss  to  mm-dd-yyyy hh:mm:ss
export function toCodeDate(date) {
  let separatingTime = date.split(' ');
  let newDate = '';

  let d = (separatingTime[0]).split('/')
  console.log(d);
  
  for (let index = 0; index < d.length; index++) {
    index == 0? newDate += `${d[1]}-`:index== 1? newDate += `${d[0]}-`:newDate += `${d[2]} `;
  }

  newDate += separatingTime[1] || '';
  console.log(newDate);
  
}
