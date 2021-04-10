'use strict';

const Node = require('../stacks-and-queues').Node;
const Stack = require('../stacks-and-queues').Stack;
const Queue = require('../stacks-and-queues').Queue;

test('Should be able to Push onto a stack',() =>{
    let stack = new Stack();
    stack.push(1);

    expect(stack.top.val).toEqual(1);
})
test('Should be able to Push multiple values onto a stack',() =>{
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    
    expect(stack.length).toEqual(3);
})
test('Should be able to pop off from the stack',()=>{
    let stack = new Stack();
    stack.push(5);
    stack.push(6);
    
    stack.pop()
    
    expect(stack.pop()).toEqual(5);
})
test('Should be able to empty a stack after multiple pops',()=>{
    let stack = new Stack();
    stack.push(5);
    stack.push(6);
    
    stack.pop()
    stack.pop()
    
    expect(stack.length).toEqual(0);
})
test('Should be able to peek the next item on the stack',()=>{
    let stack = new Stack();
    stack.push(5);
    stack.push(6);
    
    stack.peek()
    
    expect(stack.top.next.val).toEqual(5);
})
test('Should be able to instantiate an empty stack',()=>{
    let stack = new Stack();
    
    expect(stack.length).toEqual(0);
})
test('Should be able to raises exception when called pop or to peek on empty stack ',()=>{
    let stack = new Stack();
    
    expect(stack.pop()&&stack.peek()).toEqual('Exception');
})
test('Should be able to enqueue into a queue',() =>{
    let queue = new Queue();
    queue.enqueue(1);

    expect(queue.front.val).toEqual(1);
})
test('Should be able to enqueue multiple values into a queue',() =>{
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.length).toEqual(2);
})
test('Should be able to dequeue out of a queue the expected value',() =>{
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();

    expect(queue.front.val).toEqual(2);
})
test('Should be able to peek into a queue, seeing the expected value',() =>{
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.peek();

    expect(queue.peek()).toEqual(1);
})
test('Should be able to empty a queue after multiple dequeues ',() =>{
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();

    expect(queue.length).toEqual(0);
})
test('Should be able to instantiate an empty queue ',() =>{
    let queue = new Queue();

    expect(queue.length).toEqual(0);
})
test('Should be able to raises exception when calling dequeue or peek on empty queue  ',() =>{
    let queue = new Queue();

    expect(queue.peek()&&queue.dequeue()).toEqual('Exception');
})




