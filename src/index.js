import {createELem} from './createElem';

const body = document.querySelector('body');
const header = createELem(body, 'header');
const headerBox = createELem(header, 'div', 'class:container');
const logo = createELem(headerBox, 'div', 'id:logo');

logo.textContent = 'Good Food'

const nav = createELem(headerBox, 'nav');
const img = createELem(nav, 'img', 'src:images/nav.svg');

const slideBar = createELem(body, 'div', 'id:slideBar');

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

const slide = createELem(slideBar, 'div', 'id:slide');
const picture = createELem(slide, 'img', 'src:images/meat.jpg');
const labels = createELem(slide, 'div', 'id:labels');

for (let i = 0; i < 8; i++) {
  arrayBoxes.push(createELem(labels, 'input', 'type:radio', 'name:slide', `id:${i}`));
}

for (let i = 0; i < 8; i++) {
  arrayLabels.push(createELem(labels, 'label', `for:${i}`));
}

let changeImages = (() => {
  let timerId;

  function changeId(id) {
    picture.src = `${srcImages[id]}`;
    arrayBoxes[id].checked = true;
    return (id == 7) ? 0 : ++id;
  }

  function change(id) {
    id = changeId(id);
    this.timerId = setInterval(() => {
      id = changeId(id);
    }, 4000)
  }
  return {timerId, change}
})()

changeImages.change(0)

arrayBoxes.forEach((item, id) => {
  item.addEventListener("change", () => {
    if (item.checked == true) {
      picture.src = `${srcImages[id]}`;
    }
  })
})

arrayLabels.forEach((item, id) => {
  item.addEventListener('mousedown', () => {
    clearInterval(changeImages.timerId);
    changeImages.change(id);
  })
})

const footer = createELem(body, 'footer');
const footerBox = createELem(footer, 'div', 'class:container');
const socialNetworks = createELem(footerBox, 'div', 'id:socialNetworks');

const facebookDiv = createELem(socialNetworks, 'div');
const facebookImg = createELem(facebookDiv, 'img', 'src:images/facebook.svg');

const twitterDiv = createELem(socialNetworks, 'div');
const twitterImg = createELem(twitterDiv, 'img', 'src:images/twitter.svg');

const instagramDiv = createELem(socialNetworks, 'div');
const instagramImg = createELem(instagramDiv, 'img', 'src:images/instagram.svg');

const adress = createELem(footerBox, 'div', 'id:adress');
adress.innerHTML = `© 2021 Good Food | <br> 1112 Parker St, Berkeley, CA 94702 | <br> (510) 024 — 377`;

const btnDiv = createELem(footerBox, 'div', 'id:btnDiv');
const orderBtn = createELem(btnDiv, 'input', 'type:button', 'id:order', 'value:order online');

const author = createELem(footerBox, 'p', 'id:author');
const link = createELem(author, 'a');
link.textContent = 'Made by Falsin'
link.href = 'https://github.com/Falsin';

window.addEventListener("resize", () => calcIndent());

window.onload = () => calcIndent();

function calcIndent() {
  const windowHeight = document.documentElement.clientHeight;
  const windowWidth = document.documentElement.clientWidth;

  if(windowHeight < windowWidth && windowWidth >= 700 && windowWidth < 1000) {
    const minSize = Math.min(windowHeight, windowWidth);
    const labels = document.getElementById('labels');
    const btn = document.getElementById('btnDiv');
    const footer = document.querySelector('footer');

    const computedStyle = getComputedStyle(btn);
    const btnSize = parseInt(computedStyle.height); 
    const relativeSize = btnSize * 100 / minSize;

    labels.style.bottom = `${relativeSize + 5}vmin`;
    footer.style.paddingBottom = `${relativeSize + 5}vmin`;
  }
}