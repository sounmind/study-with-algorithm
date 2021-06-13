/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  const targetArray = [];

  for (let i = 0; i < index.length; i++) {
    targetArray.splice(index[i], 0, nums[i]);
  }

  return targetArray;
};
