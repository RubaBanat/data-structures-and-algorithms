'use strict';

const LinkedList = require('../ll-zip.js').LinkedList;
const Node = require('../ll-zip.js').Node;
const zipLists = require('../ll-zip.js').zipLists;

test("should return “Happy Path” - Expected outcome the linked list ", () => {
    let ll1 = new LinkedList();
    let ll2 = new LinkedList();
    let ll3 = new LinkedList();
    
    console.log('helloooo',zipLists);

    ll1.append(100);
    ll1.append(200);
    ll2.append(10);
    ll2.append(20);
    ll3.append(100);
    ll3.append(10);
    ll3.append(200);
    ll3.append(20);
    

    expect(zipLists(ll1,ll2).toString()).toEqual(ll3.toString());
  })
  

  test("It should return Exception when the length of the two lists are not equal", () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    
  
    ll1.append(100);
    ll2.append(10);
    ll2.append(20);
    expect(zipLists(ll1, ll2).toString()).toEqual("Exception");
  
  })
  
  test("'Edge case', Empty linked lists", () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
  
    expect(zipLists(ll1, ll2).toString()).toEqual("Exception");
  })