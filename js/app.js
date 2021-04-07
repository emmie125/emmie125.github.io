const avatarProfil= document.querySelector('.header__profil__image img');
const noms = document.querySelector('.header__profil__title h1');
const biography = document.querySelector('.section__acceuil__biography p');

const contactInstagram = document.querySelector('#header__contact__instagram');
const contactFacebook = document.querySelector('#header__contact__facebook');
const contactGmail = document.querySelector('#header__contact__gmail')

window.addEventListener('load',()=>{
    fetch("https://my-json-server.typicode.com/emmie125/emmie125.github.io/identities").then((response)=>{
        return response.json();
    }).then((response)=>{
        for (const identity of response) {
            noms.textContent = identity.identity;
            avatarProfil.setAttribute('src',identity.avatarprofil);
            biography.textContent =identity.biography;
        }
    });

    fetch("https://my-json-server.typicode.com/emmie125/emmie125.github.io/communication").then((response)=>{
        return response.json();
    }).then((data)=>{

        for (const communication of data) {

            contactInstagram.setAttribute('href',communication.instagram);
            contactFacebook.setAttribute('href',communication.facebook);
            contactGmail.setAttribute('href',communication.gmail);
        }
    })
})