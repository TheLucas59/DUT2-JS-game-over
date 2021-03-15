import Page from './Page';
import GameThumbnail from '../components/GameThumbnail';


export default class GamesFav extends Page {
    #gamesFav = [];
    #ids;
    
    constructor(gamesFav) {
        super('gameList');
        this.ids = gamesFav;
    }

    set gamesFav(value) {
        this.#gamesFav = value;
        console.log('#gamesFav');
        console.log(this.#gamesFav);
		this.children = this.#gamesFav.map(game => new GameThumbnail(game));
    }

    mount(element) {
        this.gamesFav = [];
        super.mount(element);
		document.querySelector('.searchBar').style.display=''; // affichage de la barre de recherche
        this.ids.map(id => {
            return fetch(`https://api.rawg.io/api/games/${id}`)
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                    this.gamesFav = [...this.#gamesFav, data];
                    element.innerHTML = this.render();
                    // return data;
                })
        });
    }
}