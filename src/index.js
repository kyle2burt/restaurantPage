console.log("Hello Webpack");

console.log("Hello from index.js")

// Import website pages
import home from './home/home';
import about from './about/about';
import menu from './menu/menu';

// select content container
const content = document.querySelector("#content");


//select buttons
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button")
const aboutButton = document.querySelector("#about-button");

// functions

function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

// button event listeners
homeButton.addEventListener("click", (event) => {
    removeAllChildNodes(content);
    home();
});

menuButton.addEventListener("click", (event) => {
    removeAllChildNodes(content);
    menu();
});

aboutButton.addEventListener("click", (event) => {
    removeAllChildNodes(content);
    about();
});


// run on start

home(content);