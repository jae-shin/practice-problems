/*
Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

You may assume k is always valid, 1 ≤ k ≤ n^2.
*/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function kthSmallest(matrix, k) {
  if (!isValidMatrix(matrix) || k < 1 || k > matrix.length * matrix.length) {
    return null;
  }

  const size = matrix.length;
  let sorted = matrix[0].slice();
  let insertPos = 0;
  let rowIx = 1;

  while (insertPos < k - 1 && rowIx < size) {
    insertPos = merge(sorted, rowIx, matrix, insertPos);
    rowIx++;
  }

  return sorted[k - 1];
}

function merge(sorted, rowIx, matrix, insertPos) {
  let copy = sorted.slice();
  const size = matrix.length;
  const sortedLength = sorted.length;
  let row = matrix[rowIx];
  let ix1 = insertPos;
  let ix2 = 0;
  let currPos = insertPos;
  let newInsertPos;

  while (ix1 < sortedLength && ix2 < size) {
    if (copy[ix1] <= row[ix2]) {
      sorted[currPos] = copy[ix1];
      ix1++;
    } else {
      sorted[currPos] = row[ix2];
      if (ix2 === 0) {
        newInsertPos = currPos;
      }
      ix2++;
    }
    currPos++;
  }

  if (ix1 === sortedLength) {
    while (ix2 < size) {
      sorted[currPos] = row[ix2];
      if (ix2 === 0) {
        newInsertPos = currPos;
      }
      ix2++;
      currPos++;
    }
  }

  return newInsertPos;
}

function isValidMatrix(matrix) {
  // TODO: Test if sorted properly

  if (matrix.length === 0 || matrix[0].length === 0 || matrix.length !== matrix[0].length) {
    return false;
  }

  let numCols = matrix[0].length;
  for (let r = 0; r < matrix.length; r++) {
    if (matrix[r].length !== numCols) {
      return false;
    }
  }

  return true;
}

// Tests
console.assert(kthSmallest([], 2) === null);
console.assert(kthSmallest([[]], 2) === null);
console.assert(kthSmallest([[1]], 4) === null);
console.assert(kthSmallest([[1]], 1) === 1);
console.assert(kthSmallest([[1, 4], [2, 5]], 2) === 2);
console.assert(kthSmallest([[1, 4, 9], [3, 5, 11], [4, 6, 12]], 7) === 9);
console.assert(kthSmallest([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8) === 13);

