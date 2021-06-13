/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const xElements = nums.slice(0, n);
  const yElements = nums.slice(n);
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(xElements[i]);
    result.push(yElements[i]);
  }

  return result;
};
