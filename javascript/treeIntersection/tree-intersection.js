'use strict';

// const trees = require('../tree/tree.js');

function tree_intersection(tree1, tree2) {

    let arr1 = tree1.preOrder();
    let arr2 = tree2.preOrder();
    let duplicatesNodes = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i])
            duplicatesNodes.push(arr1[i]);
    }
    return duplicatesNodes;
} 


module.exports = tree_intersection;