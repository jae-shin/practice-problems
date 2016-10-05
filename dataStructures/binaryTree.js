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

  changeValTo(value) {
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
postOrderTraversal(binaryTree, node => console.log(node.value));

// 4, 5, 2, 6, 7, 3, 1

