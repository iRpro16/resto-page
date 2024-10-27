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
     menuCont.style.width = "60%";
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
     antipastiCont.style.height = "50%";
     antipastiCont.style.justifyContent = "center";
     antipastiCont.style.alignItems = "center";
     menuCont.appendChild(antipastiCont);

     // Cont primi
     const primiCont = document.createElement("div");
     primiCont.classList.add("primi-cont");
     primiCont.style.display = "flex";
     primiCont.style.width = "100%";
     primiCont.style.height = "50%";
     primiCont.style.justifyContent = "center";
     primiCont.style.alignItems = "center";
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
     antimenuTitle.style.fontSize = "4rem";
     antimenuTitle.style.borderBottom = "5px solid pink";
     antimenuTitle.style.width = '400px';
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
     calamariIngredients.innerText = "Fried calamari served with freshly squeezed lemon";
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

     // Primi menu cont
     const primimenuCont = document.createElement("div");
     primimenuCont.classList.add("primimenu-cont");
     primimenuCont.style.display = "flex";
     primimenuCont.style.flexDirection = "column";
     primimenuCont.style.height = "100%"
     primimenuCont.style.width = "50%";
     primiCont.appendChild(primimenuCont);

     // Primi title
     const primimenuTitle = document.createElement("h2");
     primimenuTitle.classList.add("primimenu-title");
     primimenuTitle.innerText = "Primi";
     primimenuTitle.style.padding = '0';
     primimenuTitle.style.margin = '0';
     primimenuTitle.style.color = 'pink';
     primimenuTitle.style.fontSize = "4rem";
     primimenuTitle.style.borderBottom = "5px solid pink";
     primimenuTitle.style.width = '400px';
     primimenuCont.appendChild(primimenuTitle);

     // Primi menu items
     const originaleDiv = document.createElement("div");
     const originaleTitle = document.createElement("p");
     originaleTitle.innerText = "ORGINALE ------------------ $17";
     const originaleIngrdients = document.createElement("div");
     originaleDiv.style.marginTop = "15px";
     originaleIngrdients.innerText = "Mince meat sugo, pepperoni, mozzarella, mushrooms";
     originaleDiv.appendChild(originaleTitle);
     originaleDiv.appendChild(originaleIngrdients);
     primimenuCont.appendChild(originaleDiv);

     const vegetarianaDiv = document.createElement("div");
     const vegetarianaTitle = document.createElement("p");
     vegetarianaTitle.innerText = "VEGETARIANA ------------------ $15";
     const vegetarianaIngredients = document.createElement("div");
     vegetarianaDiv.style.marginTop = "15px";
     vegetarianaIngredients.innerText = "Eggplant, sugo, ricotta, fiore di latte";
     vegetarianaDiv.appendChild(vegetarianaTitle);
     vegetarianaDiv.appendChild(vegetarianaIngredients);
     primimenuCont.appendChild(vegetarianaDiv);

     const nonnasDiv = document.createElement("div");
     const nonnasTitle = document.createElement("p");
     nonnasTitle.innerText = "DA NONNA ------------------ $ $20";
     const nonnasIngredients = document.createElement("div");
     nonnasDiv.style.marginTop = "15px";
     nonnasIngredients.innerText = "Beef, lamb, house sugo, fiore di latte, béchamel";
     nonnasDiv.appendChild(nonnasTitle);
     nonnasDiv.appendChild(nonnasIngredients);
     primimenuCont.appendChild(nonnasDiv);
}


export {createMenu};