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
}

for (let i = 0; i < 8; i++) {
  arrayLabels.push(createELem(labels, 'label'));
  arrayLabels[i].setAttribute('for', `${i}`);
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
const footerBox = createELem(footer, 'div');
footerBox.classList.add('container');

const socialNetworks = createELem(footerBox, 'div');
socialNetworks.id = 'socialNetworks';

const facebookDiv = createELem(socialNetworks, 'div');
const facebookImg = createELem(facebookDiv, 'img');
facebookImg.src = 'images/facebook.svg';

const twitterDiv = createELem(socialNetworks, 'div');
const twitterImg = createELem(twitterDiv, 'img');
twitterImg.src = 'images/twitter.svg';

const instagramDiv = createELem(socialNetworks, 'div');
const instagramImg = createELem(instagramDiv, 'img');
instagramImg.src = 'images/instagram.svg';

const adress = createELem(footerBox, 'div');
adress.id = 'adress';
adress.innerHTML = `© 2021 Good Food | <br> 1112 Parker St, Berkeley, CA 94702 | <br> (510) 024 — 377`;

const orderBtn = createELem(footerBox, 'input');
orderBtn.type = 'button';
orderBtn.value = 'order online';
orderBtn.id = 'order';

const author = createELem(footerBox, 'p');
author.id = 'author';
const link = createELem(author, 'a');
link.textContent = 'Made by Falsin'
link.href = 'https://github.com/Falsin';



function createELem(parentElem, currentElem) {	
  let elem = document.createElement(currentElem);	
  parentElem.appendChild(elem);	
  return elem;	
}