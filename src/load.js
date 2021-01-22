function addNewElements() {
  const container = document.getElementById('content');

  let headline = createELem(container, 'h2');
  headline.textContent = 'This is the best restaurant in the world!';

  let img = createELem(container, 'img');
  img.src = 'https://www.elitetraveler.com/wp-content/uploads/2007/02/Alain-Ducasse-scaled.jpg';

  let tabs = createELem(container, 'div');
  tabs.id = 'tabs';

  let controlField = createELem(tabs, 'div');
  controlField.id = 'control';
  let textField = createELem(tabs, 'div');
  controlField.id = 'text';
}

function createELem(parentElem, currentElem) {
  let elem = document.createElement(currentElem);
  parentElem.appendChild(elem);
  return elem;
}



export {addNewElements}