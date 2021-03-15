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
		this.children = this.#gamesFav.map(game => new GameThumbnail(game));
    }

    mount(element) {
        showLoader();
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
                    hideLoader();
                })
        });
    }
}

function showLoader(){
	document.querySelector(".loader").classList.add("display");
	document.querySelector(".pageContainer").classList.add("blur");
}

function hideLoader(){
	document.querySelector(".loader").classList.remove("display");
	document.querySelector(".pageContainer").classList.remove("blur");
}