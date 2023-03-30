function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

   const description = document.createElement('div');
   description.classList.add('description');

   const writing = document.createElement('p');
   writing.classList.add('writing');
   writing.innerHTML = 'Welcome to Fago Cafe, introducing various bites known internationally and exceptional coffee made by our amazing coffees. This cafe is excelent for froofing';
   description.appendChild(writing);

   const hours = document.createElement('div');
   hours.classList.add('hours');
   hours.innerHTML = 'Monday: 8:00AM - 8:00PM \n Tuesday: 8:00AM - 8:00PM \n Wednesday: 8:00AM - 8:00PM \n Thursday: 8:00AM - 8:00PM Friday: 8:00AM - 9:30PM \n Saturday: 8:00AM - 9:30PM \n Sunday: CLOSED';
   home.appendChild(description);
   home.appendChild(hours);
    return home;
}

function loadHome() {
    const main = document.querySelector('.main');
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;