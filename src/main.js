import Router from './Router';
import PizzaList from './pages/PizzaList';
import PizzaForm from './pages/PizzaForm';
import Component from './components/Component';

const pizzaList = new PizzaList([]),
	pizzaForm = new PizzaForm(),
	favorisList = new Component('p', null, `Vous n'avez pas de favoris`),
	aboutPage = new Component('p', null, 'ce site est génial');

Router.titleElement = document.querySelector('.pageTitle');
Router.contentElement = document.querySelector('.pageContent');
Router.menuElement = document.querySelector('.mainMenu');
Router.routes = [
	{ path: '/', page: pizzaList, title: 'Les jeux' }, // afficher une phrase en fonction du trie (meilleur/derniere sortie/ordre croisant) ?
	{ path: '/ajouter-pizza', page: pizzaForm, title: 'Ajouter une pizza' },
	{ path: '/favoris', page: favorisList, title: 'Mes Favoris' },
	{ path: '/a-propos', page: aboutPage, title: 'À propos' },
];

document.querySelector(
	'.logo'
).innerHTML += `<small>le gaming plus qu'une passion</small>`;

const newsContainer = document.querySelector('.newsContainer');

window.onpopstate = () => Router.navigate(document.location.pathname, false);
window.onpopstate();
