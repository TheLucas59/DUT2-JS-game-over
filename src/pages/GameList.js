import Page from './Page';
import PizzaThumbnail from '../components/PizzaThumbnail';
import Component from '../components/Component';
export default class GameList extends Page {
	#pizzas;

	constructor(pizzas) {
		super('pizzaList'); // on pase juste la classe CSS souhaitée
		this.pizzas = pizzas;
	}

	set pizzas(value) {
		this.#pizzas = value;
		this.children = this.#pizzas.map(pizza => new PizzaThumbnail(pizza));
	}

	mount(element) {
		super.mount(element);
		let api = 'https://api.rawg.io/api/games';

		document.querySelector('.searchBar').style.display='';

		const today = new Date();
		fetch(`${api}?dates=2020-01-01,${today.getFullYear()}-${String(today.getMonth()+1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}&ordering=-metacritic&metacritic=50,100`)
			.then(response => response.json())
			.then(data => {
				this.pizzas = data.results;
				element.innerHTML = this.render();
			});
	}

	changeApiRequest(searchResult) {
		// ici il faut changer l'affichage sur la page
		// mais je n'ai aucune idée de comment faire... (Eliott)
		console.log(searchResult); // print le contenue de la barre de recherche
	}
}
