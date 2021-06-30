/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//내코드
var threeSumClosest = function (nums, target) {
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

 //다른사람코드 2pointer 기법
//  var threeSumClosest = function(nums, target) {
//   nums.sort((a,b)=>a-b);
//   let min = Infinity;
//   for (let i = 0; i < nums.length; i ++) {
//       let left = i + 1,
//           right = nums.length -1;
//       while (left < right) {
//           let sum = nums[i] + nums[left] + nums[right];
//           if (Math.abs(sum - target) < Math.abs(min - target)) min = sum;
//           if (sum > target) {
//               right --
//           } else {
//               left ++
//           }
//       }
//   }
//   return min;
// };