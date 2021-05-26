/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
  let result;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let addNum = nums[i] + nums[j] + nums[k];
        if (result === undefined) {
          result = addNum;
        }

        if (Math.abs(target - addNum) < Math.abs(target - result)) {
          result = addNum;
        }
      }
    }
  }
  return result;
};