import {createHome, createMenu, createAbout, createContact} from '../dist/main.js';

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