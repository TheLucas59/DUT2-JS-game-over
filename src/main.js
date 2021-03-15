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

const gameLinks = document.querySelectorAll('.gameLink');
gameLinks.forEach(lien => {
	lien.addEventListener('click', event => {
		event.preventDefault();
		console.log(lien.getAttribute('href'));
		Router.navigate(lien.getAttribute('href'), true);
	})
})


let btn = document.getElementById('searchBtn');

btn.addEventListener('click', event => {
	event.preventDefault();
	// créé une nouvelle page avec GameList et en passant en param la valeur récupérée
	let input = document.getElementById("searchValue").value;
	if(input == '') input = null;
	gameList.changeApiRequest(input);
	Router.navigate(document.location.pathname, false); // on "recharge" la page
});