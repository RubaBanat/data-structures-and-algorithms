'use strict';

const Node = require('../linked-list').Node;
const LinkedList = require('../linked-list').LinkedList;



test('init LinkedList class', () => {
  let linkedList = new LinkedList();
  expect(linkedList.head).toEqual(null);
});

test('ThE first node should be the head', () => {
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

test('Should be able to insert multiple Nodes', () => {
  let ll = new LinkedList();
  ll.insert(100);
  ll.insert(200);

  expect(ll.length).toEqual(2);
});

test('Should return true when finding a value else return false', () => {
  let ll = new LinkedList();
  ll.insert(200);

  expect(ll.includes(200)).toEqual(true);
  expect(ll.includes(500)).toEqual(false);
});

test('Should be able to return all values in LL as a string', () => {
  let ll = new LinkedList();
  ll.insert(100);
  ll.insert(200);

  expect(ll.toString()).toEqual("{200} -> {100} -> NULL");
});

//---------NEW TESTS--------//

test("Should be able to add node to the end of the linked list", () => {
  let ll = new LinkedList();

  ll.insert(100);
  ll.insert(200);
  ll.append(50);

  expect(ll.toString()).toEqual("{200} -> {100} -> {50} -> NULL");
})

test("Should be able to add nodes to the end of the linked list", () => {
  let ll = new LinkedList();

  ll.insert(100);
  ll.insert(300);
  ll.append(50);
  ll.append(20);
  ll.append(600);

  expect(ll.toString()).toEqual("{300} -> {100} -> {50} -> {20} -> {600} -> NULL");
})


test("Should be able to insert a node before a node located i the middle of a linked list", () => {
  let ll = new LinkedList();

  ll.insert(10);
  ll.insert(20);
  ll.insert(30);
  ll.insertBefore(20, 100);

  let finalLinkedList = ll.toString();
  let array = finalLinkedList.split(" ");

  expect(array[2]).toEqual("{100}");

})

test("Should be able to insert a node before the first node of a linked list", () => {
  let ll = new LinkedList();

  ll.append(10);
  ll.append(20);
  ll.insert(30);


  let finalLinkedList = ll.toString();
  let array = finalLinkedList.split(" ");

  expect(array[0]).toEqual("{30}");

})

test("Should be able to insert a node after a node located i the middle of a linked list", () => {
  let ll = new LinkedList();

  ll.insert(10);
  ll.insert(20);
  ll.insert(30);
  ll.insertAfter(20, 100);

  let finalLinkedList = ll.toString();
  let array = finalLinkedList.split(" ");

  expect(array[4]).toEqual("{100}");

})

test("Should be able to insert a node after the last node of the linked list", () => {
  let ll = new LinkedList();

  ll.insert(10);
  ll.insert(20);
  ll.insert(30);
  ll.append(100);

  expect(ll.toString()).toEqual("{30} -> {20} -> {10} -> {100} -> NULL");

})

//---------NEW TESTS--------//

test("should return an exception when k is greater than the length of the linked list", () => {
  let ll = new LinkedList();

  ll.insert(100);
  ll.insert(200);
  ll.insert(300);
  ll.append(1000);

  expect(ll.kthFromEnd(5)).toEqual("Exception");
})

test("should return an the last value when k equal the length of the linked list", () => {
  let ll = new LinkedList();

  ll.insert(100);
  ll.insert(200);
  ll.append(10);

  expect(ll.kthFromEnd(2)).toEqual(200);
})

test("should return an exception when k is not a positive integer  ", () => {
  let ll = new LinkedList();

  ll.insert(100);
  ll.insert(200);
  ll.append(10);

  expect(ll.kthFromEnd(-1)).toEqual("Exception");
})

test("should return the head when the linked list is of a size 1  ", () => {
  let ll = new LinkedList();

  ll.insert(100);


  expect(ll.kthFromEnd(0)).toEqual(100);
})

test("should return “Happy Path” when k is not at the end, but somewhere in the middle of the linked list ", () => {
  let ll = new LinkedList();
  
  ll.insert(100);
  ll.insert(200);
  ll.append(10);

  expect(ll.kthFromEnd(1)).toEqual(100);
})



