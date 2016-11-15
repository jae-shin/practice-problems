const {Graph, Node, exampleG} = require('./Graph');

// Route between Nodes: given a direct graph, design an algo to find out whether there is a route between two nodes
const isThereRoute = function(fromNode, toNode) {
  let queue = [fromNode];
  fromNode.enqueued = true;

  let current;

  while (queue.length > 0) {
    current = queue.shift();
    if (current === toNode) {
      return true;
    }
    current.adj.forEach(neigh => {
      if (!neigh.enqueued) {
        queue.push(neigh);
        neigh.enqueued = true;
      }
    });
  }

  return false;
};

function isBipartite(node) {
  if (node === null) {
    throw new Error('input node is null!');
  }
  let q = [];
  node.color = 'white';
  q.push(node);
  node.enqueued = true;

  while (q.length > 0) {
    let node = q.shift();
    for (let i = 0; i < node.adj.length; i++) {
      let neigh = node.adj[i];
      if (neigh.enqueued && neigh.color !== complement(node.color)) {
        return false;
      } else if (!neigh.enqueued) {
        neigh.color = complement(node.color);
        q.push(neigh);
        neigh.enqueued = true;
      }
    }
  }

  return true;
}

function complement(color) {
  return color === 'white' ? 'black' : 'white';
}

// for Undirected graphs
// (for directed graphs, perform the Topological Sorting algo)
function hasCycle(node) {
  node.visited = true;
  for (let i = 0; i < node.adj.length; i++) {
    let neigh = node.adj[i];
    if (!neigh.visited) {
      neigh.parent = node;
      if (hasCycle(neigh)) {
        return true;
      }
    } else if (node.parent !== neigh) {
      return true;
    }
  }
  return false;
}




let g = new Graph();
let n0 = new Node(0);
let n1 = new Node(1);
g.addNode(n0).addNode(n1);
g.addEdge(n0, n1).addEdge(n1, n0);
/*
g
0: 1
1: 0
 */
let g2 = new Graph();
let node0 = new Node(0);
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);
g2.addNode(node0).addNode(node1).addNode(node2).addNode(node3).addNode(node4).addNode(node5);
g2.addEdge(node0, node1).addEdge(node0, node5).addEdge(node2, node1).addEdge(node2, node5).addEdge(node4, node3).addEdge(node4, node5);
/*
exampleG

0: 1, 4, 5
1: 3, 4
2: 1
3: 2, 4
4:
5:
 */
// console.assert(isThereRoute(n0, n1));
// console.assert(isThereRoute(exampleG.nodes[0], exampleG.nodes[2]));
// exampleG.nodes.forEach(node => {
//   node.enqueued = false;
// });
// console.assert(isThereRoute(exampleG.nodes[2], exampleG.nodes[0]) === false);
// exampleG.nodes.forEach(node => {
//   node.enqueued = false;
// });
// console.assert(isThereRoute(exampleG.nodes[0], exampleG.nodes[3]));
// exampleG.nodes.forEach(node => {
//   node.enqueued = false;
// });
// console.assert(isThereRoute(exampleG.nodes[0], exampleG.nodes[0]));
// exampleG.nodes.forEach(node => {
//   node.enqueued = false;
// });
// console.assert(isThereRoute(exampleG.nodes[5], exampleG.nodes[5]));
// exampleG.nodes.forEach(node => {
//   node.enqueued = false;
// });

console.assert(isBipartite(exampleG.nodes[0]) === false);
console.assert(isBipartite(g.nodes[0]));
console.assert(isBipartite(g2.nodes[0]));

console.assert(hasCycle(g.nodes[0]) === false);

let cyclicUndirectedGraph = new Graph();
node0 = new Node(0);
node1 = new Node(1);
node2 = new Node(2);
node3 = new Node(3);
node4 = new Node(4);
node5 = new Node(5);
node6 = new Node(6);
node7 = new Node(7);
cyclicUndirectedGraph.addNodes([node0, node1, node2, node3, node4, node5, node6, node7]).addUndirEdge(node0, node1).addUndirEdge(node0, node2).addUndirEdge(node2, node5).addUndirEdge(node5, node4).addUndirEdge(node4, node3).addUndirEdge(node3, node2).addUndirEdge(node3, node7).addUndirEdge(node1, node6);
console.assert(hasCycle(cyclicUndirectedGraph.nodes[0]));

let acyclicUndirectedGraph = new Graph();
node0 = new Node(0);
node1 = new Node(1);
node2 = new Node(2);
node3 = new Node(3);
node4 = new Node(4);
node5 = new Node(5);
node6 = new Node(6);
node7 = new Node(7);
acyclicUndirectedGraph.addNodes([node0, node1, node2, node3, node4, node5, node6, node7]).addUndirEdge(node0, node1).addUndirEdge(node0, node2).addUndirEdge(node0, node3).addUndirEdge(node1, node4).addUndirEdge(node1, node5).addUndirEdge(node2, node6).addUndirEdge(node3, node7);
console.assert(hasCycle(acyclicUndirectedGraph.nodes[0]) === false);


