const content = document.querySelector('div#content');
//import m from './menu.csv';
import json from './menu.json';
//import Icon from '../assets/LEFFEN.png';

const menu = () => {
    const photo = new Image();
    //photo.src = Icon;

    const pageHeadline = document.createElement('h2');
    pageHeadline.setAttribute('class', 'menu');
    pageHeadline.textContent = "Menu";

    content.appendChild(pageHeadline);
    content.appendChild(photo);
    
    for (let key in json) {
        const section = document.createElement('div');
        section.setAttribute('class', 'section');
        section.setAttribute('id', `${key}`);
        json[key].forEach((item) => {
            const itemDiv= document.createElement('div');
            itemDiv.setAttribute('class', 'item');

            const name = document.createElement('h4');
            name.textContent = `${item["name"]}`;
            name.setAttribute('class', 'name');

            const description = document.createElement('div');
            description.textContent = `${item["description"]}`;
            description.setAttribute('class', 'description');

            const price = document.createElement('div');
            price.textContent = `$${item["price"]}`;
            price.setAttribute('class', 'price');

            itemDiv.append(name);
            itemDiv.appendChild(description);
            itemDiv.appendChild(price);

            section.appendChild(itemDiv);
        });
        content.appendChild(section);
    }
};

export { menu };
