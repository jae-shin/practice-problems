class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addLeft(value) {
    this.left = new BinaryTree(value);
    return this;
  }

  addRight(value) {
    this.right = new BinaryTree(value);
    return this;
  }

  changeValueTo(value) {
    this.value = value;
  }

  inOrderTraversal(visit) {
    if (this.left !== null) {
      this.left.inOrderTraversal(visit);
    }
    visit(this);
    if (this.right !== null) {
      this.right.inOrderTraversal(visit);
    }
  }
}

// Three forms of Depth First Search
const inOrderTraversal = (node, visit) => {
  if (node !== null) {
    inOrderTraversal(node.left, visit);
    visit(node);
    inOrderTraversal(node.right, visit);
  }
};

const preOrderTraversal = (node, visit) => {
  if (node !== null) {
    visit(node);
    preOrderTraversal(node.left, visit);
    preOrderTraversal(node.right, visit);
  }
};

const postOrderTraversal = (node, visit) => {
  if (node !== null) {
    postOrderTraversal(node.left, visit);
    postOrderTraversal(node.right, visit);
    visit(node);
  }
};

const breadthFirstSearch = (node, visit) => {
  const queue = [node];
  let current;

  while (queue.length > 0) {
    current = queue.shift();
    visit(current);
    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
};


/*
       1
    2     3
  4  5   6  7
 */

const binaryTree = new BinaryTree(1);
binaryTree.addLeft(2).addRight(3);
binaryTree.left.addLeft(4).addRight(5);
binaryTree.right.addLeft(6).addRight(7);
// console.log(binaryTree);
// binaryTree.inOrderTraversal(node => console.log(node.value));
// inOrderTraversal(binaryTree, node => console.log(node.value));
// preOrderTraversal(binaryTree, node => console.log(node.value));
// postOrderTraversal(binaryTree, node => console.log(node.value));
// breadthFirstSearch(binaryTree, node => console.log(node.value));

/*
       1
    2     3
  4  5
 */

const binaryTree2 = new BinaryTree(1);
binaryTree2.addLeft(2).addRight(3);
binaryTree2.left.addLeft(4).addRight(5);


// Check Balanced
const isBalanced = function(root) {
  const balancedWithDepth = function(node) {
    if (node === null) {
      return {balanced: true, depth: -1};
    }

    let left = balancedWithDepth(node.left);
    if (left.balanced) {
      let right = balancedWithDepth(node.right);
      if (right.balanced && Math.abs(left.depth - right.depth) <= 1) {
        return {balanced: true, depth: Math.max(left.depth, right.depth) + 1};
      }
    }

    return {balanced: false, depth: null};
  }

  return balancedWithDepth(root).balanced;
};

console.log(isBalanced(null), true);
console.log(isBalanced(new BinaryTree(1)), true);
console.log(isBalanced(new BinaryTree(1).addLeft(2)), true);

let btree = new BinaryTree(1);
btree.addLeft(2);
btree.left.addRight(3);
console.log(isBalanced(btree), false);
console.log(isBalanced(binaryTree), true);
console.log(isBalanced(binaryTree2), true);



// Given a binary tree, design an algo which creates a linked list of all the nodes at each depth
const listOfDepths = function(root) {
  // init array to hold the linkedlists
  const array = [];
  let llist;

  // perform a pre-order DFS traversal

  const dfs = function(node, depth) {
    if (node === null) {
      return;
    }

    if (array[depth] === undefined) {
      llist = new LinkedList();
      array[depth] = llist;
    } else {
      llist = array[depth];
    }

    llist.addToTail(node);

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };

  return array;
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

/*
        1
    2       3
      5
*/
var binaryTreePaths = function(root) {
  if (root === null) {
    return [];
  }

  const results = [];

  const dfs = function(current, pathArray) {
    if (current.left === null && current.right === null) {
      results.push(pathArray.join('->'));
      return;
    }

    if (current.left !== null) {
      dfs(current.left, pathArray.concat(current.left.val));
    }
    if (current.right !== null) {
      dfs(current.right, pathArray.concat(current.right.val));
    }
  }

  dfs(root, [root.val]);

  return results;
};