
const skillsCategory = document.querySelector('.container__section__skills__category');

const urlSkills="https://my-json-server.typicode.com/emmie125/emmie125.github.io/skills";


window.addEventListener('load',()=>{
    fetch(urlSkills).then((response)=>{
        return response.json();
    }).then((data)=>{
       
        const skillsData=data[0];
        renderSkillsElement(skillsData);
       
       
        })

})


function renderSkillsElement(skills) {
    
    if (skills.languages) { 
        const title = document.createElement('h3');
        const categoryTypes= document.createElement('div');  
        
        title.textContent="Languages";
        categoryTypes.classList.add('container__section__skills__category__languages');

        categoryTypes.appendChild(title);

        for (const languages of skills.languages) {

            categoryTypes.appendChild(createHMTLElements(languages));
        }  
        skillsCategory.appendChild(categoryTypes);
    }
  
   
    if(skills.framework){
        const title = document.createElement('h3');
        const categoryTypes= document.createElement('div');

        categoryTypes.classList.add('container__section__skills__category__languages');
        title.textContent="Framework";

        categoryTypes.appendChild(title);

        for (const framework of skills.framework) {
            categoryTypes.appendChild(createHMTLElements(framework));
        }
        skillsCategory.appendChild(categoryTypes);
    }
  
    
    if(skills.tools){

        const title = document.createElement('h3');
        const categoryTypes= document.createElement('div');
      
        categoryTypes.classList.add('container__section__skills__category__languages');
        title.textContent="Tools";

        categoryTypes.appendChild(title);
        
        for (const tools of skills.tools) {
           
            categoryTypes.appendChild( createHMTLElements(tools));
        }
        skillsCategory.appendChild(categoryTypes);
    }
    
}
function createHMTLElements(languages) {

       
        const skillsProgress = document.createElement('div');
        const progressBar = document.createElement('div');
        const progressBarDynamic= document.createElement('div');
        const progressPercent = document.createElement('div');
        const percent = document.createElement('h4');
        const titlePercent = document.createElement('h4');

       
        skillsProgress.classList.add('container__section__skills__category__languages__progress');
        progressBar.classList.add('container__section__skills__category__languages__progress__bar');
        progressBarDynamic.classList.add('container__section__skills__category__languages__progress__bar__dynamic');
        progressPercent.classList.add('container__section__skills__category__languages__progress__percent');

        percent.textContent=`${languages.percent}%`;
        titlePercent.textContent=`${languages.nom}`;
        progressBarDynamic.style.width=`${languages.percent}%`;


        progressPercent.appendChild(titlePercent);
        progressPercent.appendChild(percent);
        skillsProgress.appendChild(progressPercent);
        skillsProgress.appendChild(progressBar);
        skillsProgress.appendChild(progressBarDynamic);
       
    return progressPercent, skillsProgress
        
}
