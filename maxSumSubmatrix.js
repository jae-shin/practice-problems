/**
  Given a non-empty 2D matrix matrix and an integer k, find the max sum of a rectangle in the matrix such that its sum is no larger than k.

  Example:
  Given matrix = [
    [1,  0, 1],
    [0, -2, 3]
  ]
  k = 2
  The answer is 2. Because the sum of rectangle [[0, 1], [-2, 3]] is 2 and 2 is the max number no larger than k (k = 2).

  Note:
  The rectangle inside the matrix must have an area > 0.
  What if the number of rows is much larger than the number of columns?

 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
  // Brute force, compute all rectangle sums and keep track of the maximum no larger than k
  let numRows = matrix.length;
  let numCols = matrix[0].length;

  // keep track of max so far
  let max = -Infinity;

  // memoize previous computed rectangles
  // key: JSON.stringify([upperleft r, upperleft c, lowerright r, lowerright c])
  // value: sum of rectangle
  let storage = {};

  let lrR = numRows - 1, lrC = numCols - 1;
  let ulR = lrR, ulC = lrC;

  while (true) {
    recSum =
      matrix[ulR][ulC]
      + (storage[JSON.stringify([ulR + 1, ulC, lrR, lrC])] ? storage[JSON.stringify([ulR + 1, ulC, lrR, lrC])] : 0)
      + (storage[JSON.stringify([ulR, ulC + 1, lrR, lrC])] ? storage[JSON.stringify([ulR, ulC + 1, lrR, lrC])] : 0)
      - (storage[JSON.stringify([ulR + 1, ulC + 1, lrR, lrC])] ? storage[JSON.stringify([ulR + 1, ulC + 1, lrR, lrC])] : 0);

    if (recSum === k) {
      return k;
    }

    if (recSum > max && recSum <= k) {
      max = recSum;
    }

    storage[JSON.stringify([ulR, ulC, lrR, lrC])] = recSum;

    ulC--;
    if (ulC === -1) {
      ulR--;
      ulC = lrC - 1;
    }

    // if (ulR === -1) {
    //   lrC--;
    //   if (lrC === -1) {
    //     lrR--;
    //     lrC === numCols - 1;
    //   }
    //   if (lrR === -1) {
    //     return max;
    //   }
    //   ulR = lrR;
    //   ulC = lrC;
    // }
  }
  console.log('Storage', storage);
};

// Testing

console.log(
  maxSumSubmatrix(
    [
      [1, 0, 1],
      [0, -2, 3]
    ],
    2
  )
);








