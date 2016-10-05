/**
 * Heap: a "complete" tree in which a parent node is ordered only in
 * respect to its immediate children.
 *
 * In a binary heap each node should have only zero, one, or two children. Each node
 * must have 2 children before the next oldest node can have any children. Therefore
 * the 0th node will be the parent of the 1st and 2nd nodes, the 1st node will be the
 * parent of the 3rd and 4th nodes, and the 2nd node will be the parent of the 5th and
 * 6th nodes. In a specific kind of binary heap, the binary min heap, every node is
 * less than its immediate children:
 *
 *          0
 *     1         2
 *   3   4     5   6
 *  7
 *
 * There is only one place at any given time in a binary heap where a node can be
 * added or removed. In the example above, the next node will be inserted as the second
 * child of 3. If we were to remove a node instead, we would remove the 7. This mimics
 * the behavior of a stack and allows us to manage the heap in a very memory efficient way,
 * using a list or array. For example, the heap pictured above can be described as:
 *
 * [0, 1, 2, 3, 4, 5, 6, 7]
 *
 * where we always add to or remove from the end of the array.
 *
 * A well known fact, utilized with binary heaps stored in arrays, is that
 * we can calculate the index of a node's parent or children using math:
 *
 * parentIndex = Math.floor( (index - 1) / 2 )
 * childrenIndices = [index * 2 + 1, index * 2 + 2]
 *
 * When adding a new node to a binary min heap, it could be that we violate the property of the
 * heap whereby every node is of lower value than its children. Thus whenever we insert into
 * a binary min heap, we must compare the inserted node to its parent, and swap their positions
 * if it is less than its parent. After a swap it must compare itself to its new parent, continuing
 * until it is no longer less than its parent.
 *
 * Something similar happens when we want to remove the root node. Because we can only remove from the
 * end of the array we swap the position of the last node and the root node and then remove the now-last
 * node from the heap. The new root node now must be compared to its children and if it is not less than
 * both of them, be swapped with whichever of the two of them is the smallest. It is then compared with its
 * new children and this swapping continues until it is less than both its children.
 *
 * You can see a great visualization of a binary min heap in action here, play around with it until you can
 * easily guess how the heap will behave with both insertion and removal:
 * https://www.cs.usfca.edu/~galles/visualization/Heap.html
 */

// Below is a binary heap whose nodes are integers. Its storage is an array and
// its `getRoot` method is already written. `BinaryHeap`'s `this._compare` method is hard-coded to return
// whether the first element passed into it is less than the second. Use it when comparing nodes.
//
// Implement the `insert` and `removeRoot` methods, each operating in logarithmic time relative
// to the size of the heap, and each restoring the heap's property of parent to child sorting. Use
// the equations above to navigate parent / child relationships in the storage array, and write any
// helper functions needed to assist you.
//
// Extra credit: `BinaryHeap`'s `this._compare` is hard-coded to assist in making a min heap, modify `BinaryHeap`
// to accept an optional argument which is a function used as the sorting mechanism for the heap.
// That way you can use your `BinaryHeap` class to construct a max heap or min heap or whatever.
//
// Extra extra credit: Implement `heapSort`. `heapSort` takes an array, constructs it into a `BinaryHeap`
// and then iteratively returns the root of the `BinaryHeap` until its empty, thus returning a sorted array.

class BinaryHeap {
  constructor(initial, compare) {
    this.heap = initial || [];

    // returns true if need to swap childNode's value v1 with parentNode's value v2
    // compare = (v1, v2) => <boolean expression>;
    // for Min Heap: compare = (v1, v2) => v1 < v2;
    // for Max Heap: compare = (v1, v2) => v1 > v2;
    this.compare = compare;
  }

  insert(value) {
    this.heap.push(value);
    let index = this.heap.length - 1;
    let parentIx;
    while (index > 0) {
      parentIx = Math.floor((index - 1) / 2);
      if (this.compare(value, this.heap[parentIx])) {
        [this.heap[index], this.heap[parentIx]] = [this.heap[parentIx], this.heap[index]];
        index = parentIx;
      } else {
        break;
      }
    }
    return this;
  }

  // remove root
  extractRoot() {
    if (this.heap.length === 0) {
      return null;
    }

    let min = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap = this.heap.slice(0, -1);

    let index, leftIx, leftVal, rightIx, rightVal, swapIx, swapVal;

    if (this.heap.length > 0) {
      index = 0;
      leftIx = index * 2 + 1;
      rightIx = index * 2 + 2;
      while (leftIx < this.heap.length) {
        // compare the values of leftIx and rightIx child and find the swap child
        leftVal = this.heap[leftIx];
        rightVal = this.heap[rightIx];
        if (rightVal !== undefined && this.compare(rightVal, leftVal)) {
          swapIx = rightIx;
          swapVal = rightVal;
        } else {
          swapIx = leftIx;
          swapVal = leftVal;
        }

        if (this.compare(swapVal, this.heap[index])) {
          [this.heap[index], this.heap[swapIx]] = [this.heap[swapIx], this.heap[index]];
          index = swapIx;
          leftIx = index * 2 + 1;
          rightIx = index * 2 + 2;
        } else {
          break;
        }
      }
    }

    return min;
  }
}


// Tests
let binaryMinHeap = new BinaryHeap([], (v1, v2) => v1 < v2);
binaryMinHeap.insert(1);
console.log(binaryMinHeap.heap); // [1]

binaryMinHeap = new BinaryHeap([4], (v1, v2) => v1 < v2);
binaryMinHeap.insert(2);
console.log(binaryMinHeap.heap); // [2, 4]

binaryMinHeap = new BinaryHeap([4, 50, 7, 55, 90, 87], (v1, v2) => v1 < v2);
binaryMinHeap.insert(2);
console.log(binaryMinHeap.heap); // [2, 50, 4, 55, 90, 87, 7]

let binaryMinHeap2 = new BinaryHeap([10, 50, 23, 88, 90, 32, 74, 96], (v1, v2) => v1 < v2);
binaryMinHeap2.extractRoot();
console.log(binaryMinHeap2.heap); // [23, 50, 32, 88, 90, 96, 74]

let binaryMaxHeap = new BinaryHeap([40, 27, 16, 2, 10, 8], (v1, v2) => v1 > v2);
binaryMaxHeap.insert(19);
console.log(binaryMaxHeap.heap); // [ 40, 27, 19, 2, 10, 8, 16 ]

let binaryMaxHeap2 = new BinaryHeap([91, 48, 62, 30, 10, 51], (v1, v2) => v1 > v2);
binaryMaxHeap2.extractRoot();
console.log(binaryMaxHeap2.heap); // [62, 48, 51, 30, 10]