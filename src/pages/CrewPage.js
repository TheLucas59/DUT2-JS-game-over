import Page from './Page';
import MemberStatus from '../components/MemberStatus';

export default class CrewPage extends Page {
    mount(element) {
        super.mount(element);

        let eliott = {
            profilPic:'../../images/eliott_profil_pic.png',
            name:'Eliott',
            age:'19',
            description:'MANGER !'
        };

        let loïc = {
            profilPic:'../../images/loic_profil_pic.png',
            name:'Loïc',
            age:'18',
            description:'eeeeeeeeeeee'
        };

        let lucas = {
            profilPic:'../../images/lucas_profil_pic.jpg',
            name:'Lucas',
            age:'19',
            description:'eeeeeeeeeee'
        };

        element.innerHTML = new MemberStatus(eliott).render();
        element.innerHTML += new MemberStatus(loïc).render();
        element.innerHTML += new MemberStatus(lucas).render();

    }
}