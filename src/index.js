import './style.css';
import { home, menu, about } from './pages/init.js';

const loadContent = () => home();
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
