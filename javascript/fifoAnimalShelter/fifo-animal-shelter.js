'use strict';

const Queue = require('../stacksAndQueues/stacks-and-queues').Queue;


class AnimalShelter {
    constructor() {
        this.dogs = new Queue();
        this.cats = new Queue();
        this.length = 0;
    }

    enqueue(animal) {
        if (animal.type === 'dog') {
            this.dogs.enqueue(animal)
            this.length++;


        } else if (animal.type === 'cat') {
            this.cats.enqueue(animal)
            this.length++;
        } else {
            console.log('it should be dog or cat');
            return 'it should be Dog or Cat';
        }

    }
    dequeue(pref) {
        if (pref === 'dog' && this.dogs.isEmpty() ) {
            this.length--;
            return this.dogs.dequeue();
        } else if (pref === 'cat' && this.cats.isEmpty() ) {
            this.length--;
            return this.cats.dequeue();
        } 
        console.log('null');
            return null;
    }
}

const animal = new AnimalShelter();


animal.enqueue({ type: "dog", name: "husky" });
animal.enqueue({ type: "cat", name: "catty" });
animal.enqueue({ type: "", name: "catty" });
// animal.dequeue('dog');
// animal.dequeue('dog');
animal.dequeue('camel');
// animal.dequeue('cat');
// animal.dequeue('cat');
// animal.dequeue('dog');



console.log(animal);

module.exports = AnimalShelter;