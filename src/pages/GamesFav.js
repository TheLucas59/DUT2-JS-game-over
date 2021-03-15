import Page from './Page';
import GameThumbnail from '../components/GameThumbnail';
import Router from '../Router';

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
                    this.gamesFav = [...this.#gamesFav, data];
                    element.innerHTML = this.render();
                    const gameLinks = document.querySelectorAll('.gameLink');
                    gameLinks.forEach(lien => {
                        lien.addEventListener('click', event => {
                            event.preventDefault();
                            Router.navigate(lien.getAttribute('href'), true);
                        })
                    })
                })
        });
    }
}