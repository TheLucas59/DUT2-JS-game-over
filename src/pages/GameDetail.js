import Component from '../components/Component';
import Img from '../components/Img';
import Screenshots from '../components/Screenshots';
import UniqueGameThumbnail from '../components/UniqueGameThumbnail';
import Page from './Page';
import {addEventFavButton} from './GamesFav';
import {hideLoader, showLoader} from '../Loader.js'

export default class GameDetail extends Page {

    constructor(jeu) {
        super('gameDetails');
        if(jeu != undefined) {
            this.jeu = jeu;
        }
    }
    
    set jeu(value) {
        this.children = [new UniqueGameThumbnail(value)];
    }
    
    mount(element) {
        super.mount(element);
        const pathname = window.location.pathname;
        const slug = pathname.substring(8, pathname.length);
        showLoader();
        fetch(`https://api.rawg.io/api/games/${slug}`)
            .then(response => response.json())
            .then(data => {
                this.jeu = data;
                element.innerHTML = this.render();
                hideLoader();
                data.stores.forEach(store => {
                    if(store.store.slug == 'steam'){
                        let appId = store.url.slice('https://store.steampowered.com/app/'.length, store.url.length-1);
                        if(appId.includes('/')){
                            appId = appId.slice(0, appId.indexOf('/'));
                        }
                        let corsProxy = 'https://cors-anywhere.herokuapp.com/'; // CORS proxy nécéssaire malheureusement
                        fetch(`${corsProxy}https://www.protondb.com/api/v1/reports/summaries/${appId}.json`)
                            .then(response => response.json())
                            .then(data => {
                                document.querySelector('.protondb').innerHTML += `Rating ProtonDB : ${data.tier} avec un score de ${data.score*100}%`;                                
                            }).catch();
                    }
                });

            }).then(() => {
                fetch(`https://api.rawg.io/api/games/${slug}/screenshots`)
                    .then(response => response.json())
                    .then(data => {
                        element.innerHTML += new Screenshots(data.results.map(result => 
                            new Component('a', { name: 'href', value: result.image }, [
                                new Img(result.image)
                            ]))).render();
                    addEventFavButton()

                    })
            }).catch(function() {
                hideLoader();
                element.innerHTML = `<h2>Ce jeu n'existe pas...</h2>`
                return;
            })
    }

}
