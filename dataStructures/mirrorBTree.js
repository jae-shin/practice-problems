/**
 *       12                 12
 *    4      7     ->    7      4
 *  1      5   9       9   5      1
 *
 */

const mirrorBTree = function (bTree) {
  const queue = [bTree];

  const swapEnqueue = function(tree) {
    tree.swapChildren();
    if (tree.leftChild !== null) {
      queue.push(tree.leftChild);
    }

    if (tree.rightChild !== null) {
      queue.push(tree.rightChild);
    }
  };

  while (queue.length > 0) {
    swapEnqueue(queue.shift());
  }

  return bTree;
};


class BTree {
  constructor(val) {
    this.val = val;
    this.leftChild = null;
    this.rightChild = null;
  }

  addLeftChild(val) {
    this.leftChild = new BTree(val);
    return this;
  }

  addRightChild(val) {
    this.rightChild = new BTree(val);
    return this;
  }

  swapChildren() {
    [this.leftChild, this.rightChild] = [this.rightChild, this.leftChild];
  }
}


let testBTree = new BTree(12);
testBTree.addLeftChild(4).addRightChild(7);
testBTree.leftChild.addLeftChild(1);
testBTree.rightChild.addLeftChild(5).addRightChild(9);

testBTree = new BTree(5);
testBTree.addLeftChild(1);
testBTree.leftChild.addRightChild(2);

console.log(mirrorBTree(testBTree));

