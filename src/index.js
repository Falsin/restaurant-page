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
slideBar.id = 'slideBar'

const footer = createELem(body, 'footer');

function createELem(parentElem, currentElem) {	
  let elem = document.createElement(currentElem);	
  parentElem.appendChild(elem);	
  return elem;	
}