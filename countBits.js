/**
 * Counting Bits

Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example:
For num = 5 you should return [0,1,1,2,1,2].

Follow up:

It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
 */

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    if (typeof num !== 'number' || num < 0 || num % 1 !== 0) {
        return null;
    }
    const result = [0];
    const pow2 = {0: 1};
    let pow = 0, curr = 1;
    while (curr <= num) {
        if (curr === pow2[pow]) {
            result[curr] = 1;
            pow++;
            pow2[pow] = pow2[pow - 1] * 2;
        } else {
            result[curr] = 1 + result[curr - pow2[pow - 1]];
        }
        curr++;
    }

    return result;
};