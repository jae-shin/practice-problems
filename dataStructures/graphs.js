class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(val) {
    this.nodes.push(new Node(val))
    return this;
  }

  addEdge(fromNode, toNode) {
    fromNode.edges.push(toNode);
    return this;
  }

  print() {
    let str = '';
    this.nodes.forEach(node => {
      str += `${node.value}: `
      node.edges.forEach(node => {
        str += `${node.value} `;
      })
      str += '\n';
    });
    return str;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
    this.visited = false;
    this.enqueued = false;
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

let graph = new Graph();
graph.addNode(0).addNode(1).addNode(2).addNode(3).addNode(4).addNode(5);
graph.addEdge(graph.nodes[0], graph.nodes[1]).addEdge(graph.nodes[0], graph.nodes[4])
  .addEdge(graph.nodes[0], graph.nodes[5]).addEdge(graph.nodes[1], graph.nodes[3])
  .addEdge(graph.nodes[1], graph.nodes[4]).addEdge(graph.nodes[2], graph.nodes[1])
  .addEdge(graph.nodes[3], graph.nodes[2]).addEdge(graph.nodes[3], graph.nodes[4]);
console.log(graph.print());
depthFirstSearch(graph.nodes[0], node => console.log(node.value));
breadthFirstSearch(graph.nodes[0], node => console.log(node.value));
