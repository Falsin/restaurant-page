import {addContacts} from './contacts';
import {addMenu} from './menu'

function pageLoad() {
  addNewElements();
  addContacts();
  addMenu();

  let btn = document.getElementById('contactBtn');
  let contacts = document.getElementById('contacts');
  btn.classList.add('active');
  contacts.classList.add('show');
}

function addNewElements() {
  const container = document.getElementById('content');

  let headline = createELem(container, 'h1');
  headline.textContent = 'This is the best restaurant in the world!';

  let img = createELem(container, 'img');
  img.src = 'https://www.elitetraveler.com/wp-content/uploads/2007/02/Alain-Ducasse-scaled.jpg';

  let tabs = createELem(container, 'div');
  tabs.id = 'tabs';

  let controlField = createELem(tabs, 'div');
  controlField.id = 'control';

  let firstBtn = createELem(controlField, 'button');
  firstBtn.id = 'contactBtn';
  firstBtn.classList.add('btn');
  firstBtn.textContent = 'Contacts';

  let secondBtn = createELem(controlField, 'button');
  secondBtn.id = 'menuBtn';
  secondBtn.classList.add('btn');
  secondBtn.textContent = 'Menu';

  let textField = createELem(tabs, 'div');
  textField.id = 'text';
}

function createELem(parentElem, currentElem) {
  let elem = document.createElement(currentElem);
  parentElem.appendChild(elem);
  return elem;
}


export {createELem};
export {pageLoad};