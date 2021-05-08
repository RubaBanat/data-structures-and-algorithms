'use strict';

const HashTable = require('../hashtable');

test('Should create a hash Table', () => {
    let hashTable = new HashTable(50);
    expect(hashTable.table.length).toEqual(50);
});

test('Should add to the hashed table', () => {
    let hashTable = new HashTable(50);
    let key = 'Singer';
    hashTable.add(key, 503);
    expect(hashTable.table[hashTable.hash(key)]).toBeDefined();
});
test('Should Retrieving based on a key returns the value stored', () => {
    let hashTable = new HashTable(50);
    hashTable.add('Dancer', 'Anna Pavlova');
    let val = hashTable.get('Dancer');
    expect(val.head.value.key).toEqual('Dancer');
});
test('Should return null if the key is not in the table', () => {
    let hashTable = new HashTable();

    expect(hashTable.get('Actor')).toBeNull();
});
test("Should successfully handle a collision within the hashtable", () => {
    let hashTable = new HashTable(50);
    hashTable.add("Singer", "Michael Bublé");
    hashTable.add("Singer", "Adele");
    let bucket = hashTable.get("Singer");
    expect(bucket.head.next.value.value).toEqual("Adele");
});
test('Should successfully hash a key to an in-range value', () => {
    let hashTable = new HashTable();
    hashTable.add('Singer', 'Michael Bublé');
    const value = hashTable.hash("Singer");
    expect(value).toBeLessThan(50);
});