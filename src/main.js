import Router from './Router';
import PizzaList from './pages/PizzaList';
import PizzaForm from './pages/PizzaForm';
import Component from './components/Component';

const pizzaList = new PizzaList([]),
	aboutPage = new Component('p', null, 'ce site est génial'),
	pizzaForm = new PizzaForm();

Router.titleElement = document.querySelector('.pageTitle');
Router.contentElement = document.querySelector('.pageContent');
Router.menuElement = document.querySelector('.mainMenu');
Router.routes = [
	{ path: '/', page: pizzaList, title: 'La carte' },
	{ path: '/a-propos', page: aboutPage, title: 'À propos' },
	{ path: '/ajouter-pizza', page: pizzaForm, title: 'Ajouter une pizza' },
];

document.querySelector(
	'.logo'
).innerHTML += `<small>les pizzas c'est la vie</small>`;

const newsContainer = document.querySelector('.newsContainer');

window.onpopstate = () => Router.navigate(document.location.pathname, false);
window.onpopstate();
