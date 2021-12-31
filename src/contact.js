function contactComponent() {
    const elem = document.createElement('div');
    elem.classList.add('contact');
    elem.id = 'contact';

    const title = document.createElement('h2');
    title.textContent = "You can find us here!";

    const address = document.createElement('p');
    address.textContent = "Address: 163 Elm St, Hartsel, Colorado 80449";
    
    const phone = document.createElement('p');
    phone.textContent = "Phone: +1 888-837-6400";

    const openingHours = document.createElement('p');
    openingHours.textContent = "Open everyday: 7AM - 11PM";

    elem.appendChild(title);
    elem.appendChild(address);
    elem.appendChild(phone);
    elem.appendChild(openingHours);
    
    return elem;
}

function loadContact() {
    const main = document.getElementById("main");
    main.innerHTML = "";
    main.appendChild(contactComponent())
    return main;
}

export default loadContact;