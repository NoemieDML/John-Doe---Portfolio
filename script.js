

// Sélectionne l'élément du menu hamburger dans le DOM
const menuHamburger = document.querySelector(".menu-hamburger");

// Sélectionne l'élément contenant les liens de navigation
const navLinks = document.querySelector(".nav-links");

// Ajoute un écouteur d'événements sur le clic du menu hamburger
menuHamburger.addEventListener('click', () => {
    // Bascule la classe 'mobile-menu' sur l'élément des liens de navigation
    // Cela permet d'afficher ou de masquer le menu en mode mobile
    navLinks.classList.toggle('mobile-menu');
});

let body = document.querySelector('body');
let indicateur= document.querySelector('.indicateur');
let title = document.querySelector('h2');
let paragraphe = document.querySelector('p');
const container = document.querySelector('#container_theme')


container.onclick = function(){
    indicateur.classList.toggle('active');
    body.classList.toggle('darkmode');
    title.classList.toggle('mode');
    paragraphe.classList.toggle('mode');
}