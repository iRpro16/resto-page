const home = () => {
    const home = document.createElement('div');
    home.classList.add('home');

    const paragraph = document.createElement('p');
    paragraph.textContent = 'The best cafe in town. Open since 2021, this innovative offers authentic Italian coffee, as well as various bites known international. We are open for froofing.';
    paragraph.classList.add('para-bground');
    
    const hours = document.createElement('div');
    hours.classList.add('hours');

    home.appendChild(paragraph);
    home.appendChild(hours);

    return home;
}

function loadHome() {
    const main = document.querySelector('.main');
    main.appendChild(home());
}

export default loadHome;