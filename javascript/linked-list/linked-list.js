'use strict';

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insert(val) {
        try {
            let newNode = this.head;
            this.head = new Node(val, newNode);
            this.length ++;

        }
        catch (err) {
            console.log('Error in calling insert function', err);
        }
    }

    includes(val) {
        try {

            let current = this.head;

            while (current) {
                if (current.val === val) {
                    // console.log(true);
                    return true;
                }
                current = current.next;
            }
            return false;
        } catch (err) {
            console.log('Error in calling includes function', err);
        }
    }

    toString() {
        try {
            let ll = "";

            while (this.head) {
                ll += `{${this.head.val}} -> `
                this.head = this.head.next;
            }
            ll += "NULL";
            console.log(ll);
            return ll;
        } catch (err) {
            console.log('Error in calling toString function', err);
        }
    }
}

const ll = new LinkedList();

ll.insert(100);
ll.insert(200);
ll.includes(100);
ll.toString();


module.exports = { Node:Node , LinkedList:LinkedList}
