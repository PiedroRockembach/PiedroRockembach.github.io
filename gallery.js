let gallerySize = (window.screen.availWidth / 100) * 90;
let gallery = document.querySelector('#gallery');
let projects = document.querySelector('#projects');
let galleryElement = document.querySelector('.galleryElement');
let galleryHowMany = projects.childNodes;


// Criar projeto piskcel

let pisqicelDiv = document.createElement('a');
pisqicelDiv.href = 'https://piedrorockembach.github.io/pisqicel.github.io/'
pisqicelDiv.target = '_blank';
pisqicelDiv.id = 'pisqicel';
pisqicelDiv.classList.add('galleryElement');
projects.appendChild(pisqicelDiv);
let pisqicelImage = document.createElement('img');
pisqicelImage.src = '/images/pisqicel.png';
pisqicelImage.id = 'pisqicelImg';

pisqicelDiv.appendChild(pisqicelImage);


pisqicelImage.style.width = '100%'

gallery.addEventListener("change", function(){
    gallery.style.width = gallerySize + 'px';
    


});
