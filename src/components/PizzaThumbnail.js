import Component from './Component.js';
import Img from './Img.js';

export default class PizzaThumbnail extends Component {
	constructor(game) {
		super('article', { name: 'class', value: 'pizzaThumbnail' }, [
			// TODO : changer url pour aller directement sur la page du jeu
			new Component('a', { name: 'href', value: `/detail` }, [ 
				new Img(game.background_image),
				new Component('section', null, [
					new Component('h4', null, game.name),
					new Component('p', null, `Note metacritic : ${game.metacritic}`),
				]),
			]),
		]);
	}
}
