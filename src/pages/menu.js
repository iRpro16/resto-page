function createMenu() {
     // Get content cont
     const content = document.getElementById("content");
     content.innerHTML = "";
 
     // Menu cards (antipasti primi drinks)
     const menuCont = document.createElement("div");
     menuCont.classList.add("menu-cont");
     menuCont.style.height = '70%';
     menuCont.style.width = '80%'
     menuCont.style.backgroundColor = 'pink';
     content.appendChild(menuCont);
}


export {createMenu};