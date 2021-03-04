import Router from '../Router.js';
import Page from './Page.js';

export default class AddPizzaPage extends Page {
	render() {
		return /*html*/ `
			<form class="pizzaForm">
				<label>
					Nom :
					<input type="text" name="name">
				</label>
				<label>
					Image :<br/>
					<input type="text" name="image" placeholder="https://source.unsplash.com/xxxxxxx/600x600">
					<small>Vous pouvez trouver des images de pizza sur <a href="https://unsplash.com/">https://unsplash.com/</a> puis utiliser l'URL <code>https://source.unsplash.com/xxxxxxx/600x600</code> où <code>xxxxxxx</code> est l'id de la photo choisie (celui dans la barre d'adresse)</small>
				</label>
				<label>
					Prix petit format :
					<input type="number" name="price_small" step="0.05">
				</label>
				<label>
					Prix grand format :
					<input type="number" name="price_large" step="0.05">
				</label>
				<button type="submit">Ajouter</button>
			</form>`;
	}

	mount(element) {
		super.mount(element);
		const form = this.element.querySelector('.pizzaForm');
		form.addEventListener('submit', event => {
			event.preventDefault();
			this.submit();
		});
	}

	submit() {
		// D.4. La validation de la saisie
		const nameInput = this.element.querySelector('input[name="name"]');
		const imageInput = this.element.querySelector('input[name="image"]');
		const priceSmallInput = this.element.querySelector(
			'input[name="price_small"]'
		);
		const priceLargeInput = this.element.querySelector(
			'input[name="price_large"]'
		);

		name = nameInput.value;
		if (name === '') {
			alert('Erreur : le champ "Nom" est obligatoire');
			return;
		}
		alert(`La pizza ${name} a été ajoutée !`);
		fetch('http://localhost:8080/api/v1/pizzas', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: nameInput.value,
				image: imageInput.value,
				price_small: priceSmallInput.value,
				price_large: priceLargeInput.value,
			}),
		}).then(() => Router.navigate('/'));
	}
}
