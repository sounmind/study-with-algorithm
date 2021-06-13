/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const frequencyObj = {};

  nums.forEach(num => {
    !frequencyObj[num] ? frequencyObj[num] = 1 : frequencyObj[num]++;
  });

  for (const num in frequencyObj) {
    if (frequencyObj[num] === nums.length / 2) {
      return num;
    }
  }
};
