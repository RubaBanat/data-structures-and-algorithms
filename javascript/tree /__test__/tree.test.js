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
      const one = new Node('a');
      const two = new Node('b');
      const three = new Node('c');
      const four = new Node('d');
      const five = new Node('e');
      const six = new Node('f');
      const seven = new Node('g');
      const eight = new Node('h');
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
      expect(tree.preOrder()).toEqual(['a','b','d','e','c','f','g','h']);
    });
    it('inOrder', () => {
      expect(tree.inOrder()).toEqual(['d','b','e','a','f','c','h','g']);
    });
    it('postOrder', () => {
      expect(tree.postOrder()).toEqual(['d','e','b','f','h','g','c','a']);
    });
    it('if empty return null',()=>{
      let newTree= new BinaryTree(null);
      let findMax= newTree.findMaxValue();

      expect(findMax).toBeNull;
    });

    it('find the max value',()=>{
      let expected=0;
      let findMax= tree.findMaxValue();

      expect(findMax).toEqual(expected);
    })
    it('“Happy Path” - Expected outcome',()=>{
      let expected= ['a','b','c','d','e','f','g','h'];
      let findMax= tree.BFT();

      expect(findMax).toEqual(expected);
    })
    it('if empty return null',()=>{
      let newTree= new BinaryTree(null);
      let findMax=  tree.BFT();

      expect(findMax).toBeNull;
    });
    
  });
   