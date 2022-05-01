const deskPop = document.querySelector("#deskpop")
const mainButt = document.getElementById('main-button')
const svg = document.getElementById("svg")

console.log(svg)

mainButt.addEventListener("click", ()=>
{
    if(deskPop.style.display == "flex"){
        deskPop.style.display = "none"
        mainButt.classList.remove("select-back");
        svg.classList.remove("svg-white");
    }
    else {
        deskPop.style.display ="flex";
        mainButt.classList.add("select-back")
        svg.classList.add("svg-white")
    }
})

