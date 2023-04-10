function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const headerContact = document.createElement('h1');
    headerContact.classList.add('header-contact');
    headerContact.innerHTML = 'Contact';

    const location = document.createElement('h2');
    location.classList.add("location");
    location.innerHTML = '<p>Location: 11189 Shtucatz In Cul Rd.</p>'
    


    contact.appendChild(headerContact);
    contact.appendChild(location);
    contact.appendChild(createInput());
    
    return contact;
}

function createInput() {
    const form = document.createElement('form');
    form.classList.add('form');

    const fnl = document.createElement('h4');
    fnl.innerHTML = 'Full Name';

    const el = document.createElement('h4');
    el.innerHTML = 'E-mail';

    const tal = document.createElement('h4');
    tal.innerHTML = 'Leave a message!';

    const btn = document.createElement("button");
    btn.classList.add('submit');
    btn.innerHTML = 'Submit';
    

    const fn = document.createElement("input");
    fn.setAttribute('type', 'text');
    fn.setAttribute('name', "FullName");
    form.appendChild(fnl);
    form.appendChild(fn);

    const email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('name', 'email');
    form.appendChild(el);
    form.appendChild(email);

    const textarea = document.createElement('textarea');
    form.appendChild(tal);
    form.appendChild(textarea);

    form.append(btn);

    return form;
}

function loadContact() {
    const main = document.querySelector('.main');
    main.innerHTML = "";
    main.appendChild(createContact())
}

export default loadContact;