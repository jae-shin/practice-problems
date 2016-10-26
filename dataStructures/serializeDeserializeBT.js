/**
 * Serialize and Deserialize Binary Tree
 *
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
/**
 *          1
 *      2       3
 *            4   5
 *
 */

var serialize = function(root) {
	const queue = [root];
	const result = [];

	let node;
	while (queue.length !== 0) {
		node = queue.shift();
		if (node) {
			result.push(node.val);
			queue.push(node.left, node.right);
		} else {
			result.push('null');
		}
	}

	let index = result.length - 1;
	while (result[index] === 'null') {
		index--;
	}

	// console.log(result.splice(0, index + 1).join(', '));
	return result.splice(0, index + 1).join(', ');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
	const arr = data.split(', ');
	// console.log(data, arr);
	if (arr[0] === '') {
		return null;
	}

	const getNextVal = function() {
		let str = arr.shift();
		if (str === 'null' || str === undefined) {
			return null;
		}
		return str / 1;
	}

	let root = new TreeNode(getNextVal());
	const queue = [root];

	let node;
	let nextVal;
	while (arr.length > 0) {
		node = queue.shift();
		nextVal = getNextVal();
		if (nextVal !== null) {
			node.left = new TreeNode(nextVal);
			queue.push(node.left);
		}
		nextVal = getNextVal();
		if (nextVal !== null) {
			node.right = new TreeNode(nextVal);
			queue.push(node.right);
		}
	}

	return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */