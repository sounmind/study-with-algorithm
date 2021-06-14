/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const squaredNums = nums.map(num => Math.pow(num, 2));

  return squaredNums.sort((a, b) => a - b);
};
