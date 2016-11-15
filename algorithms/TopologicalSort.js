const { Graph, Node } = require('../dataStructures/Graph');

/**
 * Topological sort
 *
 * A topological sort of an acylic directed graph is a way of ordering the list of nodes such that if (a, b) is an edge in the graph then 'a' will appear before 'b' in the list

Init vars:
  queue 'order': stores the valid topological sort
  queue 'processNext': stores the next nodes to process

Algorithm:
  1. Iterate through all the Nodes in the graph and count the number of incoming edges, store in node.inbound
  2. Walk through the nodes again and add to 'processNext' any node where x.inbound === 0
  3. While 'processNext' is not empty
    - Remove first node n from 'processNext'
    - append n to 'order'
    - For each edge (n, x) decrement x.inbound. If x.inbound === 0, append x to 'processNext'
  4. If order contains all the nodes, then it has succeeded. Otherwise, the topological sort has failed due to a cycle.

 */


// graph = new Graph();
// function Graph() {
//   this.nodes = <array of Node objs>;
// }

// Iterative version
function topologicalSort(graph) {
  const order = [];
  const processNext = [];

  const nodes = graph.nodes;
  nodes.forEach(node => {
    node.adj.forEach(neighbor => {
      neighbor.inbound++;
    });
  });

  nodes.forEach(node => {
    if (node.inbound === 0) {
      processNext.push(node);
    }
  });

  while (processNext.length !== 0) {
    let currentNode = processNext.shift();
    order.push(currentNode.val);
    currentNode.adj.forEach(neighbor => {
      neighbor.inbound--;
      if (neighbor.inbound === 0) {
        processNext.push(neighbor);
      }
    });
  }

  if (order.length === nodes.length) {
    return order;
  } else {
    return 'Error: cycle has graph!';
  }
}

// using a set for processNext
function topologicalSort2(graph) {
  const order = [];
  const processNext = new Set();

  const nodes = graph.nodes;
  nodes.forEach(node => {
    node.adj.forEach(neighbor => {
      neighbor.inbound++;
    });
  });

  nodes.forEach(node => {
    if (node.inbound === 0) {
      processNext.add(node);
    }
  });

  const setItr = processNext[Symbol.iterator]();

  while (processNext.size > 0) {
    let currentNode = setItr.next().value;
    processNext.delete(currentNode);
    order.push(currentNode.val);
    currentNode.adj.forEach(neighbor => {
      neighbor.inbound--;
      if (neighbor.inbound === 0) {
        processNext.add(neighbor);
      }
    });
  }

  if (order.length === nodes.length) {
    return order;
  } else {
    return 'Error: cycle has graph!';
  }
}

// Recursive version: can implement topological sort with DFS algo if flip the edge convention such that if (a, b) is an edge in the graph, 'b' needs to come before 'a'
// see ../buildOrder.js


// Testing
let graph = new Graph();
let nodeA = new Node('a');
let nodeB = new Node('b');
let nodeC = new Node('c');
let nodeD = new Node('d');
let nodeE = new Node('e');
let nodeF = new Node('f');
graph.addNodes([nodeA, nodeB, nodeC, nodeD, nodeE, nodeF]);
graph.addEdge(nodeE, nodeC).addEdge(nodeB, nodeA).addEdge(nodeF, nodeD).addEdge(nodeF, nodeC).addEdge(nodeB, nodeF);
console.log(topologicalSort(graph));
console.log(topologicalSort2(graph));
