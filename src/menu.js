import {createELem} from './load';

function addMenu() {
  let fieldText = document.getElementById('text');
  let displayMenu = createELem(fieldText, 'div');
  displayMenu.id = 'menu';

  let headline = createELem(displayMenu, 'h2');
  headline.textContent = 'Menu';

  let paragraphsArray = [];

  for (let i = 0; i < 3; i++) {
    paragraphsArray.push(createELem(displayMenu, 'p'));
  }

  paragraphsArray[0].textContent = 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  paragraphsArray[1].textContent = 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
  paragraphsArray[2].textContent = 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'

}

/* function addContacts() {
  let fieldText = document.getElementById('text');
  let displayContact = createELem(fieldText, 'div');
  displayContact.id = 'contacts';

  console.log(fieldText)
  console.log(displayContact)


  let headline = createELem(displayContact, 'h2');
  console.log(headline)
  headline.textContent = 'Contacts';

  let paragraphsArray = [];

  for (let i = 0; i < 2; i++) {
    paragraphsArray.push(createELem(displayContact, 'p'));
  }

  paragraphsArray[0].textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  paragraphsArray[1].textContent = 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
} */

export {addMenu}