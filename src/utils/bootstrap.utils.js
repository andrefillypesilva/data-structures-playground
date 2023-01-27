import { ArrayService } from "../modules/linear-data-structures/services/array.services";
import { LinkedListService } from "../modules/linear-data-structures/services/linked-list.service";

export class Bootstrap {
    constructor() { }

    async createScreen() {
        const main = document.getElementsByClassName('data-structures-playground__main')[0];
        const children = [...main.children];
        const components = children.map(child => {
            return child.id;
        }).filter(component => component);

        for (component of components) {
            const response = await fetch(`./components/${component}.html`);
            const data = await response.text();
            document.getElementById(component).innerHTML = data;
        }
    }

    createDOMEvents(elements) {
        ArrayService.prototype.createArrayEvents(elements.array);
        LinkedListService.prototype.createLinkedListEvents(elements.linkedList);
    }
}
