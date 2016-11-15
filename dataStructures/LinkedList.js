class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  toArray() {
    const array = [];
    let current = this.head;
    while (current !== null) {
      array.push(current.val);
      current = current.next;
    }
    return array;
  }
}

class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let linkedlist = new LinkedList();
linkedlist.addToTail(new LinkedListNode(1));
linkedlist.addToTail(new LinkedListNode(5));
linkedlist.addToTail(new LinkedListNode(6));
linkedlist.addToTail(new LinkedListNode(3));
linkedlist.addToTail(new LinkedListNode(5));
linkedlist.addToTail(new LinkedListNode(2));
linkedlist.addToTail(new LinkedListNode(6));
linkedlist.addToTail(new LinkedListNode(4));
// console.log(linkedlist.toArray());

module.exports = {
  linkedlist
}

