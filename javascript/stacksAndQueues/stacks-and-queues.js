'use strict';

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.top) {
            this.top = node;
            this.length++;
        } else {
            let current = this.top;
            this.top = node;
            node.next = current;
            this.length++;

        }
    }
    pop() {
        if (!this.top) {
            console.log('Exception');
            return 'Exception';
        }
        let deleteTop = this.top;
        this.top = deleteTop.next;
        this.length--;
        return deleteTop.val;
    }
    peek() {
        if (!this.top) {
            console.log('Exception');
            return 'Exception';
        }
        console.log('The peek', this.top.val);
        return this.top.val;
    }
    isEmpty() {
        if (!this.top) {
            console.log(false);
            return false;
        }
        console.log(true);
        return true;
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.pop();
// stack.pop();

stack.peek();
// stack.isEmpty()
console.log(stack);


class Queue {
    constructor() {
        this.front = null;
        this.length = 0;
    }

    enqueue(val) {
        let node = new Node(val);
        if (!this.front) {
            this.front = node;
            this.length++;
        } else {
            let lastNode = this.front;
            while (lastNode.next) {
                lastNode = lastNode.next
            }
            lastNode.next = node;
            this.length++;
        }
    }
    dequeue() {
        if (!this.front) {
            console.log('Exception');
            return 'Exception';
        } else {
            let deleted = this.front;
            this.front = deleted.next;
            this.length--;
            return deleted.val
        }
    }
    peek() {
        if (!this.front) {
            console.log('Exception');
            return 'Exception';
        }console.log('The queue peek', this.front.val);
        return this.front.val;
    }
    isEmpty(){
        if(!this.front){
            console.log(false);
            return false;
        }
        console.log(true);
        return true;
    }

}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
// queue.dequeue();
queue.peek()
queue.isEmpty()

console.log(queue);


module.exports = { Node: Node, Stack: Stack , Queue: Queue }
