/**
 * Quick Sort
 *
 * Time Complexity:
 *   Average: O(n log(n))
 *   Best Case:
 *   Worst Case: O(n^2)
 *
 * Space Complexity: O(log(n)) why?
 *
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
  let divideIx = partition(arr, left, right);

  if (left < divideIx - 1) {
    quickSort(arr, left, divideIx - 1);
  }

  if (divideIx < right) {
    quickSort(arr, divideIx, right);
  }

  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return left;
}

// Testing

console.log(quickSort([]));
console.log(quickSort([1]));
console.log(quickSort([2, 1]));
console.log(quickSort([4, 3, 2, 1]));
console.log(quickSort([4, 8, 6, 5, 9, 2, 1, 3]));








