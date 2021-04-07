const avatarProfil= document.querySelector('.header__profil__image img');
const noms = document.querySelector('.header__profil__title h1');
const biography = document.querySelector('.section__acceuil p')

window.addEventListener('load',()=>{
    fetch("https://my-json-server.typicode.com/emmie125/emmie125.github.io/identities").then((response)=>{
        return response.json();
    }).then((response)=>{
        for (const identity of response) {
            noms.textContent = identity.identity;
            avatarProfil.setAttribute('src',identity.avatarprofil);
            biography.textContent =identity.biography;
        }
        console.log(response);
    });
})