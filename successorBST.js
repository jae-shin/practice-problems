/**
 * Successor:
 * Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree. You may assume that each node has a link to its parent.
 */

/*
  if node has a right child
 find the leftmost leaf of the right subTree
  else (node does not have a right child)
    if node was a left child
      return parent node if exists, otherwise return null
    if node was a right child
      if parent node is the root, return null
      else return the parent of the parent
*/

function nextNode(node) {
  if (node.right !== null) {
    return findLeftmostLeaf(node.right);
  } else {
    let parent = node.parent;
    if (parent === null) {
      return null;
    }
    if (node === parent.left) {
      return parent;
    }
    if (node === parent.right) {
      if (parent.parent === null) {
        return null;
      } else {
        return parent.parent;
      }
    }
}


function findLeftmostLeaf(node) {
  let leftmost = node;
  while (leftmost.left !== null) {
    leftmost = leftmost.left;
  }

  return leftmost;
}
