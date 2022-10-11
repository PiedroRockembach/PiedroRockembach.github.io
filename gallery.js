let gallerySize = (window.screen.availWidth / 100) * 90;
let gallery = document.querySelector('#gallery');
let projects = document.querySelector('#projects');
let galleryElement = document.querySelector('.galleryElement');
let galleryHowMany = projects.childNodes;


// Criar projeto
function createProject(link,id,url,name) {  
    let projectLink = document.createElement('a');
    projectLink.classList.add('galleryElement');
    projectLink.href = link;
    projectLink.target = '_blank';
    projectLink.id = id;
    projectLink.style.backgroundImage = `url('${url}')`
    projects.appendChild(projectLink);
    let createName = document.createElement('p');
    createName.innerHTML = name;
    projectLink.appendChild(createName);
}

//calls
createProject('https://piedrorockembach.github.io/pisqicel.github.io/','pisqicel','/images/pisqicel.png','Projeto: Pixels-art');