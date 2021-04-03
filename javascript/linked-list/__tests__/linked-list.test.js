'use strict';

const Node = require('../linked-list').Node;
const LinkedList = require('../linked-list').LinkedList;


// test('init node class', () => {
//     let value = 5;
//     let node = new Node(value);
//     expect(node.val).toEqual(5);
//     expect(node.next).toEqual(null);
// });

test('init LinkedList class', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);
});

test('ThE first node should be the head', () =>{
    let ll = new LinkedList();
    ll.insert(6);
    ll.insert(9);

    expect(ll.head.val).toEqual(9);
});

test('should be able to add new node to empty linked list', () => {
  
    let ll = new LinkedList();// empty
    let value = 7;
    ll.insert(value);

    expect(ll.head.val).toEqual(value);
    expect(ll.head.next).toBeNull();
});

test('should be able to add new header to linked list', () => {

    let ll = new LinkedList();// empty
    ll.insert(100);
    let value = 7;
    ll.insert(value);

    expect(ll.head.val).toEqual(value);
    expect(ll.head.next.val).toEqual(100);
});

test('Should be able to insert multiple Nodes' , () =>{
    let ll = new LinkedList();
    ll.insert(100);
    ll.insert(200);

    expect(ll.length).toEqual(2);
});

test('Should return true when finding a value else return false' , () =>{
    let ll = new LinkedList();
    ll.insert(200);
   
    expect(ll.includes(200)).toEqual(true);
    expect(ll.includes(500)).toEqual(false);
});

test('Should be able to return all values in LL as a string' , ()=>{
    let ll = new LinkedList();
    ll.insert(100);
    ll.insert(200);
    
    expect(ll.toString()).toEqual("{200} -> {100} -> NULL");
});

