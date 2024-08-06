import './style.css';
import { home, menu, about } from './pages/init.js';

// for dev
//
const loadContent = () => home();
//const loadContent = () => menu();
//const loadContent = () => about();

loadContent();

const removeOldPage = () => {
    const parent = document.querySelector('div#content');
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
};

// Button logic
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        //console.log(button.id); 
        switch(button.id) {
            case "home":
                removeOldPage();
                home();
                break;
            case "menu":
                removeOldPage();
                menu();
                break;
            case "about":
                removeOldPage();
                about();
                break;
        }
    });
});
