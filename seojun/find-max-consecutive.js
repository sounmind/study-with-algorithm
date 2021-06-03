/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let maxConsecutives = 0;

  nums.forEach(num => {
    num === 1 ? count++ : count = 0;
    maxConsecutives = Math.max(maxConsecutives, count);
  });

  return maxConsecutives;
};
