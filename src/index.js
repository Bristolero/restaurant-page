import headerIcon from './South-Park.png'
import './style.css'
import {loadAbout, aboutComponent} from './about.js';


/*<header><img src="South-Park.png" height="150px" class="header-img"><h1>The Restaurant</h1></header>
    <main>
        <div class="tab-wrapper"></div>
        <div class="about" id="about"><p>South Park has a restaurant and you should definitely eat there! You totally won't be disappointed
            and we are ensuring that nothing malicious is in your food! Enjoy your favorite meal with our friends Kyle, Stan, Kenny (if alive) and especially Cartman. 
            Our food is cooked freshly by Chef... at least it used to be.
        </p></div>
    </main>
 <footer>Made by Bristolero</footer>
*/

function headerComponent() {
    const header = document.createElement('header');
    const img = new Image();
    img.src = headerIcon;
    img.height = 150;
    const h1 = document.createElement('h1');
    h1.textContent = "The Restaurant";
    header.appendChild(img);
    header.appendChild(h1);
    header.appendChild(navComponent())
    return header;
}

function navComponent() {
    const nav = document.createElement('div');
    nav.classList.add('nav')

    const aboutButton = document.createElement('button');
    aboutButton.classList.add("home-btn");
    aboutButton.textContent = "About";
    aboutButton.addEventListener('click', function() {
        loadAbout();
    })


    const menuButton = document.createElement('button');
    menuButton.classList.add("menu-btn");
    menuButton.textContent = "Menu";
    menuButton.addEventListener('click', function() {
        console.log("hele");
    })

    const contactButton = document.createElement('button');
    contactButton.classList.add("home-btn");
    contactButton.textContent = "Contact";
    contactButton.addEventListener('click', function() {
        console.log("hele");
    })

    nav.appendChild(aboutButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function mainComponent() {
    const main = document.createElement('main');
    main.id = "main";
    main.appendChild(aboutComponent());
    return main;
}

function footerComponent() {
    const footer = document.createElement('footer');
    footer.textContent = "Made by Bristolero";
    return footer;
}

function initialize() {
    const toAppend = document.body;
    toAppend.appendChild(headerComponent());
    toAppend.appendChild(mainComponent())
    toAppend.appendChild(footerComponent());
}

initialize()