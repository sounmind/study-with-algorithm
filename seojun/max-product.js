/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      maxSum = Math.max(maxSum, (nums[i] - 1) * (nums[j] - 1));
    }
  }

  return maxSum;
};
