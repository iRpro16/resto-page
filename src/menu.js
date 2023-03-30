function createMenu() {
   const menu = document.createElement('div');
   menu.classList.add('menu');

   return menu;
};

function loadMenu() {
    const main = document.querySelector('.main');
    main.appendChild(createMenu());
}

export default loadMenu;