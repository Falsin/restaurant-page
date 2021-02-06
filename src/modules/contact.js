import {createELem, createBlock} from './createElem'

function createContactWindow(content, text) {
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

export {createContactWindow}