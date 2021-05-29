var intersect = function(nums1, nums2) { 
    let result = {};
    let resultArr = [];
    
    for (let num of nums1) {
      if (!result[num]) result[num] = 0
      result[num] ++;
    }
    
    for (let num of nums2) {
      if (result[num]) {
        resultArr.push(num)
        result[num] --;
      }
    }
    
    return resultArr
  };
  
  // var intersect = function(nums1, nums2) {
  //   let num1Obj = {};
  //   for (let num of nums1) {
  //     num1Obj[num] = num1Obj[num] ? num1Obj[num] + 1 : 1; 
  //   }
    
  //   let resultArr = [];
  //   for (let num of nums2) {
  //     if (num1Obj[num]) {
  //       resultArr.push(num)
  //       num1Obj[num]--;  
  //     }
  //   }
    
  //   return resultArr;
  // }
  
  intersect([1,2,2,1], [2,2])
  //Output: [2,2]
  
  intersect([4,9,5], [9,4,9,8,4])
  //Output: [4,9]
