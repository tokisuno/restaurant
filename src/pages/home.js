const content = document.querySelector('div#content');
import Icon from '../assets/LEFFEN.png';

const home = () => {
    const photo = new Image();
    photo.src = Icon;

    const pageHeadline = document.createElement('h2');
    pageHeadline.setAttribute('class', 'headline');
    pageHeadline.textContent = "Swedish tourist so impressed by his meal, he rips his citizenship to stay forever!";

    const pageFluff = document.createElement('div');
    pageFluff.setAttribute('class', 'fluff');
    pageFluff.textContent = "Leffen is known online as being an unappologetically passionate gamer and a professional hater. But here's a little known fact about William Peter (Leffen) Hjelte: his love for food, specifically Surströmming; a staple in traditional Swedish cuisine. Leffen loved our herring so much, he in the moment tore apart his Swedish citizenship, denouncing his residency, and screamed \"För fan i helvete, jag älskar denna surströmming!\", which roughly translates to \"Wow, this is the best surströmming I have ever had!\". "

    content.appendChild(photo);
    content.appendChild(pageHeadline);
    content.appendChild(pageFluff);
};

export { home };
