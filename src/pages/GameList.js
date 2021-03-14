import Page from './Page';
import GameThumbnail from '../components/GameThumbnail';
import Component from '../components/Component';
export default class GameList extends Page {
	#games;

	constructor(games) {
		super('gameList'); // on pase juste la classe CSS souhaitée
		this.games = games;
	}

	set games(value) {
		this.#games = value;
		this.children = this.#games.map(game => new GameThumbnail(game));
	}

	mount(element) {
		super.mount(element);
		let api = 'https://api.rawg.io/api/games';

		document.querySelector('.searchBar').style.display='';

		const today = new Date();
		fetch(`${api}?
			dates=2020-01-01,${today.getFullYear()}-${String(today.getMonth()+1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}&
			ordering=-metacritic&
			metacritic=50,100`)
			.then(response => response.json())
			.then(data => {
				this.games = data.results;
				element.innerHTML = this.render();
			});
	}

	changeApiRequest(searchResult) {
		// ici il faut changer l'affichage sur la page
		// mais je n'ai aucune idée de comment faire... (Eliott)
		console.log(searchResult); // print le contenue de la barre de recherche
	}
}
