import fishSticks from './fish-sticks.jpg';
import chili from './chili.jpeg';
import kfc from './cartman-kfc.jpeg';
import cremeFraiche from './creme-fraiche.jpeg';

function menuComponent() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const fishSticksImg = imageAdder(fishSticks, 400, "Fish Sticks: $4", "Do you like fish sticks? Do you like putting fish sticks in your mouth? What are you, a gay fish?");
    const chiliImg = imageAdder(chili, 400, "Chili $7", "A delicious chili with a secret ingredient.");
    const kfcImg = imageAdder(kfc, 400, "Skinless KFC Chicken Thighs: $0", "We give out the chicken for free, because nobody wants it without the skin. Somebody ate all the fucking skin. WTF!")
    const cremeFraicheImg = imageAdder(cremeFraiche, 400, "Extra Creme Fraiche: $1" , "And we're gonna top that with a little Creme Fraiche");

    menu.appendChild(fishSticksImg);
    menu.appendChild(chiliImg);
    menu.appendChild(kfcImg);
    menu.appendChild(cremeFraicheImg);

    return menu;
}

function imageAdder(imgsrc, size, menuTitleText, description) {
    const wrapper = document.createElement('div');
    wrapper.classList.add("menu-item-wrapper");

    //title
    const menuTitle = document.createElement('h2');
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = menuTitleText;
    wrapper.appendChild(menuTitle);

    const imgAndText = document.createElement('div');
    imgAndText.classList.add("image-and-text");

    //img
    const img = new Image();
    img.src = imgsrc;
    img.height = size;
    img.classList.add("menu-img");
    imgAndText.appendChild(img);

    //description
    const desc = document.createElement('p');
    desc.textContent = description;
    desc.classList.add("description");
    imgAndText.appendChild(desc);
    
    wrapper.appendChild(imgAndText);
    return wrapper;
}


function loadMenu() {
    const main = document.getElementById("main");
    main.innerHTML = "";
    main.appendChild(menuComponent())
    return main;
}

export default loadMenu;