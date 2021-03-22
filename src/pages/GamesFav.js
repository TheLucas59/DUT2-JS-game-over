import Page from './Page';
import GameThumbnail from '../components/GameThumbnail';
import Router from '../Router';

export default class GamesFav extends Page {
    #gamesFav = [];
    // #ids;
    
    constructor() {
        super('gameList');
        // this.ids = JSON.parse(localStorage.getItem('favoris'));
    }

    set gamesFav(value) {
        this.#gamesFav = value;
		this.children = this.#gamesFav.map(game => new GameThumbnail(game));
    }

    mount(element) {
        this.gamesFav = [];
        super.mount(element);
                
        let favs = JSON.parse(localStorage.getItem('favoris'));
        
        favs.forEach(slug => {
            showLoader();
            return fetch(`https://api.rawg.io/api/games/${slug}`)
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
                .then(e => {
                    addEventFavButton()
                });
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

function addEventFavButton() {
    document.querySelectorAll('.favButton').forEach(
        button => {
            button.addEventListener('click', event => {
                event.preventDefault();
                event.stopPropagation();
                
                let favoris = JSON.parse(localStorage.getItem('favoris'));
                let slug = button.getAttribute('alt');
                
                
                if (favoris != null) {
                    if (favoris.includes(slug)) {
                        favoris.splice(favoris.indexOf(slug), 1);
                        alert("un jeu a été retiré de vos favoris");
                    }
                    else {
                        favoris.push(slug);
                        alert("Vous avez ajouté un jeu à vos favoris");
                    }
                }
                else{
                    favoris = [slug];
                    alert("Vous avez ajouté un jeu à vos favoris");
                }
                
                localStorage.setItem("favoris", JSON.stringify(favoris));
                
            	Router.navigate(document.location.pathname, false); // on "recharge" la page

            });
        }
    )
}

export {addEventFavButton};