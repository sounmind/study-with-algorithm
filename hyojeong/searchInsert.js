var searchInsert = function(nums, target) {
    // for (let i = 0; i < nums.length; i++) {
    //   if (nums[i] === target || target < nums[i]) {
    //     return i
    //   }
    // }
    //  return nums.length;

// sample 56 ms submission 
  const n = nums.length;
  let left = 0, right = n - 1, mid;
  let f = 0;
  while(left <= right){
    mid = left + Math.floor((right - left)/2);
    if(nums[mid] == target){
      return mid;
    } else if( nums[mid] < target){
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  if(nums[mid] < target){
    return mid + 1;
  } else {
    return mid;
  }

  return mid;
};

  searchInsert([1,3,5,6], 5)
   //Output: 2
  searchInsert([1,3,5,6], 2)
   //Output: 1
  searchInsert([1,3,5,6], 7)
   //출력 : 4
  searchInsert([1,3,5,6], 0)
  