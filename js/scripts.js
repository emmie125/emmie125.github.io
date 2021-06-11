const header = document.querySelector('.header');

window.addEventListener('scroll',()=>{
    if (window.scrollY>=100) {
        header.classList.replace('header','header-scroll');
    }
    else {
        header.classList.replace('header-scroll','header');
    }
    
   
})

//active
const menuActive = document.querySelector('.nav__menu a');
menuActive.addEventListener('click',e=>{
   
    if(e.target.isConnected){
        menuActive.classList.replace('.nav__menu a','menu-active'); 
    }
    else{
        menuActive.classList.replace('menu-active','.nav__menu a');
    }
    console.log(e);
})
//scroll bar button

//Button toggle

    const toggle=document.querySelector('#toggle');
   
    const containerToggle=document.querySelector('.toggle-menu');
    const toggleLable=document.querySelector('.toggle-lable');
    const menu = document.querySelector('.nav__menu');

    toggle.addEventListener('click',e=>{

    e.preventDefault;

    const iconToggle= document.querySelector('i');
    

    if(e.target.checked){

       
        iconToggle.classList.remove('fa-bars');
        iconToggle.classList.add('fa-times');
        menu.classList.replace('nav__menu','menu-toggle');
        toggleLable.appendChild(iconToggle);
    }
    
    else{
        iconToggle.classList.remove('fa-times')
        iconToggle.classList.add('fa-bars');
        menu.classList.replace('menu-toggle','nav__menu');
        toggleLable.appendChild(iconToggle);
       
       
    }

})

//section_skills


const skillsDynamics = document.querySelector('.container__section__skills__category__languages__progress__bar__dynamic');

window.addEventListener('load',()=>{
    skillsDynamics.style.width="40%";
})