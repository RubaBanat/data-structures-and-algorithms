'use strict';

const Node = require('../fizz-buzz-tree').Node;
const BinaryTree = require('../fizz-buzz-tree').BinaryTree;




describe('Node Module', () => {
  it('create an instance of Node', () => {
    const node = new Node();
    expect(node instanceof Node).toBeTruthy();
  });
  it('create an instance of Node with the correct properties', () => {
    const val = 'any value';
    const node = new Node(val);
    expect(node.val).toEqual(val);
  
  });
});