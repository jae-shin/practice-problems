/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */
 
var longestRun = function(string) {
 	// your code here!
  var re = /(.)\1*/g;
  var arr = string.match(re);
  var maxLength = 0;
  var maxIndex = 0;
  var arrIndex = 0;

  // make sure arr is not null
  if (arr) {
    arr.forEach(function(item, index){
      if (item.length > maxLength) {
        arrIndex = index;
        maxLength = item.length; 
      }
    })

    maxIndex = arr.slice(0, arrIndex).reduce(function(accum, item){
      accum += item.length;
      return accum;
    }, 0)

    return [maxIndex, maxIndex + maxLength - 1];
  }
  // if arr is null, string is empty
  return [0, 0];
};

// Test cases
console.log(longestRun("sdofij0 r72498puijffkfjdlkfjiowje];[\'\(&^$#"));
console.log("Should equal: [18,19]");
console.log(longestRun("abbbcc"));
console.log("Should equal: [1,3]");
console.log(longestRun(""));
console.log("Should equal: [0,0]");





