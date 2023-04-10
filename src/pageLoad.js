import loadContact from './contact';
import loadHome from './home';
import loadMenu from './menu';

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
    homeBtn.classList.add('home');
    homeBtn.innerHTML = 'home';
    nav.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu');
    menuBtn.innerHTML = 'menu';
    nav.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('contact');
    contactBtn.innerHTML = 'contact';
    nav.appendChild(contactBtn);

    homeBtn.addEventListener('click', () => {
        loadHome();
    })

    menuBtn.addEventListener('click', () => {
        loadMenu();
    })

    contactBtn.addEventListener('click', () => {
        loadContact()
    })

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