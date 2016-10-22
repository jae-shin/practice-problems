/**
 * Dijkstra's algorithm
 *
 * A way to find the shortest path between two points in a weighted directed graph (which might have cycles). ALl edges must have positive values.
 *
 * Concepts: priority queue
 *

Pseudocode:
  Init vars:
    path_weight[node]:
      maps from each node to the total weight of the shortest path, all values are initialized to infinity, except for path_weight[startNode] = 0
    previous[node]:
      maps from each node to the previous node in the (current) shortest path
    remaining:
      a priority queue of all nodes in the graph, where each node's priority is defined by its path_weight
 *
 */