import {createELem} from './createElem'
import {body, menu, logo, nav} from './load'
import {createAboutWindow} from './about'
import {createMenuWindow} from './menu'
import {createContactWindow} from './contact'

const listDiv = createELem(menu, 'div', 'class:listDiv');
const list = createELem(listDiv, 'ul', 'class:list');

const tabs = [];

logo.addEventListener('mousedown', () => {
  tabs.forEach(item => {
    item.classList.remove('popUp');
  })
  list.childNodes.forEach(item => item.classList.remove('active'));
  menu.classList.remove('popUp');
})

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

for (let i = 0; i < 3; i++) {
  const item = createELem(list, 'li');
  item.addEventListener('mousedown', () => {
    tabs[i].classList.toggle('popUp');
    item.classList.toggle('active');
  })
  
  if (i == 0) {
    item.textContent = 'About';
    tabs.push(createELem(body, 'div', 'class:about'));
  } else if (i == 1) {
    item.textContent = 'Menu';
    tabs.push(createELem(body, 'div', 'class:menu'));
  } else {
    item.textContent = 'Contact';
    tabs.push(createELem(body, 'div', 'class:contact'));
  }
}

tabs.forEach((item, id) => createContent(id));

function createContent(id) {
  const box = createELem(tabs[id], 'div', 'class:container');
  const headline = createELem(box, 'div', 'class:headline');
  const comeBack = createELem(headline, 'div');
  const img = createELem(comeBack, 'img', 'src:images/arrowLeft.svg');
  const text = createELem(comeBack, 'h2');

  const content = createELem(box, 'div', 'class:content');
  
  if (id == 0) {
    createAboutWindow(content, text);
  } else if (id == 1) {
    createMenuWindow(content, text);
  } else {
    createContactWindow(content, text);
  }

  comeBack.onclick = () => {
    tabs[id].classList.toggle('popUp');
    list.children[id].classList.toggle('active');
  }
}

export {tabs} 