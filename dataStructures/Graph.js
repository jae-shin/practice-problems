// Adjacency List representation
class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(node) {
    this.nodes.push(node)
    return this;
  }

  addEdge(fromNode, toNode) {
    fromNode.edges.push(toNode);
    return this;
  }

  print() {
    return this.nodes.reduce((memo, node) => {
      memo.push(node.edges.reduce((innerMemo, edgeNode) => {
        innerMemo.push(`${edgeNode.value}`);
        return innerMemo;
      }, [`${node.value}:`]).join(' '));
      return memo;
    }, []).join('\n');
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
    this.visited = false; // DFS
    this.enqueued = false; // BFS
  }
}

const depthFirstSearch = (root, visit) => {
  visit(root);
  root.visited = true;
  root.edges.forEach(node => {
    if (!node.visited) {
      depthFirstSearch(node, visit);
    }
  });
};

const breadthFirstSearch = (root, visit) => {
  const queue = [root];
  root.enqueued = true;

  let current;

  while (queue.length > 0) {
    current = queue.shift();
    visit(current);
    current.edges.forEach(node => {
      if (!node.enqueued) {
        queue.push(node);
        node.enqueued = true;
      }
    });
  }
}

let exampleG = new Graph();
let node0 = new Node(0);
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

exampleG.addNode(node0).addNode(node1).addNode(node2).addNode(node3).addNode(node4).addNode(node5);
exampleG.addEdge(node0, node1).addEdge(node0, node4)
  .addEdge(node0, node5).addEdge(node1, node3)
  .addEdge(node1, node4).addEdge(node2, node1)
  .addEdge(node3, node2).addEdge(node3, node4);
// console.log(exampleG.print());
// depthFirstSearch(node0, node => console.log(`Node ${node.value}`)); // 0 1 3 2 4 5
// breadthFirstSearch(node0, node => console.log(`Node ${node.value}`)); // 0 1 4 5 3 2



module.exports = {
  Graph,
  Node,
  exampleG
};
