import Component from './Component.js';
import Img from './Img.js';

export default class PizzaThumbnail extends Component {
	constructor(game) {
		super('article', { name: 'class', value: 'pizzaThumbnail' }, [
			new Component('a', { name: 'href', value: game.background_image }, [
				new Img(game.background_image),
				new Component('section', null, [
					new Component('h4', null, game.name),
					new Component('p', null, `Note metacritic : ${game.metacritic}`),
					new Component('button', null, 'Favoris')
				]),
			]),
		]);
	}
}
