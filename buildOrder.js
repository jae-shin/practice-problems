/**
 * CCI 6th ed: Chapter 4 Trees and Graphs #4.7 page 110
 *
 * Build Order: You are given a list of projects and a list of dependencies (which is a list of pairs of projects, where the second project is dependent on the first project). All of a project's dependencies must be built before the project is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error.
 *
 * Example:
 * Input:
 *   projects: a, b, c, d, e, f
 *   dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
 * Output: f, e, a, b, d, c
 *
 * O(N+M) where N = num of projects, M = num of dependencies
 */

// {array} projects, ['a', 'b', 'c', 'd', 'e', 'f']
// {array of arrays} dependencies, [['a', 'd'], ..., ['d', 'c']]
/*
function buildOrder (projects, dependencies) {
  const buildOrder = [];
  const graph = new Graph();
  // nodes = {'a': Node {value: 'a', visited: false, built: false, edges: [Node objs]}, 'b': {}, 'c': {} ... }
  // add edge from A to B if A depends on B
  graph.addNodes(projects);
  graph.addEdges(dependencies)
  // console.log('nodes', graph.nodes);
  // console.log('edges', graph.edges);

  const dfs = node => {
    // console.log('node in dfs', node);
    node.visited = true;
    let neighbors = node.edges;
    let numNeighbors = neighbors.length;

    for (let i = 0; i < numNeighbors; i++) {
      if (neighbors[i].visited && !neighbors[i].built) {
        throw new Error('There is no valid build order!');
      } else if (!neighbors[i].visited) {
        dfs(neighbors[i]);
      }
    }

    node.built = true;
    buildOrder.push(node.val);
  };

  const nodeVals = Object.keys(graph.nodes);
  const numNodes = nodeVals.length;

  for (let i = 0; i < numNodes; i++) {
    let node = graph.nodes[nodeVals[i]];
    if (!node.visited) {
      dfs(node);
    }
  }

  return buildOrder.join(', ');
}


// Node and Graph class
function Node(val) {
  this.val = val;
  this.visited = false;
  this.built = false;
  this.edges = [];
}

function Graph() {
  this.nodes = {};
  // this.edges = {};
}

Graph.prototype = {
  addNodes: function(arr) {
    arr.forEach(nodeVal => {
      this.nodes[nodeVal] = new Node(nodeVal);
    });
  },

  addEdges: function(arr) {
    arr.forEach(([first, second]) => {
      this.nodes[second].edges.push(this.nodes[first]);
      // this.edges[second].push(first);
    });
  }
}

*/

// Second implementation using no Node, Graph class

function buildOrder(projects, dependencies) {
  const order = [];
  const adjList = {};
  const visited = new Set();
  const built = new Set();

  projects.forEach(project => adjList[project] = []);
  dependencies.forEach(edge => {
    adjList[edge[1]].push(edge[0]);
  });

  projects.forEach(project => {
    if (!visited.has(project)) {
      topologicalSort(project, adjList, visited, built, order)
    }
  });

  return order.join(', ');
}

const visited = new Set();

function topologicalSort(node, adjList, visited, built, order) {
  visited.add(node);

  adjList[node].forEach(neighbor => {
    if (visited.has(neighbor) && !built.has(neighbor)) {
      throw new Error('Graph has cycle: no valid build order exists!');
    }

    if (!visited.has(neighbor)) {
      topologicalSort(neighbor, adjList, visited, built, order);
    }
  });

  order.push(node);
  built.add(node);
}

// Third implementation using iterative version of topological sort


// Testing
// let testGraph = new Graph();
// testGraph.addNodes(['a', 'b', 'c', 'd']);
// testGraph.addEdges([['a', 'c'], ['b', 'd'], ['a', 'd']]);
// console.log(testGraph.nodes);
// console.log(testGraph.edges);

// let projects = ['a', 'b', 'c', 'd'];
// let dependencies = [['a', 'c'], ['b', 'd'], ['a', 'd']];
// console.assert(buildOrder(projects, dependencies) === 'a, b, c, d'); // a, b, c, d

// let projects = ['a', 'b', 'c', 'd', 'e', 'f'];
// let dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
// console.assert(buildOrder(projects, dependencies) === 'f, a, b, d, c, e'); // f a b d c e

// let projects = ['a', 'b', 'c', 'd', 'e', 'f'];
// let dependencies = [['a', 'b'], ['b', 'c'], ['c', 'a']];
// console.assert(buildOrder(projects, dependencies)); // throw Error

// let projects = ['a', 'b', 'c', 'd', 'e', 'f'];
// let dependencies = generateRandomDependencies(projects, 5);
// console.log('dependencies:', dependencies);
// console.log('build order:', buildOrder(projects, dependencies));

function generateRandomDependencies(projects, numOfDependencies) {
  let firstIx, secondIx;
  const numProjects = projects.length;
  const dependencies = [];

  for (let i = 0; i < numOfDependencies; i++) {
    firstIx = Math.floor(Math.random() * numProjects);
    secondIx = firstIx;
    while (secondIx === firstIx) {
      secondIx = Math.floor(Math.random() * numProjects);
    }
    dependencies.push([projects[firstIx], projects[secondIx]]);
  }

  return dependencies;
};

// console.log(generateRandomDependencies(projects, 5));

