function solution(nums) {
  let count = 0;

  for (let a = 0; a < nums.length; a++) {
      for (let b = 1; b < nums.length; b++) {
          for (let c = 2; c < nums.length; c++) {
              if (a < b && b < c) {
                  const checkNum = nums[a] + nums[b] + nums[c];
                  let isDecimal = true;

                  for (let i = 2; i < checkNum; i++) {
                      if (checkNum % i === 0) {
                          isDecimal = false;
                      }
                  }

                  if(isDecimal) {
                       count++
                  }
              }
          }
      }
  }

  return count;
}
