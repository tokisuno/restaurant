const content = document.querySelector('div#content');
import Icon from '../assets/meatballs.png';

const about = () => {
    const photo = new Image();
    photo.src = Icon;
 
    const pageHeadline = document.createElement('h2');
    pageHeadline.setAttribute('class', 'title');
    pageHeadline.textContent = "About the restaurant!";

    const pageFluff = document.createElement('div');
    pageFluff.setAttribute('class', 'fluff');
    pageFluff.textContent = "Picture a child sitting next to a projector, learning from your films to become a much better director. Now picture a three billion dollar dream machine, who can block bust all over your crop duster scene! Try to Duel with me Alfred, ya must be Psycho. I'll bring back JAWS and take a bite of your Lifeboat. I'm Always so on the top of my game, I get the Vertigo. My jet's in the Terminal, waiting for me to Murder! Ya, I rocked the Academy and the DGA. You rock as many Oscars as that schlep Michael Bay. Next time you're filling up those jowls with three steaks and soufflé, check the trade, see me Amblin to my next big play. I produce cartoons and made games for all ages. You produce Jimmy Stewart making one of two faces. Maybe next time I visit, you'll be a bit more gracious. Now kiss my full moon and just bask in my greatness!"

    content.appendChild(photo);
    content.appendChild(pageHeadline);
    content.appendChild(pageFluff);
};

export { about };
