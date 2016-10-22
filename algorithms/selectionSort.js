/**
 * Selection Sort
 *
 * Time Complexity:
 *   Average: O(n^2)
 *   Best Case: O(n^2)
 *   Worst Case: O(n^2)
 *
 * Space Complexity: O(1)
 *
 */

function selectionSort(array) {
  let startIx = 0;
  let minVal, minIx, currentIx;

  let numOps = 0;

  // while startIx < array.length - 1
  //   minIx = array[startIx]
  //   loop through subArray [startIx, end] and update minVal, minIx
  //   place minVal at startIx
  //   increment startIx

  while (startIx < array.length - 1) {
    minIx = startIx;
    minVal = array[startIx];
    for (currentIx = startIx + 1; currentIx < array.length; currentIx++) {
      numOps++;
      if (array[currentIx] < minVal) {
        minVal = array[currentIx];
        minIx = currentIx;
      }
    }
    [array[startIx], array[minIx]] = [array[minIx], array[startIx]];
    startIx++;
    console.log(array);
  }

  return {numOps, array};
}


// Testing
//console.log(selectionSort([5, 4, 3, 2, 1]));
//console.log(selectionSort([]));
console.log(selectionSort([8, 3, 6, 2, 6, 4, 8, 0, 1]));