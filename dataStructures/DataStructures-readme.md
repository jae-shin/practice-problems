# Data Structures

## Table of Contents
Hash Tables, Stacks, Queues, Linked Lists, Trees, Graphs, Heaps

## Hash Tables
### Implementation:
- Object or Array of arrays (buckets)
- Methods: `.insert()`, `.retrieve()`, `.remove()`

### Example Use Cases:

### Tricks:

## Stacks
### Implementation:
- Array
- Methods: `.peek()`

### Example Use Cases:
- Balancing parens

### Tricks:

## Queues
### Implementation:
- Two stacks (inbox, outbox)
- Methods: `.peek()`

### Example Use Cases:
- Breadth First Search

### Tricks:

## Linked Lists
### Implementation:
- `LinkedList` class
  - Properties: `.head`, `.tail`
  - Methods: `.addToTail()`, `.removeHead()`, `.contains()`
- `Node` class
  - Properties: `.value`, `.next`

### Example Use Cases:

### Tricks:
- keep track of two nodes simultaneously

## Trees
### Implementation:
- `Tree/Node` class
  - Properties: `.value`, `.children` array or `.left` `.right` for binary tree
  - Methods: `.addChild()`, `.contains()`

### Example Use Cases:

### Tricks:

## Graphs

### Implementation:
- `Graph` class
  - Properties: `.nodes` array
  - Methods: `.addNode()`
- `Node` class
  - Properties: `.value`, `.edges` array

### Example Use Cases:

### Tricks:
- DFS: keep track of a `.visited` boolean flag on Node obj
- BFS: keep track of a `.enqueued` boolean flag on Node obj

## Heaps

### Implementation:
- Array: the indices of parent and children can be accessed using mathematical equations
- Methods: `.insert(value)`, `.removeRoot()`

### Example Use Cases:
- Heap Sort
- Keeping track of the median of an incoming stream of integers

### Tricks:

