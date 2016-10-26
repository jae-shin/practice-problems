/**

Longest Substring with At Most K Distinct Characters

Given a string, find the length of the longest substring T that contains at most k distinct characters.

For example, Given s = “eceba” and k = 2,

T is "ece" which its length is 3.

 */

function lengthOfLongestSubstring (str, k) {
  if (str === '' || k === 0) {
    return 0;
  }

  const hash = {};
  let startIx = 0;
  let endIx = 0;
  let maxLength = 0;

  const advanceEndIx = () => {
    while (endIx < str.length && (Object.keys(hash).length < k || hash[str[endIx]])) {
      hash[str[endIx]] = hash[str[endIx]] ? hash[str[endIx]] + 1 : 1;
      endIx++;
    }
  };

  const advanceStartIx = () => {
    let firstCharCnt = hash[str[startIx]];
    while (firstCharCnt > 1) {
      hash[str[startIx]] -= 1;
      startIx++;
      firstCharCnt = hash[str[startIx]];
    }
    delete hash[str[startIx]];
    startIx++;
  };

  const updateMaxLength = () => {
    maxLength = Math.max(maxLength, endIx - startIx);
  };

  advanceEndIx();
  updateMaxLength();

  while (endIx < str.length) {
    advanceStartIx();
    advanceEndIx();
    updateMaxLength();
  }

  return maxLength;
}



// Testing
console.assert(lengthOfLongestSubstring('', 4) === 0);
console.assert(lengthOfLongestSubstring('', 0) === 0);
console.assert(lengthOfLongestSubstring('hello', 0) === 0);
console.assert(lengthOfLongestSubstring('abc', 1) === 1);
console.assert(lengthOfLongestSubstring('aaabbcc', 1) === 3);
console.assert(lengthOfLongestSubstring('aabbbbbbcc', 1) === 6);
console.assert(lengthOfLongestSubstring('abccccc', 1) === 5);
console.assert(lengthOfLongestSubstring('aabcc', 3) === 5);
console.assert(lengthOfLongestSubstring('bacc', 2) === 3);
