/*
Time complexity required: O(n) where n is the size of the input string.


"dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
dir
  subdir1
    file1.ext
    subsubdir1
  subdir2
    subsubdir2
      file2.ext
 */



/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {

// split the input at '\n'
// array = ['dir', '\tsubdir1', '\t\tfile1.ext', ...]
// depth = 0;
// path = [];
// max = 0;
// pathStr = ''
// loop through array
//   calculate depth of each item with the number of '\t' in the beginning

//   if the currDepth is less than depth
//     get rid of (depth - calculated depth) number of elements of the path array
//     update depth to currDepth

//   push item (without \t) to path
//   depth++
//   if item is a file
//     join the path array and get the length of that string
//       if length is larger than max, replace pathStr with that string

  const newlineArr = input.split('\n');
  let depth = 0;
  let currDepth;
  let path = [];
  let max = 0;
  let pathStr = '';

  newlineArr.forEach(item => {
    const tabArr = item.split('\t');
    currDepth = tabArr.length - 1;

    if (currDepth < depth) {
      // more time efficient to '.pop' (depth - currDepth) times
      // since most of the time you are only popping 1 or 2 elements at the end
      path = path.slice(0, path.length - (depth - currDepth));
      depth = currDepth;
    }

    path.push(tabArr[tabArr.length - 1]);
    depth += 1;

    if (tabArr[tabArr.length - 1].includes('.')) {
      const joinStr = path.join('/');
      if (joinStr.length > max) {
        max = joinStr.length;
        pathStr = joinStr;
      }
    }
  });

  return max;
};


// Testing
console.log(lengthLongestPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"));
console.log(lengthLongestPath("dir\n\tsubdir1\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tsubsubdir3"));





