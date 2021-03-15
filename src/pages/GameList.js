import Page from './Page';
import GameThumbnail from '../components/GameThumbnail';
import Component from '../components/Component';
export default class GameList extends Page {
	#games;
	searchQuery;
	sortByGenreQuery;

	constructor(games) {
		super('gameList'); // on pase juste la classe CSS souhaitée
		this.games = games;
	}

	set games(value) {
		this.#games = value;
		this.children = this.#games.map(game => new GameThumbnail(game));
	}

	mount(element) {
		document.querySelector('.searchBar').style.display=''; // affichage de la barre de recherche

		super.mount(element);
		let api = 'https://api.rawg.io/api/games'; // adresse de base pour toute les requette
		let ordering = 'ordering=-metacritic&metacritic=50,100'; // les valeur pour ordoner les jeux (potentiellement changeable plus tard)

		const today = new Date();
		let query = `dates=2020-01-01,${today.getFullYear()}-${String(today.getMonth()+1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
		
		if(this.searchQuery != null) // si null c'est qu'on a pas fait de recherche
			query += this.searchQuery;

		
		if(this.sortByGenreQuery != null)
			query += this.sortByGenreQuery;
		
		fetch(`${api}?${query}&${ordering}`)
			.then(response => response.json())
			.then(data => {
				this.games = data.results;
				element.innerHTML = this.render();
			});
	}

	changeApiRequest(searchResult) {
		if(searchResult === null)
			this.searchQuery = null;
		else
			this.searchQuery = `&search=${searchResult}`; // on set la variable de recherche avec ce qu'on récupère de l'input
	}

	changeGenre(genre) {
		if(genre === null)
			this.sortByGenreQuery = null;
		else
			this.sortByGenreQuery = `&genres=${genre}`;
	}
}
