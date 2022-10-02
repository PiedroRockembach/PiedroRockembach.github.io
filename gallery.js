let gallerySize = (window.screen.availWidth / 100) * 90;
let gallery = document.querySelector('#gallery');
let projects = document.querySelector('#projects');
let galleryElement = document.querySelector('.galleryElement');
let galleryHowMany = projects.childNodes;


// Criar projeto piskcel

let pisqicelDiv = document.createElement('div');
pisqicelDiv.id = 'pisqicel';
pisqicelDiv.classList.add('galleryElement');
projects.appendChild(pisqicelDiv);

let pisqicelDiv2 = document.createElement('div');
pisqicelDiv2.id = 'pisqicel2';
pisqicelDiv2.classList.add('galleryElement');
projects.appendChild(pisqicelDiv2);


gallery.addEventListener("click", function(){
    gallery.style.width = gallerySize + 'px';
    galleryElement.style.width = '30%';


});