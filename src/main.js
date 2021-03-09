import Router from './Router';
import PizzaList from './pages/PizzaList';
import GameDetail from './pages/GameDetail';
import Component from './components/Component';

const pizzaList = new PizzaList([]),
	detailJeu = new GameDetail(),
	favorisList = new Component('p', null, `Vous n'avez pas de favoris`),
	aboutPage = new Component('p', null, 'ce site est génial');

Router.titleElement = document.querySelector('.pageTitle');
Router.contentElement = document.querySelector('.pageContent');
Router.menuElement = document.querySelector('.mainMenu');
Router.routes = [
	{ path: '/', page: pizzaList, title: 'Les jeux' }, // afficher une phrase en fonction du trie (meilleur/derniere sortie/ordre croisant) ?
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
