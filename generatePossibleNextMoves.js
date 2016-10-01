/**
Flip Game

You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

Write a function to compute all possible states of the string after one valid move.

For example, given s = "++++", after one move, it may become one of the following states:

[
  "--++",
  "+--+",
  "++--"
]
If there is no valid move, return an empty list [].
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function(s) {
  const arr = s.split('');
  return arr.reduce((memo, char, index) => {
    if (char === '+' && arr[index + 1] === '+') {
      memo.push(`${s.slice(0, index)}--${s.slice(index + 2)}`);
    }
    return memo;
  }, []);
};

console.log(generatePossibleNextMoves('++++'));
