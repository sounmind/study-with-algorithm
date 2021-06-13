var numIdenticalPairs = function(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          result.push([i, j])
        }
      } 
    }
    
    return result.length;
  };
  
  numIdenticalPairs([1,2,3,1,1,3])
  //Output: 4
  //Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
  numIdenticalPairs([1,1,1,1])
  //6
  