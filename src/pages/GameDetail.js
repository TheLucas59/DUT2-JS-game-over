import Page from './Page';

export default class GameDetail extends Page {
    

    render() {
        return /*html*/ `
            <h2> Titre du jeu </h2>
            <article> 
                <p>* infos du jeu *</p>
             </article>`;
    }
    
    mount(element) {
        super.mount(element);
    }

}