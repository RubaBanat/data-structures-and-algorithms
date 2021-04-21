'use strict';

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.right = right;
        this.left = left;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {

        const treeArr = [];
        function traverse(node) {
            treeArr.push(node.val);
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(this.root)
        return treeArr;
    }

    inOrder() {
        const treeArr = [];
        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            treeArr.push(node.val);
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(this.root)
        return treeArr;
    }

    postOrder() {
        const treeArr = [];
        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
            treeArr.push(node.val);
        }
        traverse(this.root)
        return treeArr;
    }
    findMaxValue() {
        if (this.root === null) {
            console.log(null);
            return null;
        } else {
            let maximum = 0;
            let treeArr = this.inOrder();
            for (let i = 0; i < treeArr.length; i++) {
                if (maximum < treeArr[i]) {
                    maximum = treeArr[i];
                }
            }
            console.log('max', maximum);
            return maximum;
        }
    }
    BFT() {
        let treeArr = [];
        let queue = [];
        let node = this.root;
        console.log(node.val);
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            treeArr.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return treeArr
    }
}

let bT = new BinaryTree;

// bT.findMaxValue()
// bT.BFT()

// console.log(bT);


class BinarySearchTree {
    constructor(root = null) {
        this.root = root;
    }
    add(val) {
        var newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.addNode(this.root, newNode);
        }
    }
    addNode(node, newNode) {
        if (node.val > newNode.val) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.addNode(node.left, newNode);
            };
        } else if (node.val < newNode.val) {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.addNode(node.right, newNode);
            }
        }
    }
    contains(val) {
        if (this.root === null) {
            console.log(null);
            return null;
        }
        let curr = this.root;

        while (curr) {
            if (val === curr.val) {
                console.log(true);
                return true;
            }
            if (val < curr.val) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }
        console.log(false);
        return false;
    }
    // findMaxValue() {
    //     if (!this.root) {
    //         console.log(null);
    //         return null;
    //     }
    //     let curr = this.root;

    //     while (curr.right !== null) {
    //         curr = curr.right;
    //     }
    //     console.log('max', curr.val);
    //     return curr.val;
    // }
}


const bst = new BinarySearchTree();


// bst.add(6);
// bst.add(5);
// bst.add(8);
// bst.add(4);
// bst.add(7);
// bst.add(5);
// // bst.contains(6);
// // bst.contains(7);
// // bst.contains(4);
// bst.findMaxValue()


// console.log(bst);

module.exports = {
    Node: Node,
    BinaryTree: BinaryTree,
    BinarySearchTree: BinarySearchTree,
}