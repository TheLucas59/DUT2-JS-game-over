import Component from './Component.js';
import Img from './Img.js';

export default class MemberStatus extends Component {
    constructor(member) {
        super('article', {name:'class', value:'memberStatus'}, [
            new Component('div',  {name: 'class', value: 'bgwrapper'}, [
                new Img(member.profilePic),
                new Component('section', {name: 'class', value: 'devInfo'}, [
                    new Component('h2', null, member.nom),
                    new Component('p', null, `a.k.a ${member.surnom}`),
                    new Component('p', null, member.description),
                    new Component('a', [{ name: 'href', value: `/detail-${member.preferredGameSlug}` }, { name: "class", value: "preferredGame"}],[
                        new Component('p', null, `Jeu préféré : ${member.preferredGame}`)
                    ]),
                    new Component('p', null, member.preferredGameDescription)
                ])
            ])
        ]);
    }
}