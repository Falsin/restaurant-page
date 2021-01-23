import {createELem} from './load';

function addMenu() {
  let fieldText = document.getElementById('text');
  let headline = fieldText.querySelector('h2');
  headline.textContent = 'Contacts';

}

/* function addContacts() {
  let fieldText = document.getElementById('text');
  let headline = createELem(fieldText, 'h2');
  headline.textContent = 'Contacts'

  let paragraphsArray = [];

  for (let i = 0; i < 2; i++) {
    paragraphsArray.push(createELem(fieldText, 'p'));
  }

  paragraphsArray[0].textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  paragraphsArray[1].textContent = 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
} */

export {addContacts}