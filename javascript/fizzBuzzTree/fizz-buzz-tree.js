'use struct';


class Node {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }


    FizzBuzz(tree) {
        this.root = tree.root;

        const _traverse = (node) => {

            if (_traverse(node.val % 15 === 0)) {
               return node.val = "FizzBuzz";
            }
            else if (_traverse(node.val % 5 === 0)) {
                return  node.val = "Buzz";
            }
            else if (_traverse(node.val % 3 === 0)) {
                return node.val = "Fizz";
            }
            else
                node.val = 'not divisible';
            if (node.children.length) {
                for (let i = 0; i < node.children.length; i++) {
                    _traverse(node.children[i]);
                }
            }

            _traverse(this.root);
        }
    }
}

    module.exports = {
            Node: Node,
            BinaryTree: BinaryTree
        }