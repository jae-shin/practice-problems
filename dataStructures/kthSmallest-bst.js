const { BinarySearchTree, minimalTree } = require('./binarySearchTree');

/**

Kth Smallest Element in a BST

Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

Hint:
  1. Try to utilize the property of a BST.
  2. What if you could modify the BST node's structure?
  3. The optimal runtime complexity is O(height of BST).

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

/*

            10
      5             18
   3    7      15        22
1                16
                   17
 */
var kthSmallest = function(root, k) {
  // brute force: count from the smallest to the kthSmallest and return
    // time complex: O(h+k)

  // Optimize to O(h): keep track of num of nodes in left subtree and num of nodes in right subtree for each node.

  let cnt = 0;
  let kth;

  // dfs function that takes a node and does a in-order dfs traversal
  const dfs = function(node) {
    // base case
    if (cnt === k) {
      return;
    }

    if (node.left !== null) {
      dfs(node.left);
    }

    cnt += 1;
    if (cnt === k) {
      kth = node.value;
    }

    if (node.right !== null) {
      dfs(node.right);
    }
  }

  dfs(root);

  return kth;
};

// Testing
let tree = minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(kthSmallest(tree, 3));

let tree2 = new BinarySearchTree(10);
console.log(kthSmallest(tree2, 1));
tree2.addValue(5).addValue(7);
console.log(kthSmallest(tree2, 2));











