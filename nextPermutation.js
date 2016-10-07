/**

Next Permutation

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // starting from the back find the first index i such that nums[i] < num[i+1]
    // find the first index j >= i+1 from the back such that num[j] > num[i]
    // swap index i and j
    // reverse array from index i + 1

    let length = nums.length;
    let currentIx = length - 2;
    let tracker;

    while (currentIx >= 0 && nums[currentIx] >= nums[currentIx + 1]) {
        currentIx--;
    }

    if (currentIx >= 0) {
        tracker = length - 1;
        while (nums[tracker] <= nums[currentIx]) {
            tracker--;
        }
        swap(nums, currentIx, tracker);
    }

    reverse(nums, currentIx + 1);
};

var swap = function(nums, currentIx, tracker) {
    [nums[currentIx], nums[tracker]] = [nums[tracker], nums[currentIx]];
};

var reverse = function(nums, index) {
    let start = index;
    let end = nums.length - 1;
    while (start < end) {
        swap(nums, start, end);
        start++;
        end--;
    }
};