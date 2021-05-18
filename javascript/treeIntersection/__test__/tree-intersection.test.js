'use strict';

const treeIntersection = require('../tree-intersection');
const trees = require('../../tree/tree');


describe('Tree Intersection Test', () => {
    it('Can find dupes', () => {

        const tree1 = new trees.BinaryTree();

        tree1.root = new trees.Node(150);
        tree1.root.left = new trees.Node(100);
        tree1.root.left.left = new trees.Node(75);
        tree1.root.left.right = new trees.Node(160);
        tree1.root.left.right.left = new trees.Node(125);
        tree1.root.left.right.right = new trees.Node(175);
        tree1.root.right = new trees.Node(250);
        tree1.root.right.left = new trees.Node(200);
        tree1.root.right.right = new trees.Node(300);
        tree1.root.right.right.left = new trees.Node(350);
        tree1.root.right.right.right = new trees.Node(500);

        const tree2 = new trees.BinaryTree();

        tree2.root = new trees.Node(42);
        tree2.root.left = new trees.Node(100);
        tree2.root.left.left = new trees.Node(15);
        tree2.root.left.right = new trees.Node(160);
        tree2.root.left.right.left = new trees.Node(125);
        tree2.root.left.right.right = new trees.Node(175);
        tree2.root.right = new trees.Node(600);
        tree2.root.right.left = new trees.Node(200);
        tree2.root.right.right = new trees.Node(350);
        tree2.root.right.right.left = new trees.Node(4);
        tree2.root.right.right.right = new trees.Node(500);

        const results = treeIntersection(tree1, tree2);

        expect(results).toEqual([100, 160, 125, 175, 200, 350, 500]);
    });

});


describe('test 2', () => {
    it('IF there is no duplicate  nodes return empty array', () => {
        const tree3 = new trees.BinaryTree();

        tree3.root = new trees.Node(10);
        tree3.root.left = new trees.Node(20);
        tree3.root.left.left = new trees.Node(30);

        const tree4 = new trees.BinaryTree();

        tree4.root = new trees.Node(40);
        tree4.root.left = new trees.Node(50);
        tree4.root.left.left = new trees.Node(60);


        let results = treeIntersection(tree3, tree4);
        let expected = undefined;

        expect(expected).toEqual(results);
    })
});