/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const frequencyObj = {};

  nums.forEach(num => {
    if (!frequencyObj[num]) {
      frequencyObj[num] = 1;
    } else {
      frequencyObj[num]++;
    }
  });

  return nums.sort((a, b) => frequencyObj[a] - frequencyObj[b] || b - a);
};
