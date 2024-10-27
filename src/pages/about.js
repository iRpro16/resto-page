function createAbout() {
    // Get content
    const content = document.getElementById("content");
    const header = document.querySelector(".header");
    const navBar = document.querySelector(".nav-bar");
    content.innerHTML = "";

    // Rid first element
    if (header.childElementCount == 2) {
        header.removeChild(header.firstElementChild);
    }

    // Append resto name to header
    const restoHeader = document.createElement("h2");
    restoHeader.classList.add("resto-header");
    restoHeader.innerText = "JOE'S LASAGNA";
    restoHeader.style.color = 'pink';
    header.appendChild(restoHeader);

    // Header
    header.insertBefore(restoHeader, navBar);
    header.style.justifyContent = 'space-around';
    header.style.borderBottom = '5px solid pink';

    // Background
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = "#967BB6";

    // Create central cont
    const centralCont = document.createElement("div");
    centralCont.classList.add("central-cont");
    centralCont.style.width = '70%';
    centralCont.style.height = "80%";
    content.appendChild(centralCont);

    // History
    const historyCont = document.createElement("div");
    const historyTitle = document.createElement("h2");
    historyTitle.classList.add("history-title");
    historyTitle.innerText = "OUR STORY";
    historyTitle.style.borderBottom = "2px solid pink";
    historyTitle.style.color = "pink";
    const historyInfo = document.createElement("p");
    historyInfo.style.color = 'pink';
    historyInfo.style.fontSize = "1.8rem";
    historyInfo.innerText = "Welcome to Joe's Lasagna, where our passion for lasagna is at the heart of everything we do. Born from a love of traditional Italian comfort food, we specialize in crafting lasagna with fresh, authentic ingredients and layers of flavor that bring friends and families together. Our recipes are inspired by generations of home-cooked Italian meals, and we take pride in every pan we bake. From classic styles to creative twists, each lasagna is made with the same care as if we were cooking for our own family. Join us for a slice of comfort, tradition, and a whole lot of flavor.";
    historyCont.appendChild(historyTitle);
    historyCont.appendChild(historyInfo);
    centralCont.appendChild(historyCont);

    // Contact us
    const contactCont = document.createElement("div");
    const contactTitle = document.createElement("h2");
    contactTitle.innerText = "CONTACT INFO";
    contactTitle.style.borderBottom = "2px solid pink";
    contactTitle.style.color = "pink";
    const contactInfo = document.createElement("p");
    contactInfo.style.color = "pink";
    contactInfo.innerText = "For any further inquiries, contact us:";
    contactInfo.style.fontSize = "1.8rem";
    const contactInfoList = document.createElement("ul");
    contactInfoList.classList.add("contact-info");
    contactInfoList.style.fontSize = "1.8rem";
    contactInfoList.style.color = "pink";
    const phone = document.createElement("li");
    phone.innerText = "514-591-7770";
    contactInfoList.appendChild(phone);
    const email = document.createElement("li");
    email.innerText = "joeslasagna@gmail.com";
    contactInfoList.appendChild(email);

    contactCont.appendChild(contactTitle);
    contactCont.appendChild(contactInfo);
    contactCont.appendChild(contactInfoList);
    centralCont.append(contactCont);
}

export {createAbout}