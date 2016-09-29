/**
 * Bubble Sort
 *
 * Time Complexity:
 *   Average: O(n^2)
 *   Best Case: O(n^2)
 *   Worst Case: O(n^2)
 *
 * Space Complexity: O(1)
 *
 */

function bubbleSort(array) {
  let currentIx = 0;
  let endIx = array.length - 1;
  let numOfWhileLoop = 0;

  while (endIx > 0) {
    while (currentIx < endIx) {
      numOfWhileLoop++;
      if (array[currentIx] > array[currentIx + 1]) {
        [array[currentIx], array[currentIx + 1]] = [array[currentIx + 1], array[currentIx]];
      }
      currentIx++;
    }
    endIx--;
    currentIx = 0;
  }

  return {numOfWhileLoop, array};
}

// Testing
console.log(bubbleSort([]));
console.log(bubbleSort([1, 2, 3, 4, 5, 6]));
console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
console.log(bubbleSort([3, 8, 4, 1, 2, 8, 9, 5]));


