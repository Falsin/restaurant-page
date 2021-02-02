import {createELem} from './createElem';

const body = document.querySelector('body');
const header = createELem(body, 'header');
const slideBar = createELem(body, 'div', 'id:slideBar');
const footer = createELem(body, 'footer');

function calcIndent() {
  const windowHeight = document.documentElement.clientHeight;
  const windowWidth = document.documentElement.clientWidth;

  if(windowHeight < windowWidth && windowWidth >= 700 && windowWidth < 1000) {
    const minSize = Math.min(windowHeight, windowWidth);

    const btnSize = document.querySelector('.btnDiv').clientHeight;
    const relativeSize = btnSize * 100 / minSize;

    labels.style.bottom = `${relativeSize + 5}vmin`;
    footer.style.paddingBottom = `${relativeSize + 5}vmin`;
  } else if (windowHeight < windowWidth && windowWidth > 1000) {
    const minSize = Math.min(windowHeight, windowWidth);

    const footerSize = footer.clientHeight;
    const relativeSize = footerSize * 100 / minSize;
    labels.style.bottom = `${relativeSize + 5}vmin`;
  } else {
    labels.style.bottom = `5vmin`;
  }
}

function createMobileContainer() {
  const footerBox = createELem(footer, 'div', 'class:container');
  const socialNetworks = createELem(footerBox, 'div', 'class:socialNetworks');

  const facebookDiv = createELem(socialNetworks, 'div');
  const facebookImg = createELem(facebookDiv, 'img', 'src:images/facebook.svg');

  const twitterDiv = createELem(socialNetworks, 'div');
  const twitterImg = createELem(twitterDiv, 'img', 'src:images/twitter.svg');

  const instagramDiv = createELem(socialNetworks, 'div');
  const instagramImg = createELem(instagramDiv, 'img', 'src:images/instagram.svg');

  const adress = createELem(footerBox, 'div', 'class:adress');
  adress.innerHTML = `© 2021 Good Food | <br> 1112 Parker St, Berkeley, CA 94702 | <br> (510) 024 — 377`;

  const btnDiv = createELem(footerBox, 'div', 'class:btnDiv');

  const orderBtn = createELem(btnDiv, 'input', 'type:button', 'class:order', 'value:order online');

  const author = createELem(footerBox, 'p', 'class:author');
  const link = createELem(author, 'a');
  link.textContent = 'Made by Falsin'
  link.href = 'https://github.com/Falsin';
}

function createLaptopContainer() {
  const windowHeight = document.documentElement.clientHeight;
  const windowWidth = document.documentElement.clientWidth;

  const footerBox = createELem(footer, 'div', 'class:laptopContainer');
  const box = createELem(footerBox, 'div');

  const adress = createELem(box, 'div', 'class:adress');
  adress.innerHTML = `© 2021 Good Food | 1112 Parker St, Berkeley, CA 94702 | (510) 024 — 377`;

  const socialNetworks = createELem(box, 'div', 'class:socialNetworks');

  const facebookDiv = createELem(socialNetworks, 'div');
  const facebookImg = createELem(facebookDiv, 'img', 'src:images/facebook.svg');

  const twitterDiv = createELem(socialNetworks, 'div');
  const twitterImg = createELem(twitterDiv, 'img', 'src:images/twitter.svg');

  const instagramDiv = createELem(socialNetworks, 'div');
  const instagramImg = createELem(instagramDiv, 'img', 'src:images/instagram.svg');

  const author = createELem(footerBox, 'p', 'class:author');
  const link = createELem(author, 'a');
  link.textContent = 'Made by Falsin'
  link.href = 'https://github.com/Falsin';
}

createMobileContainer();
createLaptopContainer();

export {calcIndent, body, header, slideBar, footer};