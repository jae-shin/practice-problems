/**
Maximum Subarray

Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!Array.isArray(nums)) {
        return null;
    }
    let maxStart = 0;
    let maxEnd = 0;
    let currStart = 0;
    let sum = 0, maxSum = -Infinity;
    for (let next = 0; next < nums.length; next++) {
        sum += nums[next];
        if (sum > maxSum) {
            maxSum = sum;
            maxStart = currStart;
            maxEnd = next;
        }
        if (sum < 0) {
            sum = 0;
            currStart = next + 1;
        }
    }

    return {maxSum, maxSubArray: nums.slice(maxStart, maxEnd + 1)};
};

// Test
let nums;
nums = [];
console.log(maxSubArray(nums));
nums = [-2];
console.log(maxSubArray(nums));
nums = [4];
console.log(maxSubArray(nums));
nums = [-2, 1, -3, 4];
console.log(maxSubArray(nums));
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
