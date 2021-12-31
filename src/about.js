function aboutComponent() {
    const elem = document.createElement('div');
    elem.classList.add('about');
    elem.id = 'about';
    const print = document.createElement('p');
    print.textContent = "South Park has a restaurant and you should definitely eat there! You totally won't be disappointed and we are ensuring that nothing" + 
    " malicious is in your food! Enjoy your favorite meal with our friends Kyle, Stan, Kenny (if alive) and especially Cartman. Our food is cooked freshly by Chef... at least it used to be.";
    elem.appendChild(print);
    return elem;
}

function loadAbout() {
    const main = document.getElementById("main");
    main.innerHTML = "";
    main.appendChild(aboutComponent())
    return main;
}

export { aboutComponent,
loadAbout };