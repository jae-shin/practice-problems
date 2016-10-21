class BinarySearchTree {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    // this.maxDepth;
    // this.minDepth;
  }

  addValue(val) {
    if (val === this.value) {
      throw new Error('A BST can\'t have nodes with duplicate values');
    } else if (val > this.value) {
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
      value = node ? node.value : null;
      array.push(value);
    });

    return array;
  }

  rebalance() {
    const {minDepth, maxDepth} = this.calculateMinMaxDepth();
    const orderedArr = [];
    if (maxDepth > 2 * minDepth) {
      depthFirstSearch(this, node => {
        orderedArr.push(node.value);
      });
    }
    // Invalid left-hand side in assignment
    // this = minimalTree(orderedArr);

    return minimalTree(orderedArr);
  }

  calculateMinMaxDepth() {
    let minDepth = Infinity;
    let maxDepth = 0;

    const visitAllLeafsDFS = (node, depthSoFar) => {
      if (!node.left && !node.right) {
        console.log('Found Leaf', node.value, 'at depth', depthSoFar);
        minDepth = Math.min(depthSoFar, minDepth);
        maxDepth = Math.max(depthSoFar, maxDepth);
      }

      if (node.left) {
        visitAllLeafsDFS(node.left, depthSoFar + 1);
      }

      if (node.right) {
        visitAllLeafsDFS(node.right, depthSoFar + 1);
      }
    }

    visitAllLeafsDFS(this, 0);

    return {minDepth, maxDepth};
  }
}

// The callback "visit" needs to handle null nodes
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

// In-order
const depthFirstSearch = function(root, visit) {
  if (root === null) {
    return;
  }

  if (root.left) {
    depthFirstSearch(root.left, visit);
  }
  visit(root);
  if (root.right) {
    depthFirstSearch(root.right, visit);
  }
}

let bstree = new BinarySearchTree(8);
bstree.addValue(4).addValue(10).addValue(15).addValue(7).addValue(1).addValue(11).addValue(6).addValue(13).addValue(14);
console.log('before', bstree.toArray());
// console.log(bstree.toArray());
// console.log(bstree.calculateMinMaxDepth());
rebalancedTree = bstree.rebalance();
console.log('after', rebalancedTree.toArray());


// Given a sorted (increasing order) array with unique integer elements, write an algo to create a binary search tree with minimal height.
function minimalTree(arr, start = 0, end = arr.length - 1) {
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
// bstree = minimalTree([2, 5, 8, 10, 11, 13]);
// console.log(bstree);
// console.log(bstree.toArray());
// console.log(bstree.calculateMinMaxDepth());



module.exports = {
  BinarySearchTree,
  minimalTree
};
