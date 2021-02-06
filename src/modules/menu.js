import {createELem} from './createElem'

const foodMenu = {
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

function createMenuWindow(content, text) {
  text.textContent = 'Menu';
  foodCards(content)
}

function foodCards(parentElem) { 
  const foodCardsArray = [];
  for (const key in foodMenu) {
    const elem = createELem(parentElem, 'div', 'class:foodCard');
    foodCardsArray.push(elem);
    elem.style.backgroundImage = `url(${foodMenu[key].src})`;
    const priceBoard = createELem(elem, 'div', 'class:priceBoard');
    createELem(priceBoard, 'p', 'class:title', `${key}`);
    createELem(priceBoard, 'p', 'class:price', `${foodMenu[key].price}`);
  }

  for (let i = 0; i < 12; i++) {
    createELem(parentElem, 'div', 'class:fakeCard');
  }

  foodCardsArray.forEach(item => {
    item.addEventListener('touchstart', () => {
      foodCardsArray.forEach(item => item.classList.remove('popUp'));
      item.classList.add('popUp');
    })
  })
}

export {createMenuWindow}