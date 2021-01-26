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
let srcImages = [
  'images/meat.jpg',
  'images/fish.jpg',
  'images/chicken.jpg',
  'images/fourthFood.jpg',
  'images/fifthFood.jpg',
  'images/sixthFood.jpg',
  'images/seventhFood.jpeg',
  'images/eighthFood.jpg',
]

const slide = createELem(slideBar, 'div');
slide.id = 'slide';
const picture = createELem(slide, 'img');
picture.src = 'images/meat.jpg';

const labels = createELem(slide, 'div');
labels.id = 'labels';

for (let i = 0; i < 8; i++) {
  arrayBoxes.push(createELem(labels, 'input'));
  arrayBoxes[i].type = 'radio';
  arrayBoxes[i].setAttribute('name', `slide`);
  arrayBoxes[i].id = `${i}`;
  if (i == 0) {
    arrayBoxes[i].setAttribute('checked', `checked`);
  }
}

for (let i = 0; i < 8; i++) {
  arrayLabels.push(createELem(labels, 'label'));
  arrayLabels[i].setAttribute('for', `${i}`);
}

arrayBoxes.forEach((item, id) => {
  item.addEventListener("change", () => {
    if (item.checked == true) {
      picture.src = `${srcImages[id]}`
    }
  })
})

changeImages(0);

function changeImages(id) {
  let that = this;
  let timerId = setTimeout(function changeImage(id) {
    picture.src = `${srcImages[id]}`;
    arrayBoxes[id].checked = true;
    id = (id == 7) ? 0 : ++id;
    timerId = setTimeout(() => {
      changeImage(id);
    }, 4000);
  }.bind(that, id)) 
}

const footer = createELem(body, 'footer');

function createELem(parentElem, currentElem) {	
  let elem = document.createElement(currentElem);	
  parentElem.appendChild(elem);	
  return elem;	
}