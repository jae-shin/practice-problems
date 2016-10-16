const {Graph, Node, exampleG} = require('./Graph');

// Route between Nodes: given a direct graph, design an algo to find out whether there is a foute between two nodes

const isThereRoute = function(fromNode, toNode) {
  let queue = [fromNode];
  fromNode.enqueued = true;

  let current;

  while (queue.length > 0) {
    current = queue.shift();
    if (current === toNode) {
      return true;
    } else {
      current.edges.forEach(node => {
        if (!node.enqueued) {
          queue.push(node);
          node.enqueued = true;
        }
      });
    }
  }

  return false;
};



let g = new Graph();
let n0 = new Node(0);
let n1 = new Node(1);
g.addNode(n0).addNode(n1);
g.addEdge(n0, n1).addEdge(n1, n0);
// console.log(isThereRoute(n0, n1))

console.log(isThereRoute(exampleG.nodes[0], exampleG.nodes[2]));
console.log(isThereRoute(exampleG.nodes[2], exampleG.nodes[0]));

