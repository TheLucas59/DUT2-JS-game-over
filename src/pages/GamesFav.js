import Page from './Page';
import GameThumbnail from '../components/GameThumbnail';


export default class GamesFav extends Page {
    #gamesFav;
    
    constructor(gamesFav) {
        super('favPage');
        this.gamesFav = gamesFav;
    }

    set gamesFav(value) {
        console.log(`value : ${value}`);
        this.#gamesFav = value;
        console.log(`in setter #gamesFav : ${this.#gamesFav}`);

        this.children = this.#gamesFav.map(element => new GameThumbnail(element))
    }

    mount(element) {
		document.querySelector('.searchBar').style.display=''; // affichage de la barre de recherche
        console.log(`mount ${element}`);
        console.log(`#gamesFav : ${this.#gamesFav}`);

        let tabFav = [];
        
        this.#gamesFav.map(id => {
            fetch(`https://api.rawg.io/api/games/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(`data: ${data.name}`);
                    tabFav.push(data);
                    element.innerHTML = this.render();
                    console.log(tabFav);
                    this.gamesFav = tabFav;
                });
        });
    }
    
    
}