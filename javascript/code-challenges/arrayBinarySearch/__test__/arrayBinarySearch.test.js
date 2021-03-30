'use strict';

const newArray = require("../array-binary-search.js") 

describe("Return the index of the array’s element", () => {
  test("return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.", () => {
    expect(newArray([4,8,15,16,23,42], 42)).toStrictEqual(5);
    expect(
      newArray([11,22,33,44,55,66,77], 90)
    ).toStrictEqual(-1);
  });
});
