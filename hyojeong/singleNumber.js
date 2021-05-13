var singleNumber = function(nums) {
  let countNum = {};
  for (let num of nums) {
    if (!countNum[num]) {
      countNum[num] = 1;
    } else {
      countNum[num]++;
    }
  } 
   
  const resultArray= [];
  for (let key in countNum) {
    if (countNum[key] === 1) {
      resultArray.push(key);
    }
  }
  
  const result = resultArray.map(item => parseInt(item));
  return result;
};

singleNumber([2,2,1])
//1
singleNumber([4,1,2,1,2])
//4
