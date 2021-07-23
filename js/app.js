const skillsCategory = document.querySelector(
  ".container__section__skills__category"
);
const projectContainer = document.querySelector(".container__section__projects__container-card");

const urlSkills =
  "https://my-json-server.typicode.com/emmie125/emmie125.github.io/skills";
const urlProject =
  "https://my-json-server.typicode.com/emmie125/emmie125.github.io/project";

window.addEventListener("load", () => {
  fetch(urlSkills)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const skillsData = data[0];
      renderSkillsElement(skillsData);
    });

  fetch(urlProject)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderProjectElement(data);
    });
});



const renderSkillsElement = (skills) => {
  if (skills.languages) {
    const title = document.createElement("h3");
    const categoryTypes = document.createElement("div");

    title.textContent = "Languages";
    categoryTypes.classList.add(
      "container__section__skills__category__languages"
    );

    categoryTypes.appendChild(title);

    for (const languages of skills.languages) {
      categoryTypes.appendChild(createHMTLElements(languages));
    }
    skillsCategory.appendChild(categoryTypes);
  }

  if (skills.framework) {
    const title = document.createElement("h3");
    const categoryTypes = document.createElement("div");

    categoryTypes.classList.add(
      "container__section__skills__category__languages"
    );
    title.textContent = "Framework";

    categoryTypes.appendChild(title);

    for (const framework of skills.framework) {
      categoryTypes.appendChild(createHMTLElements(framework));
    }
    skillsCategory.appendChild(categoryTypes);
  }

  if (skills.tools) {
    const title = document.createElement("h3");
    const categoryTypes = document.createElement("div");

    categoryTypes.classList.add(
      "container__section__skills__category__languages"
    );
    title.textContent = "Tools";

    categoryTypes.appendChild(title);

    for (const tools of skills.tools) {
      categoryTypes.appendChild(createHMTLElements(tools));
    }
    skillsCategory.appendChild(categoryTypes);
  }
}
const createHMTLElements = (languages) =>{
  const skillsProgress = document.createElement("div");
  const progressBar = document.createElement("div");
  const progressBarDynamic = document.createElement("div");
  const progressPercent = document.createElement("div");
  const percent = document.createElement("h4");
  const titlePercent = document.createElement("h4");

  skillsProgress.classList.add(
    "container__section__skills__category__languages__progress"
  );
  progressBar.classList.add(
    "container__section__skills__category__languages__progress__bar"
  );
  progressBarDynamic.classList.add(
    "container__section__skills__category__languages__progress__bar__dynamic"
  );
  progressPercent.classList.add(
    "container__section__skills__category__languages__progress__percent"
  );

  percent.textContent = `${languages.percent}%`;
  titlePercent.textContent = `${languages.nom}`;
  progressBarDynamic.style.width = `${languages.percent}%`;

  progressPercent.appendChild(titlePercent);
  progressPercent.appendChild(percent);
  skillsProgress.appendChild(progressPercent);
  progressBar.appendChild(progressBarDynamic);
  skillsProgress.appendChild(progressBar);

  return progressPercent, skillsProgress;
}
const renderProjectElement = (ProjectData)=>{
    
    const Data = ProjectData;
    console.log("Data project",Data);

    const renderProject = Data.map(project=>{
        return projectContainer.appendChild( createHMTLElementsProject(project))
    });
    
    return renderProject;
}
const createHMTLElementsProject = (project)=>{

    const ProjectCard = document.createElement('div');
    const containerCardImg = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardTitle = document.createElement('div');
    const title = document.createElement('h3');
    const cardDescription = document.createElement('div');
    const paragraph = document.createElement('p')
    const linkGithub = document.createElement('a');
    const linkSite = document.createElement('a');
    const iconGitgub = document.createElement('i');
    const iconSee= document.createElement('i')

    ProjectCard.classList.add('container__section__projects__card');
    containerCardImg.classList.add('container__section__projects__card__container-img');
    cardTitle.classList.add('container__section__projects__card__title');
    cardDescription.classList.add('container__section__projects__card__description')
    iconGitgub.className ='fab fa-github';
    iconSee.className = 'fas fa-paperclip';

    title.textContent = `${project.nom}`;
    cardImg.setAttribute('src',`${project.imageprojet}`);
    cardImg.setAttribute('alt',`${project.nom}`);
    linkSite.setAttribute('href',`${project.see}`);
    linkGithub.setAttribute('href',`${project.github}`);
    paragraph.textContent = `${project.description}`

    linkSite.appendChild(iconSee);
    linkGithub.appendChild(iconGitgub);
    cardDescription.appendChild(paragraph);
    cardDescription.appendChild(linkSite);
    cardDescription.appendChild(linkGithub);
    cardTitle.appendChild(title);
    containerCardImg.appendChild(cardImg);
    ProjectCard.appendChild(containerCardImg);
    ProjectCard.appendChild(cardTitle);
    ProjectCard.appendChild(cardDescription);

    return ProjectCard;


}