class BinarySearchTree {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  addValue(val) {
    // compare val with this.value
    if (val > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(val);
      } else {
        this.right.addValue(val);
      }
    } else {
      if (this.left === null) {
        this.left = new BinarySearchTree(val);
      } else {
        this.left.addValue(val);
      }
    }

    return this;
  }

  toArray() {
    const array = [];
    let value;

    breadthFirstSearch(this, (node) => {
      value = (node === null) ? null : node.value;
      array.push(value);
    });

    return array;
  }
}

// The callback visit needs to handle null nodes
const breadthFirstSearch = function(root, visit) {
  const queue = [root];
  let current;
  while (queue.length > 0) {
    current = queue.shift();
    visit(current);
    if (current !== null) {
      queue.push(current.left, current.right);
    }
  }
};

let bstree = new BinarySearchTree(10);
bstree.addValue(5).addValue(2).addValue(8).addValue(13).addValue(11);
// console.log(bstree);
// console.log(bstree.toArray());


// Given a sorted (increasing order) array with unique integer elements, write an algo to create a binary search tree with minimal height.
const minimalTree = function(arr, start = 0, end = arr.length - 1) {
  if (start > end) {
    return null;
  }

  if (start === end) {
    return new BinarySearchTree(arr[start]);
  }

  let middle = Math.ceil((start + end) / 2);
  let tree = new BinarySearchTree(arr[middle]);
  tree.left = minimalTree(arr, start, middle - 1);
  tree.right = minimalTree(arr, middle + 1, end);

  return tree;
}

// console.log(minimalTree([]));
// console.log(minimalTree([1]).toArray());
// console.log(minimalTree([1, 5]).toArray());
// console.log(minimalTree([1, 5, 10]).toArray());
// console.log(minimalTree([2, 5, 8, 10, 11, 13]).toArray());



module.exports = {
  BinarySearchTree,
  minimalTree
};




