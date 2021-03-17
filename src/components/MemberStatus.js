import Component from './Component.js';
import Img from './Img.js';

export default class MemberStatus extends Component {
    constructor(member) {
        super('article', {name:'class', value:'memberStatus'}, [
            new Img(member.profilPic),
            new Component('p', {name:'class', value:'name'}, member.name),
            new Component('p', {name:'class', value:'age'}, member.age),
            new Component('p', {name:'class', value:'description'}, member.description),
        ]);
    }
}