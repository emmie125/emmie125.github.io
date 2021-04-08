const avatarProfil= document.querySelector('.header__profil__image img');
const noms = document.querySelector('.header__profil__title h1');
const biography = document.querySelector('.section__acceuil__biography p');

const contactInstagram = document.querySelector('#header__contact__instagram');
const contactFacebook = document.querySelector('#header__contact__facebook');
const contactGmail = document.querySelector('#header__contact__gmail');


const projectImage1 = document.querySelector('#image-Project1');
const projectTitle1 = document.querySelector('#title-Project1');
const projectDescription1= document.querySelector('#description-Projet1');
const projectBtnSee1 = document.querySelector('#btn__see1');
const projectBtnGithub1 = document.querySelector('#btn__github1');

const projectImage2 = document.querySelector('#image-Project2');
const projectTitle2 = document.querySelector('#title-Project2');
const projectDescription2 = document.querySelector('#description-Projet2');
const projectBtnSee2 = document.querySelector('#btn__see2');
const projectBtnGithub2 = document.querySelector('#btn__github2');

const projectImage3 = document.querySelector('#image-Project3');
const projectTitle3 = document.querySelector('#title-Project3');
const projectDescription3 = document.querySelector('#description-Projet3');
const projectBtnSee3 = document.querySelector('#btn__see3');
const projectBtnGithub3 = document.querySelector('#btn__github3');

const projectImage4 = document.querySelector('#image-Project4');
const projectTitle4 = document.querySelector('#title-Project4');
const projectDescription4 = document.querySelector('#description-Projet4');
const projectBtnSee4 = document.querySelector('#btn__see4');
const projectBtnGithub4 = document.querySelector('#btn__github4');
let tabProject=[];

const sectionAbout = document.querySelector('.section__about__description');

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
    fetch("https://my-json-server.typicode.com/emmie125/emmie125.github.io/project").then((response)=>{
        return response.json();
    }).then((data)=>{
        data.forEach(project => {
            tabProject.push({nom:project.nom,imageprojet:project.imageprojet ,description:project.description,github:project.github,see:project.see});   
        });
        //  console.log(tabProject);
        projectInitialization(0,tabProject,projectImage1,projectTitle1,projectDescription1,projectBtnSee1,projectBtnGithub1);
        projectInitialization(1,tabProject,projectImage2,projectTitle2,projectDescription2,projectBtnSee2,projectBtnGithub2);
        projectInitialization(2,tabProject,projectImage3,projectTitle3,projectDescription3,projectBtnSee3,projectBtnGithub3);
        projectInitialization(3,tabProject,projectImage4,projectTitle4,projectDescription4,projectBtnSee4,projectBtnGithub4);
       

    });
    fetch("https://my-json-server.typicode.com/emmie125/emmie125.github.io/about").then((response)=>{
        return response.json()
    }).then((data)=>{
        data.forEach(about => {
         sectionAbout.textContent = about.description;  
        });
    })

})

function projectInitialization(i,tabProject,projectImage,projectTitle,projectDescription,projectBtnSee,projectBtnGithub) {
    console.log(tabProject[i]);
    projectImage.setAttribute('src',tabProject[i].imageprojet);
    projectTitle.textContent = tabProject[i].nom;
    projectDescription.textContent =  tabProject[i].description;
    projectBtnSee.setAttribute('href',tabProject[i].see);
    console.log(tabProject[i].github);
    projectBtnGithub.setAttribute('href',tabProject[i].github);

}