import Page from './Page';
import GameThumbnail from '../components/GameThumbnail';
import Router from '../Router';
import {addEventFavButton} from './GamesFav';

export default class GameList extends Page {
	#games;
	searchQuery;
	sortByGenreQuery;
	orderingQuery;

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
		const api = 'https://api.rawg.io/api/games'; // adresse de base pour toute les requette
		const metacritic = 'metacritic=50,100'; // les valeur pour ordoner les jeux (potentiellement changeable plus tard)

		const today = new Date();
		let query = `dates=2020-01-01,${today.getFullYear()}-${String(today.getMonth()+1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
		
		if(this.searchQuery != null) // si null c'est qu'on a pas fait de recherche
			query += this.searchQuery;
		
		if(this.sortByGenreQuery != null)
			query += this.sortByGenreQuery;
		
		if(this.orderingQuery != null)
			query += this.orderingQuery;
		
		showLoader();
		fetch(`${api}?${query}&${metacritic}`)
			.then(response => response.json())
			.then(data => {
				hideLoader();
				this.games = data.results;
				element.innerHTML = this.render();
				const gameLinks = document.querySelectorAll('.gameLink');
				gameLinks.forEach(lien => {
					lien.addEventListener('click', event => {
						event.preventDefault();
						Router.navigate(lien.getAttribute('href'), true);
					})
				})
			})
			.then( e => {
				addEventFavButton();
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

	changeOrderingQuery(ordering) {
		if(ordering === null)
			this.orderingQuery = null;
		else
			this.orderingQuery = `&ordering=${ordering}`;
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