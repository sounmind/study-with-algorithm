/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  const targetNums = {};

  for (const num of target) {
    !targetNums[num]
      ? targetNums[num] = 1
      : targetNums[num]++;
  }

  for (const num of arr) {
    if (!targetNums[num]) return false;

    targetNums[num]--;
  }

  return true;
};
