import Page from './Page';
import MemberStatus from '../components/MemberStatus';
import Router from '../Router';

export default class CrewPage extends Page {
    mount(element) {
        super.mount(element);

        let eliott = {
            profilePic:'../../images/eliott_profil_pic.png',
            nom:'Eliott COLLIN',
            surnom:'Fishman',
            description:'MANGER !',
            preferredGame:'Minecraft',
            preferredGameSlug:'minecraft',
            preferredGameDescription:'Ici on casse des blocks!'
        };

        let loic = {
            profilePic:'../../images/loic_profil_pic.png',
            nom:'Loïc DEMAY',
            surnom:'le blob',
            description:`Le mec qui fait du bruit en CTP avec son clavier mécanique.`,
            preferredGame:'Call Of Duty: Modern Warfare 2',
            preferredGameSlug:'modern-warfare-2',
            preferredGameDescription:`Oui, je suis bloqué en 2009`
        };

        let lucas = {
            profilePic:'../../images/lucas_profil_pic.png',
            nom:'Lucas PLÉ',
            surnom:'Lucass',
            description:`J'aime bien les jeux de voitures et les RPG.`,
            preferredGame:'Kingdom Hearts II',
            preferredGameSlug:'kingdom-hearts-ii',
            preferredGameDescription:'Nostalgique de 2004'
        };

        element.innerHTML = new MemberStatus(eliott).render();
        element.innerHTML += new MemberStatus(loic).render();
        element.innerHTML += new MemberStatus(lucas).render();

        document.querySelectorAll('.preferredGame').forEach(lien => {
            lien.addEventListener('click', event => {
                event.preventDefault();
                Router.navigate(lien.getAttribute('href'), true);
            })
        })
    }
}