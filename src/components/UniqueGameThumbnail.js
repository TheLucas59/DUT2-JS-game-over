import Component from './Component.js';
import Img from './Img.js';

export default class UniqueGameThumbnail extends Component {
	constructor(game) {
		super('article', { name: 'class', value: 'UniqueGameThumbnail' }, [
			new Component('div',  {name: 'class', value: 'bgwrapper'}, [
				new Component('figure', {name: 'class', value: 'headimagewrapper'}, [
					new Img(game.background_image),
				]),				
				// bouton d'ajout au favoris qui ne fait rien pour l'instant
				new Component('button', {name:'id', value:'favButton'}, 'addFav'),
				new Component('section', {name:'class', value:'gameInfo'}, [
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