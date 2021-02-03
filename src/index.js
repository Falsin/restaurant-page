import {createELem} from './createElem';
import {calcIndent, body, header, slideBar, footer} from './load';

const headerBox = createELem(header, 'div', 'class:container');
const logo = createELem(headerBox, 'div', 'id:logo');

logo.textContent = 'Good Food'

const nav = createELem(headerBox, 'nav');
const img = createELem(nav, 'img', 'src:images/nav.svg');

nav.addEventListener('mousedown', () => {
  let readonly = false;
  for (const item of tabs) {
    if (item.classList.contains('popUp')) {
      readonly = true;
      break;
    } else {
      readonly = false;
    }
  }
  
  if (!readonly) {
    menu.classList.toggle('popUp');
  }
})

const menu = createELem(body, 'div', 'class:menuDiv');
const listDiv = createELem(menu, 'div', 'class:listDiv');

const list = createELem(listDiv, 'ul', 'class:list');

for (let i = 0; i < 3; i++) {
  const item = createELem(list, 'li');
  
  if (i == 0) {
    item.textContent = 'About';
  } else if (i == 1) {
    item.textContent = 'Menu';
  } else {
    item.textContent = 'Contact';
  }
}

const listItems = [...list.children];
const tabs = [];

for (let i = 0; i < 3; i++) {
  if (i == 0) {
    tabs.push(createELem(body, 'div', 'class:about'));
  } else if (i == 1) {
    tabs.push(createELem(body, 'div', 'class:menu'));
  } else {
    tabs.push(createELem(body, 'div', 'class:contact'));
  }
}

listItems.forEach((item, id) => {
  item.addEventListener('mousedown', () => {
    tabs[id].classList.toggle('popUp');
  })
})

tabs.forEach((item, id) => createContent(id))

function createContent(id) {
  const box = createELem(tabs[id], 'div', 'class:container');
  const headline = createELem(box, 'div', 'class:headline');
  const comeBack = createELem(headline, 'div');
  const img = createELem(comeBack, 'img', 'src:images/arrowLeft.svg');
  const text = createELem(comeBack, 'h2');

  const content = createELem(box, 'div');
  
  if (id == 0) {
    text.textContent = 'about';
    const p = createELem(content, 'p');
    p.textContent = 'Experience the cuisine that has created raving fans of local diners and national and local food critics alike.'
  } else if (id == 1) {
    text.textContent = 'menu';
  } else {
    text.textContent = 'contact';
  }

  comeBack.onclick = () => tabs[id].classList.toggle('popUp');
}

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

window.addEventListener("resize", () => {
  calcIndent();
});

window.onload = () => calcIndent();