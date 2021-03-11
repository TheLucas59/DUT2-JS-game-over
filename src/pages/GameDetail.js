import UniqueGameThumbnail from '../components/UniqueGameThumbnail';
import Page from './Page';

export default class GameDetail extends Page {

    constructor(jeu) {
        super('gameDetails');
        if(jeu != undefined) {
            this.jeu = jeu;
        }
    }
    
    set jeu(value) {
        this.children = new UniqueGameThumbnail(value);
    }
    
    mount(element) {
        super.mount(element);
        const pathname = window.location.pathname;
        const slug = pathname.substring(8, pathname.length);
        fetch(`https://api.rawg.io/api/games/${slug}`)
            .then(response => response.json())
            .then(data => {
                this.jeu = data;
                element.innerHTML = this.render();
            })
    }

}