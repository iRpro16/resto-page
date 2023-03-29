import loadHome from './home';

function createHeader() {

    const header = document.createElement('header');
    header.classList.add('header');

    const restoName = document.createElement('h1');
    restoName.classList.add('resto-name');
    restoName.textContent = 'Fago Cafe';
    header.appendChild(restoName);
    header.appendChild(createButtons());

    return header;
}

function createButtons() {

    const nav = document.createElement('div');
    nav.classList.add('nav');

    const homeBtn = document.createElement('button');
    homeBtn.innerHTML = 'home';
    nav.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.innerHTML = 'menu';
    nav.appendChild(homeBtn);

    const contactBtn = document.createElement('button');
    contactBtn.innerHTML = 'contact';

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn)

    return nav;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute("id", "main");

    return main;
}


function pageLoad() {
    const content = document.querySelector('#content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    loadHome();
}

export default pageLoad;