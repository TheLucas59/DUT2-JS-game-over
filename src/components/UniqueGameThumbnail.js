import Component from './Component.js';
import Img from './Img.js';

export default class UniqueGameThumbnail extends Component {
	constructor(game) {
		super('article', { name: 'class', value: 'UniqueGameThumbnail' }, [
			new Component('div',  {name: 'class', value: 'bgwrapper'}, [
				new Component('figure', {name: 'class', value: 'headimagewrapper'}, [
					new Img(game.background_image),
				]),				
				new Component('section', null, [
					new Component('h4', null, game.name),
					new Component('p', null, game.description),
					new Component('p', null, `Note metacritic : ${game.metacritic}`),
					new Component('p', null, `Genres :${game.genres.map(genre =>  ' ' + genre.name)}`),
					new Component('p', null, `Plateformes :${game.platforms.map(platform => ' ' + platform.platform.name)}`)
				]),
			]), 
		]);
	}
}