/*
 * Category: Recursion, Decision tree
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * @param {number} n
 * @return {string[]}
 */
var generateParentheses = function(n) {
  const result = [];
  const buildStr = function(left, right, str) {
    if (left === n) {
      if (right === n) {
        result.push(str);
        return;
      } else if (right < n) {
        buildStr(left, right + 1, str + ')');
      }
    } else if (left < n) {
      if (left > right) { 
        buildStr(left + 1, right, str + '(');
        buildStr(left, right + 1, str + ')');
      } else {
        buildStr(left + 1, right, str + '(');
      }
    }
  };
  buildStr(0, 0, '');
  return result;
};


// Testing
// console.log(generateParentheses(0));
// console.log(generateParentheses(1));
// console.log(generateParentheses(2));
console.log(generateParentheses(3));
// console.log(generateParentheses(4));
// console.log(generateParentheses(5));
/*
  [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
  ]
 */