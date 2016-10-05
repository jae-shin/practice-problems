/**
 * Given n boxes, find the maximum height of a stack of these boxes.
 * Condition: only boxes that are strictly smaller than the box below can be
 * placed on top. (all width, height, depth is smaller)
 */

const stackBoxes = (boxes, ordered = false, boxNum = 0, memo = [], bottom = null) => {
  // boxes = [[w, d, h], [w, d, h], [w, d, h] ... ]

  const length = boxes.length;

  // sort boxes array in first function call
  if (!ordered) {
    boxes.sort((a, b) => b[2] - a[2]);
  }

  // find the next box that can be stacked on top of the current bottom
  if (bottom) {
    while (boxNum < length && (boxes[boxNum][0] >= bottom[0] || boxes[boxNum][1] >= bottom[1] || boxes[boxNum][2] >= bottom[2])) {
      boxNum += 1;
    }
  }

  newBottom = boxes[boxNum];

  if (boxNum === length - 1) {
    return newBottom[2];
  } else if (boxNum === length) {
    return 0;
  }

  memo[boxNum] = memo[boxNum] || newBottom[2] + stackBoxes(boxes, true, boxNum + 1, memo, newBottom);

  return Math.max(
    memo[boxNum],
    stackBoxes(boxes, true, boxNum + 1, memo, bottom)
  );
};

// Testing
let boxes = [];
console.log(stackBoxes(boxes)); //
boxes = [[10, 6, 11]];
console.log(stackBoxes(boxes)); // 11
boxes = [[10, 6, 11], [2, 5, 8]];
console.log(stackBoxes(boxes)); // 19
boxes = [[3, 4, 11], [10, 6, 8], [7, 4, 11], [11, 9, 13], [7, 6, 6]]; // 24
console.log(stackBoxes(boxes)); // 24
boxes = [[3, 4, 12], [10, 6, 8], [7, 8, 11], [11, 9, 13], [2, 5, 6]]; // 30
console.log(stackBoxes(boxes)); // 24





