import pageLoad from './functions/pageLoad';
import menu from './pages/menu';
import home from './pages/home'
import render from './functions/render'
import './styles.css';

pageLoad();

const content = document.querySelector('#content');

const homeBtn = document.createElement('button');
homeBtn.classList.add = "tab-button";
homeBtn.innerHTML = 'Home';
content.appendChild(homeBtn);

const menuBtn = document.createElement('button');
menuBtn.classList.add = "tab-button";
menuBtn.innerHTML = 'Menu';
content.appendChild(menuBtn);


menuBtn.addEventListener('click', () => {
    render();
    menu();
})

homeBtn.addEventListener('click', () => {
    render();
    home();
})


