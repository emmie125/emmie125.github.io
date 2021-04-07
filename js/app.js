const identity;
window.addEventListener('load',()=>{
    fetch("https://emmie125.github.io/Data/data.json/").then((response)=>{
        return response.json();
    })
})