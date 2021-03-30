'use strict';

function binarySearch(sortedArray, key) {
    let startupNum = 0;
    let endNum = sortedArray.length - 1;
    while (startupNum <= endNum) {
        let center = Math.floor((startupNum + endNum) / 2);
        if (sortedArray[center] === key) {
            return center;
        } else (sortedArray[center] < key) ? startupNum = center + 1 : endNum = center - 1;
    }
    return -1;
};

 module.exports = binarySearch;