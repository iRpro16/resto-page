import "./styles.css";
import lasagna from "./images/lasagna.jpg";
import { createMenu } from "./pages/menu";
import {createAbout} from "./pages/about";

function createHome() {
    // Get content cont
    const content = document.getElementById("content");
    const header = document.querySelector(".header");
    header.style.borderBottom = 'none';
    content.innerHTML = "";

    // content
    content.style.height = '90%';
    content.style.display = 'flex';
    content.style.justifyContent = 'center';
    content.style.alignItems = 'center';
    content.style.flexDirection = 'column';

    // Rid first element
    if (header.childElementCount == 2) {
        header.removeChild(header.firstElementChild);
    }
    
    // Background image for home page
    document.body.style.backgroundImage = `url(${lasagna})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    // Homepage resto name
    const restoNameDiv = document.createElement("div");
    restoNameDiv.classList.add('resto-name-cont');
    restoNameDiv.style.height = '30%';
    restoNameDiv.style.width = '900px';
    restoNameDiv.style.border = '10px solid pink';
    restoNameDiv.style.borderRadius = '10px';
    content.appendChild(restoNameDiv);

    // Append resto name
    const restoName = document.createElement("h1");
    restoName.classList.add('resto-name');
    restoName.style.color = 'pink';
    restoName.innerText = "JOE'S LASAGNA";
    restoNameDiv.appendChild(restoName);

    // slogan
    const slogan = document.createElement("p");
    slogan.classList.add('slogan');
    slogan.style.color = 'pink';
    slogan.innerText = 'lasagna, vino e ricordi';
    restoNameDiv.appendChild(slogan);

    // Opening hours
    const hoursCont = document.createElement("div");
    hoursCont.classList.add('hours-cont');

    // Hours open
    const hoursList = document.createElement("ul");
    hoursList.classList.add("opening-hours");
    const hoursOne = document.createElement("li");
    hoursOne.innerText = "MONDAY TO THURSDAY 17H - 21H";
    const hoursTwo = document.createElement("li");
    hoursTwo.innerText = "FRIDAY TO SUNDAY 17H - 23H";
    hoursList.appendChild(hoursOne);
    hoursList.appendChild(hoursTwo);
    hoursCont.appendChild(hoursList);
    content.appendChild(hoursCont);
};
createHome();

const getMenu = document.querySelector(".menu");
const getHome = document.querySelector(".home");
const getAbout = document.querySelector(".about");
getMenu.addEventListener("click", createMenu);
getHome.addEventListener("click", createHome);
getAbout.addEventListener("click", createAbout);