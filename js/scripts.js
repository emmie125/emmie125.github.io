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
const menuActive = document.querySelector('#navbar');
const btns = document.querySelectorAll('.btn');
let navbar=[];
navbar[0]=true;
console.log(navbar.filter(element=> element===true));

for (let i = 0; i < btns.length;i++){
   
    
    btns[i].addEventListener('click',e=>{

        btns[i].classList.replace('btn','menu-active');
        navbar[i]=true;
      
       
    }
    )
}

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

