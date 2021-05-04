'use strict';

const quickSort = require("../quick-sort");


test("“Happy Path” - Expected outcome", () => {
  let arr = [8, 4, 23, 42, 16, 15];

  expect(quickSort(arr, 0, arr.length - 1)).toEqual([4, 8, 15, 16, 23, 42]);
})


test("Edge case", () => {
  let arr = [1, 1, 1, 1];

  expect(quickSort(arr, 0, arr.length - 1)).toEqual([1, 1, 1, 1]);
})