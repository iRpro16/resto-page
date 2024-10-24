import "./styles.css";
import lasagna from "./images/lasagna.jpg";

const homePage = (function() {
    // Get content cont
    let content = document.getElementById("content");
    
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
})();