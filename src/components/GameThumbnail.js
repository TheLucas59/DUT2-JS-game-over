import Component from './Component.js';
import Img from './Img.js';

export default class GameThumbnail extends Component {
	constructor(game) {
		super('article', { name: 'class', value: 'gameThumbnail' }, [
			new Component('a', [{ name: 'href', value: `/detail-${game.slug}` }, { name: "class", value: "gameLink"}], [ 
				new Img(game.background_image),
				new Component('section', null, [
					new Component('h4', null, game.name),
					new Component('p', null, `Note metacritic : ${game.metacritic}`),
				]),
			]),
		]);
	}
}
