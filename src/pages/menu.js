import friedCalamari from "../images/fried-calamari.jpg";
import octopus from "../images/octopus.jpg";

function createMenu() {
     // Get content cont
     const content = document.getElementById("content");
     const header = document.querySelector(".header");
     const navBar = document.querySelector(".nav-bar");
     content.innerHTML = "";

     // Div Menu
     const menuCont = document.createElement("div");
     menuCont.classList.add("menu-cont");
     menuCont.style.height = "95%";
     menuCont.style.width = "80%";
     menuCont.style.display = 'flex';
     menuCont.style.flexDirection = 'column';
     content.appendChild(menuCont);

     // Rid first element
     if (header.childElementCount == 2) {
          header.removeChild(header.firstElementChild);
      }

     // Clear background image
     document.body.style.backgroundImage = 'none';
     document.body.style.backgroundColor = '#967BB6';
 
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

     // Cont antipasti
     const antipastiCont = document.createElement("div");
     antipastiCont.classList.add("antipasti-cont");
     antipastiCont.style.display = 'flex';
     antipastiCont.style.width = "100%";
     antipastiCont.style.height = "40%";
     antipastiCont.style.gap = "20px";
     antipastiCont.style.justifyContent = "center";
     antipastiCont.style.alignItems = "center";

     menuCont.appendChild(antipastiCont);

     // Cont primi
     const primiCont = document.createElement("div");
     primiCont.classList.add("primi-cont");
     primiCont.style.width = "100%";
     primiCont.style.height = "50%";
     menuCont.appendChild(primiCont);

     // Antipasti menu
     const antimenuCont = document.createElement("div");
     antimenuCont.classList.add("antimenu-cont");
     antimenuCont.style.display = "flex";
     antimenuCont.style.flexDirection = "column";
     antimenuCont.style.height = "100%"
     antimenuCont.style.width = "50%";
     antipastiCont.appendChild(antimenuCont);

     // Antipasti title
     const antimenuTitle = document.createElement("h2");
     antimenuTitle.classList.add("antimenu-title");
     antimenuTitle.innerText = "Antipasti";
     antimenuTitle.style.padding = '0';
     antimenuTitle.style.margin = '0';
     antimenuTitle.style.color = 'pink';
     antimenuTitle.style.textAlign = 'center';
     antimenuTitle.style.fontSize = "4rem";
     antimenuTitle.style.borderBottom = "5px solid pink";
     antimenuTitle.style.width = '60%';
     antimenuCont.appendChild(antimenuTitle);
     
     // Antipasti menu items
     const polpoDiv = document.createElement("div");
     const polpoTitle = document.createElement("p");
     polpoTitle.innerText = "POLPO ------------------ $18.5";
     const polpoIngredients = document.createElement("div");
     polpoIngredients.innerText = "Lemon, burrata, shallots";
     polpoDiv.appendChild(polpoTitle);
     polpoDiv.appendChild(polpoIngredients);
     antimenuCont.appendChild(polpoDiv);

     const calamariDiv = document.createElement("div");
     const calamariTitle = document.createElement("p");
     calamariTitle.innerText = "CALAMARI FRITO ------------------ $14";
     const calamariIngredients = document.createElement("div");
     calamariDiv.style.marginTop = "15px";
     calamariIngredients.innerText = "Fried calamari served with freshly squeezed ";
     calamariDiv.appendChild(calamariTitle);
     calamariDiv.appendChild(calamariIngredients);
     antimenuCont.appendChild(calamariDiv);

     const insalataDiv = document.createElement("div");
     const insalataTitle = document.createElement("p");
     insalataTitle.innerText = "INSALTA ------------------ $12";
     const insalataIngredients = document.createElement("div");
     insalataDiv.style.marginTop = "15px";
     insalataIngredients.innerText = " Lettuce, ricotta, hazelnut, pecans";
     insalataDiv.appendChild(insalataTitle);
     insalataDiv.appendChild(insalataIngredients);
     antimenuCont.appendChild(insalataDiv);

     const burrataDiv = document.createElement("div");
     const burrataTitle = document.createElement("p");
     burrataTitle.innerText = "BURRATA ------------------ $19";
     const burrataIngredients = document.createElement("div");
     burrataDiv.style.marginTop = "15px";
     burrataIngredients.innerText = "Burrata, pistacchio, honey, salt & pepper";
     burrataDiv.appendChild(burrataTitle);
     burrataDiv.appendChild(burrataIngredients);
     antimenuCont.appendChild(burrataDiv);
}


export {createMenu};