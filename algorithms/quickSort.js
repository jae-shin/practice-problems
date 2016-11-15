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

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    let piv = partition(arr, start, mid, end);
    quickSort(arr, start, piv - 1);
    quickSort(arr, piv + 1, end);
  }

  return arr;
}

function partition(arr, start, mid, end) {
  // let pivotIx = mid;
  let pivotVal = arr[mid];
  let left = start;
  let right = end;

  while (left < mid || right > mid) {
    while (left < mid && arr[left] <= pivotVal) {
      left++;
    }
    while (right > mid && arr[right] >= pivotVal) {
      right--;
    }

    if (left < right) {
      if (left === mid) {
        mid = right;
      } else if (right === mid) {
        mid = left;
      }
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }

  return mid;
}


// From CCI
/*
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
 */

// Testing
console.log(quickSort([]));
console.log(quickSort([1]));
console.log(quickSort([2, 1]));
console.log(quickSort([1, 2]));
console.log(quickSort([4, 3, 2, 1]));
console.log(quickSort([1, 2, 3, 4, 5]));
console.log(quickSort([8, 5, 9, 11, 6]));
console.log(quickSort([4, 1, 6, 7, 3]));
console.log(quickSort([4, 8, 6, 5, 9, 2, 1, 3]));
console.log(quickSort([8, 5, 9, 4, 5, 8]));
