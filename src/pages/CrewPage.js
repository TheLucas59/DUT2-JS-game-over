import Page from './Page';
import MemberStatus from '../components/MemberStatus';
import Router from '../Router';

export default class CrewPage extends Page {
    mount(element) {
        super.mount(element);

        let eliott = {
            profilePic:'../../images/eliott_profil_pic.png',
            nom:'Eliott COLLIN',
            surnom:'',
            description:'MANGER !',
            preferredGame:'',
            preferredGameSlug:'',
            preferredGameDescription:''
        };

        let loïc = {
            profilePic:'../../images/loic_profil_pic.png',
            nom:'Loïc DEMAY',
            surnom:'le blob',
            description:``,
            preferredGame:'Call Of Duty: Modern Warfare 2',
            preferredGameSlug:'modern-warfare-2',
            preferredGameDescription:`Oui, je suis bloqué en 2009`
        };

        let lucas = {
            profilePic:'../../images/lucas_profil_pic.png',
            nom:'Lucas PLÉ',
            surnom:'',
            description:'',
            preferredGame:'',
            preferredGameSlug:'',
            preferredGameDescription:''
        };

        element.innerHTML = new MemberStatus(eliott).render();
        element.innerHTML += new MemberStatus(loïc).render();
        element.innerHTML += new MemberStatus(lucas).render();

        document.querySelectorAll('.preferredGame').forEach(lien => {
            lien.addEventListener('click', event => {
                event.preventDefault();
                Router.navigate(lien.getAttribute('href'), true);
            })
        })
    }
}