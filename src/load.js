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
  firstBtn.textContent = 'Contacts';

  let secondBtn = createELem(controlField, 'button');
  secondBtn.textContent = 'Menu';

  let textField = createELem(tabs, 'div');
  textField.id = 'text';
  /* let head = createELem(textField, 'h2'); */
  /*let paragraph = createELem(textField, 'p'); */
}

function createELem(parentElem, currentElem) {
  let elem = document.createElement(currentElem);
  parentElem.appendChild(elem);
  return elem;
}


export {addNewElements};
export {createELem};