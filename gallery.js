let gallerySize = (window.screen.availWidth / 100) * 90;
let gallery = document.querySelector('.gallery');
let projects = document.querySelector('.projects');
let galleryElement = document.querySelector('.project');
let galleryHowMany = projects.childNodes;


// Criar projeto
function createProject({github, link,id,url,name, description}) {  
    let projectLink = document.createElement('div');
    projectLink.classList.add('project');
    projectLink.id = id;
    let projectImg = document.createElement('img');
    projectImg.src = url;
    let createName = document.createElement('h2');
    createName.innerHTML = name;
    let githubLink = document.createElement('a');
    githubLink.classList.add('githubLink');
    githubLink.href = github;
    let descriptionText = document.createElement('p');
    descriptionText.innerHTML = description;
    let buttons = document.createElement('div');
    buttons.classList.add('project-buttons');
    projectLink.appendChild(createName);
    projectLink.appendChild(projectImg);
    projectLink.appendChild(descriptionText);
    buttons.appendChild(githubLink);
    if(link) {
        let pageLink = document.createElement('a');
        pageLink.innerHTML = 'Visitar o site'
        pageLink.classList.add('project-page-link');
        pageLink.href = link;
        buttons.appendChild(pageLink);
    }
    projectLink.appendChild(buttons);
    projects.appendChild(projectLink);
}

//calls
createProject({
    github: 'https://github.com/PiedroRockembach/TrybeTunes-Portifolio',
    link: 'https://trybe-tunes-delta.vercel.app/',
    description: 'Um clone do Itunes feito em React consumindo a api do Itunes.',
    id: 'trybe-tunes',
    url: './images/TrybeTunes.png',
    name: 'Trybe Tunes'
});

// createProject({
//     github: 'https://github.com/PiedroRockembach/trybe-hotel',
//     description: 'Sistema de cadastro e gestão de hóspedes para uma rede de hoteis',
//     id: 'trybe-hotel',
//     url: './images/Csharp-logo.png',
//     name: 'Trybe Hotel'
// });

createProject({
    github: 'https://github.com/PiedroRockembach/trybers-and-dragons',
    description: 'Sistema de controle de personagens de um rpg no mundo de D&D',
    id: 'trybers-and-dragons',
    url: './images/typescript-logo.svg',
    name: 'Trybers & Dragons'
});

createProject({
    github: 'https://piedrorockembach.github.io/pisqicel.github.io/',
    link: 'https://piedrorockembach.github.io/pisqicel.github.io/',
    description:"Projeto de quadro para pixel art com tamanho personalizavel feito em Html, CSS e JavaScript.",
    id: 'pisqicel',
    url:'/images/pisqicel.png',
    name: 'Pixels-art',
});