function clearContent() {
    const content = document.querySelector('#content');
    content.removeChild(content.lastChild);
}

function resetButtonStyles() {
    const homeButton = document.querySelector('.tab.home');
    const menuButton = document.querySelector('.tab.menu');
    const aboutButton = document.querySelector('.tab.about');
    const contactButton = document.querySelector('.tab.contact');
    homeButton.style = 'color: white;text-decoration: none;font-weight: 500;';
    menuButton.style = 'color: white;text-decoration: none;font-weight: 500;';
    aboutButton.style = 'color: white;text-decoration: none;font-weight: 500;';
    contactButton.style = 'color: white;text-decoration: none;font-weight: 500;';
}

function createHome() {
    clearContent();
    resetButtonStyles();
    const homeButton = document.querySelector('.tab.home');
    homeButton.style = 'color: white;text-decoration: none;font-weight: 500;text-decoration: underline;text-decoration-style: wavy;text-decoration-color: white;text-decoration-thickness: 1.5px;text-underline-offset: 3px;';
    const content = document.querySelector('#content');
    const welcome = document.createElement('div');
    welcome.setAttribute('id', 'welcome');
    const welcomeMessage = document.createElement('p');
    welcomeMessage.setAttribute('id', 'welcome-message');
    welcomeMessage.innerHTML = "Forget your worldly cares<br> at <span id='nepenthe-fancy'>Nepenthe's</span> gay pavilion<br>Where the Phoenix bird repairs<br>and is feeling like a million.";
    welcome.appendChild(welcomeMessage);
    content.appendChild(welcome);
}

function createMenu() {
    clearContent();
    resetButtonStyles();
    const menuButton = document.querySelector('.tab.menu');
    menuButton.style = 'color: white;text-decoration: none;font-weight: 500;text-decoration: underline;text-decoration-style: wavy;text-decoration-color: white;text-decoration-thickness: 1.5px;text-underline-offset: 3px;';
    const content = document.querySelector('#content'); 
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    const menuFillerText = document.createElement('p');
    menuFillerText.setAttribute('class', 'filler-text');
    menuFillerText.innerText = "MENU";
    const toBeEdited = document.createElement('p');
    toBeEdited.setAttribute('class', 'to-be-edited');
    toBeEdited.innerText = "coming soon";
    menu.appendChild(menuFillerText);
    menu.appendChild(toBeEdited);
    content.appendChild(menu);
}

function createAbout() {
    clearContent();
    resetButtonStyles();
    const aboutButton = document.querySelector('.tab.about');
    aboutButton.style = 'color: white;text-decoration: none;font-weight: 500;text-decoration: underline;text-decoration-style: wavy;text-decoration-color: white;text-decoration-thickness: 1.5px;text-underline-offset: 3px;';
    const content = document.querySelector('#content'); 
    const about = document.createElement('div');
    about.setAttribute('id', 'about');
    const aboutFillerText = document.createElement('p');
    aboutFillerText.setAttribute('class', 'filler-text');
    aboutFillerText.innerText = "ABOUT";
    const toBeEdited = document.createElement('p');
    toBeEdited.setAttribute('class', 'to-be-edited');
    toBeEdited.innerText = "coming soon";
    about.appendChild(aboutFillerText);
    about.appendChild(toBeEdited);
    content.appendChild(about);
}

function createContact() {
    clearContent();
    resetButtonStyles();
    const contactButton = document.querySelector('.tab.contact');
    contactButton.style = 'color: white;text-decoration: none;font-weight: 500;text-decoration: underline;text-decoration-style: wavy;text-decoration-color: white;text-decoration-thickness: 1.5px;text-underline-offset: 3px;';
    const content = document.querySelector('#content'); 
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    const contactFillerText = document.createElement('p');
    contactFillerText.setAttribute('class', 'filler-text');
    contactFillerText.innerText = "CONTACT";
    const toBeEdited = document.createElement('p');
    toBeEdited.setAttribute('class', 'to-be-edited');
    toBeEdited.innerText = "coming soon";
    contact.appendChild(contactFillerText);
    contact.appendChild(toBeEdited);
    content.appendChild(contact);
}

createHome();

const header = document.querySelector('#header');
const navbar = document.querySelector('#navbar');
const nepentheLogo = document.querySelector('#logo-header');
const homeButton = document.querySelector('.tab.home');
const menuButton = document.querySelector('.tab.menu');
const aboutButton = document.querySelector('.tab.about');
const contactButton = document.querySelector('.tab.contact');

nepentheLogo.addEventListener('click', createHome);
homeButton.addEventListener('click', createHome);
menuButton.addEventListener('click', createMenu);
aboutButton.addEventListener('click', createAbout);
contactButton.addEventListener('click', createContact);

header.appendChild(nepentheLogo);
navbar.appendChild(homeButton);
navbar.appendChild(menuButton);
navbar.appendChild(aboutButton);
navbar.appendChild(contactButton);

