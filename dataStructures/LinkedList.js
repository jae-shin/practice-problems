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
      array.push(current.value);
      current = current.next;
    }
    return array;
  }
}

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let linkedlist = new LinkedList();
linkedlist.addToTail(new LinkedListNode(0));
linkedlist.addToTail(new LinkedListNode(1));
linkedlist.addToTail(new LinkedListNode(2));
console.log(linkedlist.toArray());

