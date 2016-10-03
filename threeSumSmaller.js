/**
 * Given an array of n integers, find the number of triplets, for which
 * the sum is less than the target
 *
 * ex) for nums = [-2, 0, 1, 3] and target = 2, the output = 2
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
  nums.sort((a, b) => a - b);

  let cnt = 0;
  let second, third, twoSum;

  for (let first = 0; first <= nums.length - 3; first++) {
    second = first + 1;
    third = nums.length - 1;
    twoSum = target - nums[first];

    while (second < third) {
      while (third > second && nums[second] + nums[third] >= twoSum) {
        third -= 1;
      }
      cnt += third - second;
      second += 1;
    }
  }

  return cnt;
};

// Testing
console.log(threeSumSmaller([-2, 0, 1, 3], 2));
