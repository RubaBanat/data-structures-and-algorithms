"use strict";

const HashTable = require("../../hashtable/hashtable");
const leftJoin = require("../left-join");

const hashTable1 = new HashTable();
const hashTable2 = new HashTable();
hashTable1.add("singer", "micheal buble");
hashTable1.add("Dancer", "Anna Pavlova");
hashTable2.add("singer", "Adele");
hashTable2.add("Actor", "Angelina Jolie");

test("Happy path", () => {
  const hashTable1 = new HashTable();
  const hashTable2 = new HashTable();
  hashTable1.add("singer", "micheal buble");
  hashTable1.add("Dancer", "Anna Pavlova");
  hashTable2.add("singer", "Adele");
  hashTable2.add("Actor", "Angelina Jolie");

  expect(leftJoin(hashTable1, hashTable2)).toEqual([
      ["Dancer", "Anna Pavlova", null],
      ["singer", "micheal buble", 'Adele'],
  ]);
});

test("Edge case", () => {
  const hashTable1 = new HashTable();
  const hashTable2 = new HashTable();
  hashTable1.add("singer", "micheal buble");
  hashTable1.add("Dancer", "Anna Pavlova");
  hashTable2.add("singer", "Adele");
  hashTable2.add("Actor", "Angelina Jolie");

  expect(leftJoin(hashTable1)).toEqual(null);
});

