var sumOfUnique = function(nums) {
    let count = {};
    for(let num of nums) {
      if (!count[num]) count[num] = 0;
      count[num]++;
    }
    
    let arr = [];
    for(let num in count) {
      if (count[num] === 1) arr.push(num);
    }
    
  const sum = arr.map(num => parseInt(num)).reduce(function (sum, num) {
    return sum + num;
  }, 0);
  
    return sum;
  };
  
  sumOfUnique([1,2,3,2])
  //Output: 4
  
  sumOfUnique([1,2,3,2])
  //Output: 4
  
  sumOfUnique([1,2,3,4,5])
  //Output: 15
  

  // var sumOfUnique = function(nums) {
  //   let unique = new Set();
  //   let used = new Set();
    
  //   for(let num of nums) {
  //     if(!used.has(num)) {
  //       unique.add(num);     
  //       used.add(num);
  //     } else {
  //       unique.delete(num);    
  //     }  
  //   }
    
  //   if (unique.size === 0) return 0;
  
  //   const sum = Array.from(unique).reduce((sum, num) => sum + num);
    
  //   return sum;
  // };
  