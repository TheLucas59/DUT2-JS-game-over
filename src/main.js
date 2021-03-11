import Router from './Router';
import GameList from './pages/GameList';
import GameDetail from './pages/GameDetail';
import Component from './components/Component';

const gameList = new GameList([]),
	detailJeu = new GameDetail(),
	favorisList = new Component('p', null, `Vous n'avez pas de favoris`),
	aboutPage = new Component('p', null, 'ce site est génial');

Router.titleElement = document.querySelector('.pageTitle');
Router.contentElement = document.querySelector('.pageContent');
Router.menuElement = document.querySelector('.mainMenu');
Router.routes = [
	{ path: '/', page: gameList, title: 'Les jeux' }, // afficher une phrase en fonction du trie (meilleur/derniere sortie/ordre croisant) ?
	{ path: '/detail', page: detailJeu, title: 'Detail du jeu' },
	{ path: '/favoris', page: favorisList, title: 'Mes Favoris' },
	{ path: '/a-propos', page: aboutPage, title: 'À propos' },
];

document.querySelector(
	'.logo'
).innerHTML += `<small>le gaming plus qu'une passion</small>`;

const newsContainer = document.querySelector('.newsContainer');

function addFav() {
	alert("Ajouter aux favoris")
}

window.onpopstate = () => Router.navigate(document.location.pathname, false);
window.onpopstate();

const gameLinks = document.querySelectorAll('.gamelink');
gameLinks.forEach(lien => {
	lien.addEventListener('click', event => {
		event.preventDefault();
		Router.navigate(lien.getAttribute('href'), false);
	})
})