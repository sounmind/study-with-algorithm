var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    } 
  }
  
  return nums.length;
};


removeDuplicates([1,1,2])
//Output: 2, nums = [1,2])

removeDuplicates([0,0,1,1,1,2,2,3,3,4])
//Output: 5, nums = [0,1,2,3,4]

removeDuplicates([1,1,1,1])
//1 [1]
