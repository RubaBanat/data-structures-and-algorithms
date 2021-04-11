'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues').Stack;

class PseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
        this.length = 0;

    }

    enqueue(val) {
        this.stack1.push(val)
        this.length++;
    }

    dequeue() {
        if (this.stack1.length == 0 && this.stack2.length == 0) {
            console.log(' hi Exception');
            return 'Exception'
        }
        if (this.stack1.top != null && this.stack2.length === 0) {
            while (this.stack1.length > 1) {
                this.stack2.push(this.stack1.pop());
            }
            this.length--;
            return this.stack1.pop();
        } else if (this.stack1.top === null && this.stack2.length >= 1) {
            this.length--;
            return this.stack2.pop();
        } else {
            this.length--;
            return this.stack2.pop();
        }

    }
    peek() {
        if (this.stack1.length == 0 && this.stack2.length == 0) {
            console.log('Exception');
            return 'Exception'
        } else if (this.stack1.length > 0) {
            console.log('first stack', this.stack1.top.val);
            return this.stack1.top.val
        }
        console.log('second stack', this.stack2.top.val);
        return this.stack2.top.val
    }

}

const queue = new PseudoQueue()

queue.enqueue(1);
// queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
// queue.enqueue(5);
queue.enqueue(6);
queue.dequeue();
queue.dequeue();
queue.dequeue();
// queue.dequeue();

queue.peek();

console.log(queue);

module.exports = PseudoQueue;