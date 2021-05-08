'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    values() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

class HashTable {
    table = new Array(50);

    add(key, value) {
        let hash = this.hash(key);
    
        if (!this.table[hash]) {
            this.table[hash] = new LinkedList();
        }
        this.table[hash].add({ key, value });
    }
    hash(key) {
        const hash = 50;
        let total = 0;

        for (let i = 0; i < key.length; i++) {
            total += hash * total + key.charCodeAt(i);
        }
        total %= this.table.length;
        if (total < 1) {
            this.table.length - 1;
        }
        return parseInt(total);
    }

    contains(key) {
        let hash = this.hash(key);
        if (this.table[hash]) {
            return true;
        }
        return false;
    }
    get(key) {
        let hash = this.hash(key);
        if(this.table[hash]){
            return this.table[hash]
        }else{
            return null;
        }
    }
}


const hashTable = new HashTable();
hashTable.add('firstName', 'ruba');
hashTable.add('secondName', 'banat');


console.log(hashTable.table);

console.log(hashTable.table[ hashTable.hash('firstName')].head.value.key);

module.exports = HashTable;