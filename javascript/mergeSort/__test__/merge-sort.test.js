  'use strict';

const mergeSort = require('../merge-sort')

test("“Happy Path” - Expected outcome", () => {

    let arr = [8, 4, 23, 42, 16, 15]
    expect(mergeSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
})
test("Expected failure", () => {

    let arr = []
    expect(mergeSort(arr)).toEqual('exception');
})

