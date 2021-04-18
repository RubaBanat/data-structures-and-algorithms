'use strict';


const BinarySearchTree = require('../tree').BinarySearchTree;

test('“Happy Path” - Expected outcome', () => {

    const bst = new BinarySearchTree();

    bst.add(6);
    bst.add(5);
    bst.add(8);
 
    expect(bst.findMaxValue()).toEqual(8);
})
test('Expected failure', () => {

    const bst = new BinarySearchTree();
 
    expect(bst.findMaxValue()).toBeNull();
})
