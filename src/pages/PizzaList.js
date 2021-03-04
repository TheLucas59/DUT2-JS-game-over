import Page from './Page';
import PizzaThumbnail from '../components/PizzaThumbnail';
const config = require("../../apiconfig.json");
export default class PizzaList extends Page {
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
		fetch(`https://api.rawg.io/api/games?key=${config.apikey}`)
			.then(response => response.json())
			.then(data => {
				this.pizzas = data;
				element.innerHTML = this.render();
			});
	}
}
