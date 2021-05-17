'use strict';
const Node = require('../tree').Node;
const BinaryTree = require('../tree').BinaryTree;
const BinarySearchTree = require('../tree').BinarySearchTree;

describe('Node Module', () => {
  it('create an instance of Node', () => {
    const node = new Node();
    expect(node instanceof Node).toBeTruthy();
  });
  it('create an instance of Node with the correct properties', () => {
    const val = 'any value';
    const node = new Node(val);
    expect(node.val).toEqual(val);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});

test('Can successfully instantiate an empty tree' ,() =>{
    const bst = new BinarySearchTree();
    expect(bst.root).toBeNull()
})
test('Can successfully instantiate a tree with a single root node' ,() =>{
    const bst = new BinarySearchTree();
    bst.add(7)
    expect(bst.root.val).toEqual(7)
})
test('Can successfully add a left child and right child to a single root node' ,() =>{
    const bst = new BinarySearchTree();
    bst.add(6)
    bst.add(5)
    bst.add(8)
    
    expect(bst.root.left.val).toEqual(5);
    expect(bst.root.right.val).toEqual(8);
})
describe('Binary Tree', () => {
    let tree;
    beforeAll(() => {
      const one = new Node(1);
      const two = new Node(2);
      const three = new Node(3);
      const four = new Node(4);
      const five = new Node(5);
      const six = new Node(6);
      const seven = new Node(7);
      const eight = new Node(8);
      one.left = two;
      one.right = three;
      two.left = four;
      two.right = five;
      three.left = six;
      three.right = seven;
      seven.left = eight;
      tree = new BinaryTree(one);
      // console.log('treeee',tree);
    });
    it('preOrder', () => {
      expect(tree.preOrder()).toEqual([1,2,4,5,3,6,7,8]);
    });
    it('inOrder', () => {
      expect(tree.inOrder()).toEqual([4,2,5,1,6,3,8,7]);
    });
    it('postOrder', () => {
      expect(tree.postOrder()).toEqual([4, 5, 2, 6,8, 7, 3, 1]);
    });
    it('if empty return null',()=>{
      let newTree= new BinaryTree(null);
      let findMax= newTree.findMaxValue();

      expect(findMax).toBeNull;
    });

    it('find the max value',()=>{
      let expected=8;
      let findMax= tree.findMaxValue();

      expect(findMax).toEqual(expected);
    })
    it('find the max value',()=>{
      let expected=16;
      let sumOdd= tree.sumOdd();

      expect(sumOdd).toEqual(expected);
    })
    it('“Happy Path” - Expected outcome',()=>{
      let expected= [1,2,3,4,5,6,7,8];
      let findMax= tree.BFT();

      expect(findMax).toEqual(expected);
    })
    it('if empty return null',()=>{
      let newTree= new BinaryTree(null);
      let findMax=  tree.BFT();

      expect(findMax).toBeNull;
    });
    
  });
   