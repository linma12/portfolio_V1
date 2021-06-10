const animatedText = document.getElementById("animated-text");
var newJob = "Software developper.";
const h2 = document.querySelector("h2");
var jobDescription = h2.innerHTML;
var j = 0;
var newJobDescr= "";

function setTick() {

    if (animatedText.style.borderRightStyle == "solid"){
        animatedText.style.borderRightStyle = "";
    }else{
        animatedText.style.borderRightStyle = "solid";
    }
}

var myVar = setInterval(setTick, 500);

function typeWriter(){

    if(newJob.length != h2.innerHTML.length){
        h2.innerHTML = h2.innerHTML.concat(newJob.charAt(j))
        j++;
        setTimeout(typeWriter, 200)
        return
    }
    clearInterval(myVar);
    animatedText.style.borderRightStyle = "";
}
function deleteText(){

    if(h2.innerHTML.length){
        h2.innerHTML = h2.innerHTML.substring(0, h2.innerHTML.length - 1)
        setTimeout(deleteText, 100);
        return;
    }
    typeWriter()
}

deleteText()


const travail = document.querySelector(".jobs");

class experience{
    constructor(company, jobDescr, place, startDate, endDate, url){
        this.company = company;
        this.jobDescr = jobDescr;
        this.place = place;
        this.startDate = startDate;
        this.endDate = endDate;
        this.url = url;
    }
};

const ekium = new experience("Ekium", "Automation Project Engineer", "Lyon", "Setpember 2015", "January 2021", "https://www.ekium.eu/")
const genzyme = new experience("Genzyme", "Automation Engineer", "Lyon", "January 2014", "July 2015", "https://www.sanofi.com/en/your-health/specialty-care")

const Jobs = [genzyme, ekium];
var position = 1;

Jobs.forEach(element => {
    const section = document.createElement("section");
    section.setAttribute("class", "work-experience exp".concat(position.toString()))
    position++;
    section.setAttribute("data-id", element.company)
    section.setAttribute("data-state", "small")
    const content = `<h3>${element.jobDescr}<br><a href="${element.url}">@ ${element.company}</a><h3>`;
    // section.style.position = "relative";
    // section.style.left = position.toString().concat("px");
    // position += 100;
    section.innerHTML = content;
    travail.append(section);
})

position = 0;
const allMyJobs = document.querySelectorAll(".work-experience")
const menuIcon = document.querySelector(".menu_icon");
const navBar = document.querySelector(".nav-bar");
const arrow = document.querySelector(".arrow");

allMyJobs.forEach(element => {
    element.addEventListener("click", () =>{
        element.setAttribute("data-state","big")
        arrow.classList.toggle("active");
        arrow.classList.toggle("inactive");
        element.style.position = "static";
        element.style.left = "0px";
    })
})

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("change");
    navBar.classList.toggle("show");
})

arrow.addEventListener("click", () => {
    arrow.classList.toggle("active");
    arrow.classList.toggle("inactive");
    allMyJobs.forEach(element => {
        element.setAttribute("data-state","small");
        // element.style.position = "relative";
        // element.style.left = position.toString().concat("px");
        // position += 100;
    })
    // position = 0;
})




