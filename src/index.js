import {createELem, createBlock} from './createElem';
import {calcIndent, body, header, slideBar} from './load';

const headerBox = createELem(header, 'div', 'class:container');
const logo = createELem(headerBox, 'div', 'id:logo', 'Good Food');

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

const tabs = [];

for (let i = 0; i < 3; i++) {
  const item = createELem(list, 'li');
  item.addEventListener('mousedown', () => {
    tabs[i].classList.toggle('popUp');
    item.classList.toggle('active');
  })
  
  if (i == 0) {
    item.textContent = 'About';
  } else if (i == 1) {
    item.textContent = 'Menu';
  } else {
    item.textContent = 'Contact';
  }
}

const listItems = [...list.children];

for (let i = 0; i < 3; i++) {
  if (i == 0) {
    tabs.push(createELem(body, 'div', 'class:about'));
  } else if (i == 1) {
    tabs.push(createELem(body, 'div', 'class:menu'));
  } else {
    tabs.push(createELem(body, 'div', 'class:contact'));
  }
}

let foodMenu = {
  'Jumbo U8 Scallop': {
    src: 'images/menu/firstFood.jpg',
    price: '10$'
  },
  'Lobster Dumplings': {
    src: 'images/menu/secondFood.jpg',
    price: '5$'
  },
  'Barbecue Shrimp': {
    src: 'images/menu/thirdFood.jpg',
    price: '20$'
  },
  'Red Snapper Cevich': {
    src: 'images/menu/fourthFood.jpg',
    price: '8$'
  },
  'Firecracker Tuna Tacos': {
    src: 'images/menu/fifthFood.jpg',
    price: '25$'
  },
  'King Cake': {
    src: 'images/menu/sixthFood.jpeg',
    price: '12$'
  },
  'Cake Walk Trio': {
    src: 'images/menu/seventhFood.jpg',
    price: '30$'
  },
  'Ahi Poke Bowls': {
    src: 'images/menu/eighthFood.jpg',
    price: '14$'
  },
  'Surf & Turf': {
    src: 'images/menu/ninethFood.jpg',
    price: '35$'
  },
  'Firecracker Rice': {
    src: 'images/menu/tenthFood.jpg',
    price: '16$'
  }
}

tabs.forEach((item, id) => createContent(id))

function createContent(id) {
  const box = createELem(tabs[id], 'div', 'class:container');
  const headline = createELem(box, 'div', 'class:headline');
  const comeBack = createELem(headline, 'div');
  const img = createELem(comeBack, 'img', 'src:images/arrowLeft.svg');
  const text = createELem(comeBack, 'h2');

  const content = createELem(box, 'div', 'class:content');
  
  if (id == 0) {
    text.textContent = 'About';
    const p = createELem(content, 'p');
    p.textContent = 'Experience the cuisine that has created raving fans of local diners and national and local food critics alike.'
  } else if (id == 1) {
    text.textContent = 'Menu';
    foodCards(content)
  } else {
    text.textContent = 'Contact';

    const div = createELem(content, 'div');
    const phoneBlock = createBlock(div, 'phoneNumbers', 'Phone numbers')

    const phoneList = createELem(phoneBlock, 'div', 'class:phoneList');
    const firstNumber = createELem(phoneList, 'div');
    createELem(firstNumber, 'img', 'src:images/phone.svg');
    createELem(firstNumber, 'p',  '473-281-516')

    const secondNumber = createELem(phoneList, 'div');
    createELem(secondNumber, 'img', 'src:images/phone.svg');
    createELem(secondNumber, 'p', '812-121-792')

    const adressBlock = createBlock(div, 'adressBlock', 'Adress')
    createELem(adressBlock, 'p', '1112 Parker St, Berkeley, CA 94702')
  }

  comeBack.onclick = () => {
    tabs[id].classList.toggle('popUp');
    listItems[id].classList.toggle('active');
  }
}

function foodCards(parentElem) {
  for (const key in foodMenu) {
    const elem = createELem(parentElem, 'div', 'class:foodCard');
    elem.style.backgroundImage = `url(${foodMenu[key].src})`;
    const priceBoard = createELem(elem, 'div', 'class:priceBoard');
    createELem(priceBoard, 'p', 'class:title', `${key}`);
    createELem(priceBoard, 'p', 'class:price', `${foodMenu[key].price}`);
  }

  for (let i = 0; i < 12; i++) {
    createELem(parentElem, 'div', 'class:fakeCard');
  }
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