const  btn = document.querySelector('#input-button');
const container = document.querySelector('.section-page1');
const containerSucces = document.querySelector('.section-page2');


btn.addEventListener('click', function() {
    container.style.display = 'none';
    containerSucces.style.display = 'flex';

})

const btn2 = document.querySelector('#input-button2');
btn2.addEventListener('click', function() {
    containerSucces.style.display = 'none';
    container.style.display = 'flex';
})
