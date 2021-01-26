const body = document.querySelector('body');
const header = createELem(body, 'header');
const headerBox = createELem(header, 'div');
const logo = createELem(headerBox, 'div');

headerBox.classList.add('container');
logo.id = 'logo';
logo.textContent = 'Good Food';

const nav = createELem(headerBox, 'nav');
const img = createELem(nav, 'img');
img.src = 'images/nav.svg';

const slideBar = createELem(body, 'div');
slideBar.id = 'slideBar';

let arrayBoxes = [];
let arrayLabels = [];

for (let i = 0; i < 9; i++) {
  arrayBoxes.push(createELem(slideBar, 'input'));
  arrayBoxes[i].type = 'checkbox';
  arrayBoxes[i].id = `${i}`;
}

const slide = createELem(slideBar, 'div');
slide.id = 'slide';
const picture = createELem(slide, 'img');
picture.src = 'images/meat.jpg'

const labels = createELem(slide, 'div');
labels.id = 'labels';


for (let i = 0; i < 9; i++) {
  arrayLabels.push(createELem(labels, 'label'));
  arrayLabels[i].setAttribute('for', `${i}`);
}

const footer = createELem(body, 'footer');

function createELem(parentElem, currentElem) {	
  let elem = document.createElement(currentElem);	
  parentElem.appendChild(elem);	
  return elem;	
}