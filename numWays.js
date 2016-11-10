/**
 * Paint Fence
 *
There is a fence with n posts, each post can be painted with one of the k colors.

You have to paint all the posts such that no more than two adjacent fence posts have the same color.

Return the total number of ways you can paint the fence.

Note:
n and k are non-negative integers.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    if (n === 0 || k === 0) {
        return 0;
    }
    const same = {1: 0};
    const diff = {1: k};

    let cnt = 2;
    while (cnt <= n) {
        same[cnt] = diff[cnt - 1];
        diff[cnt] = (k - 1) * (same[cnt - 1] + diff[cnt - 1]);
        cnt += 1;
    }

    return same[n] + diff[n];
};