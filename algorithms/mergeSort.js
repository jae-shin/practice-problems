/**
 * Merge Sort
 *
 * Time Complexity:
 *   Average: O(n log(n))
 *   Best Case: O(n log(n))
 *   Worst Case: O(n log(n))
 *
 * Space Complexity: for 2nd implementation -> O(n) for the helper array
 *
 */

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let middleIx = Math.floor(arr.length / 2);

  return merge(mergeSort(arr.slice(0, middleIx)), mergeSort(arr.slice(middleIx)));
}

function merge(leftArr, rightArr) {
  let result = [];
  let leftIx = 0, rightIx = 0;

  while (leftIx < leftArr.length && rightIx < rightArr.length) {
    if (leftArr[leftIx] <= rightArr[rightIx]) {
      result.push(leftArr[leftIx]);
      leftIx++;
    } else {
      result.push(rightArr[rightIx]);
      rightIx++;
    }
  }

  if (leftIx === leftArr.length) {
    result = result.concat(rightArr.slice(rightIx));
  } else {
    result = result.concat(leftArr.slice(leftIx));
  }

  return result;
}



// Modify original array and only use one helper array
function mergeSort2(arr, helper = [], low = 0, high = arr.length - 1) {
  let middle;
  if (low < high) {
    middle = Math.floor((low + high) / 2);
    mergeSort2(arr, helper, low, middle);
    mergeSort2(arr, helper, middle + 1, high);
    merge2(arr, helper, low, middle, high);
  }
}

function merge2(arr, helper, low, middle, high) {
  for (let i = low; i <= high; i++) {
    helper[i] = arr[i];
  }

  let helperLeft = low;
  let helperRight = middle + 1;
  let currentIx = low;

  while (helperLeft <= middle && helperRight <= high) {
    if (helper[helperLeft] <= helper[helperRight]) {
      arr[currentIx] = helper[helperLeft];
      helperLeft++;
    } else {
      arr[currentIx] = helper[helperRight];
      helperRight++;
    }
    currentIx++;
  }

  // add any remaining left half elements to original array
  // (any remaining on the right half are already in the correct place of the
  // original array so no need to add)
  while (helperLeft <= middle) {
    arr[currentIx] = helper[helperLeft];
    helperLeft++;
    currentIx++;
  }

  console.log(arr, helper);
}


// Testing
// console.log(merge([4], [6]));
// console.log(merge([4], [1]));
// console.log(merge([4, 5, 6, 8], [1, 2, 3, 7]));
// console.log(mergeSort([1]));
// console.log(mergeSort([4, 9]));
// console.log(mergeSort([9, 4]));
// console.log(mergeSort([6, 5, 4, 3, 2, 1]));
// console.log(mergeSort([4, 6, 5, 8, 7, 1, 2, 3]));

const arr = [4, 6, 5, 8, 7, 1, 2, 3];
mergeSort2(arr);
console.log('arr after sorting is', arr);