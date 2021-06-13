var containsDuplicate = function(nums) {
    let setNums = new Set();
    for (let i = 0; i < nums.length; i++) {
      if (setNums.has(nums[i])) {
        return true;
      } 
      setNums.add(nums[i]);
    }
    return false;
  };
  
containsDuplicate([1,2,3,1])
//true

containsDuplicate([1,2,3,4])
//false

containsDuplicate([1,1,1,3,3,4,3,2,4,2])
//true

containsDuplicate([2,14,18,22,22])
//true


// var containsDuplicate = function(nums) {
//     let count = {};
//   for (let num of nums) {
//     if (!count[num]) {
//       count[num] = 1;
//     } else {
//       count[num]++;
//     }
//   }

  
//   const result = Object.values(count)
//   for (let i = 0; i < result.length; i++){
//     if (result[i] !== 1) {
//       return true;
//     } 
//   }
//     return false;
  
// };
