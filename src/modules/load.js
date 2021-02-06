import {createELem} from './createElem';

const body = document.querySelector('body');
const header = createELem(body, 'header');
const slideBar = createELem(body, 'div', 'id:slideBar');
const footer = createELem(body, 'footer');
const menu = createELem(body, 'div', 'class:menuDiv');

const headerBox = createELem(header, 'div', 'class:container');
const logo = createELem(headerBox, 'div', 'id:logo', 'Good Food');

const nav = createELem(headerBox, 'nav');
const img = createELem(nav, 'img', 'src:images/nav.svg');

export {body, headerBox, logo, nav, img, slideBar, footer, menu}