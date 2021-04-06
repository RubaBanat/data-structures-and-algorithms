'use strict';

const { LinkedList } = require('../../linked-list/linked-list');
const { Node } = require('../../linked-list/linked-list');

function zipLists(list1, list2) {
    let ll = new LinkedList();
    let cur1 = list1.head;
    let cur2 = list2.head;
    let length = list1.length + list2.length;
    if(length === 0 || list1.length !== list2.length){
        return "Exception"
    }
    for (let index = 0; index < length; index++) {
        if (index % 2 !== 0) {   
            ll.append(cur2.val);
            cur2 = cur2.next;
        } else if (index % 2 === 0) {       
            ll.append(cur1.val);
            cur1 = cur1.next;
        }
    }
    // console.log('heeey',ll);
    return ll;
}

// let ll1 = new LinkedList();
// let ll2 = new LinkedList();

// ll1.append(100);
// ll1.append(200);
// ll2.append(500);
// ll2.append(700);


// zipLists(ll1,ll2);

module.exports = { zipLists : zipLists, Node : Node, LinkedList : LinkedList} ;