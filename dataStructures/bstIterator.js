const { BinarySearchTree, minimalTree } = require('./binarySearchTree');

/**

Binary Search Tree Iterator

Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.

 */

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 *

            10
      5            19
   1     8      13     23
-4     7      11

 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
	this.depthArr = [];
	this.addToDepthArr(root);
};

BSTIterator.prototype.addToDepthArr = function(node) {
	let next = node;

	while (next !== null) {
		this.depthArr.push(next);
		next = next.left;
	}
}

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
	return this.depthArr.length > 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
	if (!this.hasNext()) {
		return null;
	}

	let currentNode = this.depthArr.pop();

	if (currentNode.right !== null) {
		this.addToDepthArr(currentNode.right);
	}

	return currentNode.value;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

let tree = minimalTree([1, 2, 3, 4, 5, 6, 7]);
let i = new BSTIterator(tree);
// let a = [];
// while (i.hasNext()) {
//   a.push(i.next());
// }
// console.log(a);

console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
