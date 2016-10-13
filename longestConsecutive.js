/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var longestConsecutive = function(root) {
  let max = 0;

  const findMax = function(node, prevVal, currPathLength) {
    // console.log(node, prevVal, currPathLength);
    if (node === null) {
      max = Math.max(max, currPathLength);
      return;
    }

    length = (prevVal && node.val === prevVal + 1) ?
      currPathLength + 1 : (max = Math.max(max, currPathLength), 1);

    findMax(node.left, node.val, length);
    findMax(node.right, node.val, length);
  };

  findMax(root, null, 0);

  return max;
};

/*
var longestConsecutive = function(root) {
  let max = 0;

  var dfs = function(node, parent, length) {
    // console.log(node, parent, length);
    if (node === null) {
      return;
    }

    // visit node
    length = (parent !== null && node.val === parent.val + 1) ? length + 1 : 1;
    max = Math.max(max, length);

    dfs(node.left, node, length);
    dfs(node.right, node, length);
  };

  dfs(root, null, 0);

  return max;
};
*/


/*

var longestConsecutive = function(root) {
  return dfs(root, null, 0);
};

var dfs = function(node, parent, length) {
  // console.log(node, parent, length);
  if (node === null) {
    return length;
  }

  length = (parent !== null && node.val === parent.val + 1) ? length + 1 : 1;

  return Math.max(length, Math.max(dfs(node.left, node, length), dfs(node.right, node, length)));
};

 */





function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

TreeNode.prototype = {
  addLeft: function(val) {
    this.left = new TreeNode(val);
    return this;
  },
  addRight: function(val) {
    this.right = new TreeNode(val);
    return this;
  }
};

let tree = new TreeNode(1);
tree.addRight(3);
tree.right.addLeft(2);
tree.right.addRight(4);
tree.right.right.addRight(5);

let tree2 = new TreeNode(2);
tree2.addRight(3);
tree2.right.addLeft(2);
tree2.right.left.addLeft(1);

let tree3 = new TreeNode(1);
tree3.addLeft(2);
tree3.left.addLeft(3);
tree3.left.left.addRight(6);
tree3.left.left.addLeft(5);



// console.log(tree);
console.log(longestConsecutive(tree), 3);
console.log(longestConsecutive(tree2), 2);
console.log(longestConsecutive(tree3), 3);