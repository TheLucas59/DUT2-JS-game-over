import Component from './Component.js';
import Img from './Img.js';

export default class UniqueGameThumbnail extends Component {
	constructor(game) {
		const platforms = game.platforms;
		const genres = game.genres;
		super('article', { name: 'class', value: 'UniqueGameThumbnail' }, [
			// TODO : changer url pour aller directement sur la page du jeu
			new Img(game.background_image),
			new Component('section', null, [
				new Component('h4', null, game.name),
				new Component('p', null, game.description),
				new Component('p', null, `Note metacritic : ${game.metacritic}`),
				//platforms.forEach(platform => new Component('h5', null, platform.name)),
				//genres.forEach(genre => new Component('h5', null, genre.name)),
			]),
		]);
	}
}