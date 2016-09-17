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

  // number of times 'while' loop is executed
  let cnt = 0;

  let numRows = matrix.length;
  let numCols = matrix[0].length;

  // keep track of max so far
  let max = -Infinity;

  // memoize previous computed rectangles
  // key: JSON.stringify([upperLeft r, upperLeft c, lowerRight r, lowerRight c])
  // value: sum of rectangle
  let storage = {};

  let lowerRightRow = numRows - 1, lowerRightCol = numCols - 1;
  let upperLeftRow = lowerRightRow, upperLeftCol = lowerRightCol;

  while (true) {
    cnt++;
    console.log('upperLeftRow:', upperLeftRow, 'upperLeftCol:', upperLeftCol, 'lowerRightRow:', lowerRightRow, 'lowerRightCol:', lowerRightCol);

    recSum =
      matrix[upperLeftRow][upperLeftCol]
      + (storage[JSON.stringify([upperLeftRow + 1, upperLeftCol, lowerRightRow, lowerRightCol])] ? storage[JSON.stringify([upperLeftRow + 1, upperLeftCol, lowerRightRow, lowerRightCol])] : 0)
      + (storage[JSON.stringify([upperLeftRow, upperLeftCol + 1, lowerRightRow, lowerRightCol])] ? storage[JSON.stringify([upperLeftRow, upperLeftCol + 1, lowerRightRow, lowerRightCol])] : 0)
      - (storage[JSON.stringify([upperLeftRow + 1, upperLeftCol + 1, lowerRightRow, lowerRightCol])] ? storage[JSON.stringify([upperLeftRow + 1, upperLeftCol + 1, lowerRightRow, lowerRightCol])] : 0);

    if (recSum === k) {
      console.log('Storage', storage);
      console.log('cnt', cnt);
      return k;
    }

    if (recSum > max && recSum <= k) {
      max = recSum;
    }

    storage[JSON.stringify([upperLeftRow, upperLeftCol, lowerRightRow, lowerRightCol])] = recSum;

    upperLeftCol--;
    if (upperLeftCol === -1) {
      upperLeftRow--;
      upperLeftCol = lowerRightCol;
      if (upperLeftRow === -1) {
        lowerRightCol--;
        if (lowerRightCol === -1) {
          lowerRightRow--;
          lowerRightCol = numCols - 1;
          if (lowerRightRow === -1) {
            console.log('Storage', storage);
            console.log('cnt', cnt);
            return max;
          }
        }
        upperLeftRow = lowerRightRow;
        upperLeftCol = lowerRightCol;
      }
    }
  }
};


// Testing
// console.log('Answer is',
//   maxSumSubmatrix(
//     [
//       [1, 0, 1],
//       [0, -2, 3],
//       [4, 2, 1]
//     ],
//     15
//   )
// );

// console.log('Answer is', maxSumSubmatrix([[1], [-1], [-5]], 1));







