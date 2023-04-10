import coffee from './imgs/coffee-pic.jpg';

function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

   const description = document.createElement('div');
   description.classList.add('description');

   const image = document.createElement('img');
   image.classList.add('coffee');
   image.src = coffee;
   

   const writing = document.createElement('p');
   writing.classList.add('writing');
   writing.innerHTML = '<p>Welcome to Fago Cafe, introducing various bites known internationally and exceptional coffee made by our amazing coffees. This cafe is excelent for froofing.</p>';
   description.appendChild(writing);

   const hours = document.createElement('div');
   hours.classList.add('hours');
   hours.innerHTML = "<p>Monday: 8:00AM - 8:00PM</p> <p>Tuesday: 8:00AM - 8:00 PM</p> <p>Wednesday: 8:00AM - 8:00PM</p> <p> Thursday: 8:00AM - 8:00PM</p> <p>Friday: 8:00AM - 10:00PM</p> <p>Saturday: 8:00AM - 10:00PM</p> <p>Sunday: CLOSED</p>"
   home.appendChild(description);
   home.appendChild(hours);
   description.appendChild(image)
    return home;
}

function loadHome() {
    const main = document.querySelector('.main');
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;