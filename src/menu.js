import frenchToast from "./imgs/frenchtoast.jpg";
import pancakes from "./imgs/pancakes.jpg";


function createMenu() {
   const menu = document.createElement('div');
   menu.classList.add('menu');

   menu.appendChild(createMenuItem(
    "French Toast",
    "Rich bread with protein powder, blueberries, and bananas. Topped with some native maple syrup.",
    frenchToast
   ));

   menu.appendChild(createMenuItem(
    "Pancakes",
    "Pancakes with bananas, fresh herbs, and maple syrup.",
    pancakes
   ))
   return menu;
};

function createMenuItem(name, description, image) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h3");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    const foodImage = document.createElement('img');
    foodImage.classList.add('food-image');
    foodImage.src = image;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodDescription);

    return menuItem;

}

function loadMenu() {
    const main = document.querySelector('.main');
    main.innerHTML = '';
    main.appendChild(createMenu());
}

export default loadMenu;