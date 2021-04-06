
//Button toggle

    const toggle=document.querySelector('#nav-checkbox');
    const header = document.querySelector('.header');
    const containerToggle=document.querySelector('.container-toggle');
    const toggleLable=document.querySelector('.toggle-lable');
    toggle.addEventListener('click',e=>{

    e.preventDefault;

    const iconToggle= document.querySelector('i');

    if(e.target.checked){

        header.classList.add('header-toggle');
        containerToggle.classList.add('toggle-move');
        iconToggle.classList.remove('fa-bars');
        iconToggle.classList.add('fa-times');
        toggleLable.appendChild(iconToggle);
    }
    
    else{
        iconToggle.classList.remove('fa-times')
        iconToggle.classList.add('fa-bars');
        toggleLable.appendChild(iconToggle);
        header.classList.replace('header-toggle','header'); 
        containerToggle.classList.replace('toggle-move','container-toggle');
    }

})

//section__acceuil