import { Bootstrap } from './utils/bootstrap.utils';
import { Array, LinkedList, Queue, Stack } from './modules/linear-data-structures/linear-data-structures.module';

import './index.scss';

export class Index {
    #_applicationName;

    getApplicationName() {
        return this.#_applicationName;
    }

    setApplicationName(value) {
        this.#_applicationName = value;
    }

    constructor() {
        this.array = new Array();
        this.linkedList = new LinkedList();
        this.queue = new Queue();
        this.stack = new Stack();
    }

    fillArray() {
        for (let i = 0; i < 10; i++) {
            this.array.push(Math.floor(Math.random() * i * 100));
        }
    }

    createLinkedList() {
        for (let i = 0; i < 8; i++) {
            this.linkedList.append(Math.floor(Math.random() * i * 100));
        }
    }

    createQueue() {
        for (let i = 0; i < 3; i++) {
            this.queue.enqueue(Math.floor(Math.random() * i * 100));
        }
    }

    createStack() {
        for (let i = 0; i < 3; i++) {
            this.stack.push(Math.floor(Math.random() * i * 100));
        }
    }
}

const index = new Index();
index.setApplicationName('[Data Structures Playground]');

Bootstrap.prototype.createScreen();
index.fillArray();
index.createLinkedList();
index.createQueue();
index.createStack();

setTimeout(() => {
    Bootstrap.prototype.createDOMEvents(index);
}, 1000);

