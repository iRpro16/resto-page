import loadHome from './home';
import loadMenu from './menu'

function createHeader() {

    const header = document.createElement('div');
    header.classList.add('header');

    const restoName = document.createElement('h1');
    restoName.classList.add('resto-name');
    restoName.textContent = 'Fago Cafe';
    header.appendChild(restoName);
    header.appendChild(createButtons());

    return header;
}

function createMain() {
    const main = document.createElement('div');
    main.classList.add('main');

    return main;
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

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    return footer;
}


function pageLoad() {
    const content = document.querySelector('#content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    loadHome();
}

export default pageLoad;