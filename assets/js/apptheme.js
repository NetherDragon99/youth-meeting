export function lightTheme() {
  document.documentElement.style.setProperty('--text-color','black');
  document.documentElement.style.setProperty('--text-color2','#666b69');
  document.documentElement.style.setProperty('--design-blue','rgb(55 153 153 / 71%)');
  document.documentElement.style.setProperty('--design-blue2','rgb(30, 146, 146)');
  document.documentElement.style.setProperty('--background-image','url(../pic/background-1.png)');
  document.documentElement.style.setProperty('--background-color','#f6f6ef');
  document.documentElement.style.setProperty('--background-color2','rgb(156 187 198)');
  document.documentElement.style.setProperty('--background-color3','rgb(198 224 255 / 90%)');
  document.documentElement.style.setProperty('--background-color4','rgba(21, 39, 111, 0.1)');
}
export function darkTheme() {
  document.documentElement.style.setProperty('--text-color','aliceblue');
  document.documentElement.style.setProperty('--text-color2','rgb(136, 154, 170)');
  document.documentElement.style.setProperty('--design-blue','rgba(199, 255, 255, 0.705)');
  document.documentElement.style.setProperty('--design-blue2','rgb(199, 255, 255)');
  document.documentElement.style.setProperty('--background-image','url(../pic/background.png)');
  document.documentElement.style.setProperty('--background-color','rgb(18, 24, 42)');
  document.documentElement.style.setProperty('--background-color2','rgba(19, 43, 68)');
  document.documentElement.style.setProperty('--background-color3','rgba(19, 43, 68, 0.9)');
  document.documentElement.style.setProperty('--background-color4','rgba(21, 77, 138, 0.336)');
}