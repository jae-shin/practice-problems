/**
 * Dijkstra's algorithm
 *
 * A way to find the shortest path between two points in a weighted directed graph (which might have cycles). All edges must have positive values.
 *
 * Concepts: priority queue

Init vars:
  path_weight[node]:
    maps from each node to the total weight of the shortest path, all values are initialized to infinity, except for path_weight[startNode] = 0
  previous[node]:
    maps from each node to the previous node in the (current) shortest path
  remaining:
    a priority queue of all nodes in the graph, where each node's priority is defined by its path_weight

Algorithm:
  Iterate through the nodes in 'remaining' until 'remaining' is empty
  1. select node 'n' in remaining with the lowest value in path_weight
  2. for each adjacent node, compare path_weight[x] to path_weight[n] + edge_weight[(n, x)], update path_weight and previous accordingly
  3. remove n from remaining
 *
 */

// {Map object} edgeWeightMap (key, value) = (['ab'], 4)
// {Object} adjList {'a': ['b', 'f']}
// {array} nodes ['a', 'b']
// {String node} startNode 'a'
// {String node} endNode 'i'
function dijkstra(startNode, endNode, nodes, adjList, edgeWeightMap) {
  const path_weight = {};
  const previous = {};
  const remaining = {};
  const shortestPath = [];

  nodes.forEach(node => {
    if (node === startNode) {
      path_weight[node] = 0;
    } else {
      path_weight[node] = Infinity;
    }
  });

  for (let node in path_weight) {
    remaining[node] = path_weight[node];
  }

  previous[startNode] = null;
  let currentNode = startNode;

  while (currentNode) {
    console.log(currentNode, path_weight, previous);
    adjList[currentNode].forEach(neighbor => {
      let pathWeightFromCurrent = path_weight[currentNode] + edgeWeightMap.get(`${currentNode}${neighbor}`);
      if (pathWeightFromCurrent < path_weight[neighbor]) {
        path_weight[neighbor] = pathWeightFromCurrent;
        remaining[neighbor] = pathWeightFromCurrent;
        previous[neighbor] = currentNode;
      }
    });
    delete remaining[currentNode];
    currentNode = getNextNode(remaining);
  }

  if (path_weight[endNode] === Infinity) {
    throw new Error(`Node ${startNode} and Node ${endNode} are not connected!`);
  }

  let prevNode = endNode;

  while (prevNode) {
    shortestPath.push(prevNode);
    prevNode = previous[prevNode];
  }

  return {
    path_weight: path_weight[endNode],
    path: shortestPath.reverse().join(' -> ')
  };
}

function getNextNode(remaining) {
  let min = Infinity;
  let nextNode = null;

  for (let node in remaining) {
    if (remaining[node] < min) {
      min = remaining[node];
      nextNode = node;
    }
  }

  return nextNode;
}

// using Graph and Node classes
function dijkstra2(graph, start, end) {
  let remaining = new Map();
  graph.nodes.forEach(node => {
    if (node === start) {
      node.pathWeight = 0;
    } else {
      node.pathWeight = Infinity;
    }
    remaining.set(node, node.pathWeight);
  });
  start.prev = null;

  let next = start;
  while (next) {
    next.adj.forEach(neigh => {
      let pathSum = next.pathWeight + getEdgeWeight(next, neigh);
      if (pathSum < neigh.pathWeight) {
        neigh.prev = next;
        neigh.pathWeight = pathSum;
        remaining.set(neigh, pathSum);
      }
    });
    remaining.delete(next);
    next = getNextNode2(remaining);
  }

  return end.pathWeight;
}

function getNextNode2(remaining) {
  let min = Infinity;
  let next = null;
  for(let [key, value] of remaining.entries()) {
    if (value < min) {
      min = value;
      next = key;
    }
  }
  return next;
}

// Testing
let edgeWeightMap = new Map([['ab', 5], ['ac', 3], ['ae', 2], ['bd', 2], ['cb', 1], ['cd', 1], ['da', 1], ['dg', 2], ['dh', 1], ['ea', 1], ['eh', 4], ['ei', 7], ['fb', 3], ['fg', 1], ['gc', 3], ['gi', 2], ['hc', 2], ['hf', 2], ['hg', 2]]);
let adjList = {
  'a': ['b', 'c', 'e'],
  'b': ['d'],
  'c': ['b', 'd'],
  'd': ['a', 'g', 'h'],
  'e': ['a', 'h', 'i'],
  'f': ['b', 'g'],
  'g': ['c', 'i'],
  'h': ['c', 'f', 'g'],
  'i': []
};
let nodes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
let startNode = 'a';
let endNode = 'i';

console.log(dijkstra(startNode, endNode, nodes, adjList, edgeWeightMap));


