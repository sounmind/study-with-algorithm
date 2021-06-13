var search = function(nums, target) {
  let min = 0;
  let max = nums.length - 1;

  while(min <= max){
    let middle = Math.floor((min + max) / 2);
    if(nums[middle] < target){
      min = middle + 1;
    } else if(nums[middle] > target) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};

search([1, 2, 3, 4, 5, 6], 4)//3
search([1, 2, 3, 4, 5, 6], 6)//5
search([1, 2, 3, 4, 5, 6], 11)//-1
search([-1,0,3,5,9,12], 9)
