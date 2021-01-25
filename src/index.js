import {pageLoad} from  './load';

pageLoad();

const btns = document.querySelectorAll('.btn');
let textContent = [...document.getElementById('text').childNodes];

btns.forEach((item, id) => {
  item.addEventListener('mousedown', () => {
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove('active');
      textContent[i].classList.remove('show')
    }
    item.classList.add('active');
    textContent[id].classList.add('show');
  })
})

