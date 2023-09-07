
// This script updates the target text 
// depending on the position of the cursor

const animationTarget = document.getElementById('a-jsanimate');

const maxwidth = 150; 
const minwidth = 50;

const maxwght = 900;
const minwght = 100;

function updateText(event) {
  // console.log(event.clientX, event.clientY);
  //get the x,y of the mouse in terms of a percentage of the window
  let widthRatio = event.clientX / window.innerWidth;   
  let heightRatio = event.clientY / window.innerHeight; 

  // console.log(widthRatio, heightRatio);
  // apply the percentage along the axis range of the variable fonts
  let width =  widthRatio * (maxwidth - minwidth) + minwidth;
  let weight =  heightRatio * (maxwght - minwght) + minwght;

  // console.log(width, weight);
  // apply to the target element by updating the CSS variable
  animationTarget.style.setProperty('--wdth', width);
  animationTarget.style.setProperty('--wght', weight);
}

window.addEventListener("mousemove", updateText)

