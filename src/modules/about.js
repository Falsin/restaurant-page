import {createELem} from './createElem'

function createAboutWindow(content, text) {
  text.textContent = 'About';
  const p = createELem(content, 'p');
  p.textContent = 'Experience the cuisine that has created raving fans of local diners and national and local food critics alike.'
}

export {createAboutWindow}