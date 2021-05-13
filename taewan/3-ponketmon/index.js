function solution(nums) {
  let ponketmonArray = [nums[0]];
  let idx = 0;

  for(let i = 0; i < nums.length; i++) {
    if (!ponketmonArray.includes(nums[i])) {
      idx++;
      ponketmonArray.push(nums[i]);
    }

    if (nums.length / 2 === ponketmonArray.length) {
      break;
    }
  }

  return ponketmonArray.length;
}

let a = 0;
a = solution([3,3,3,2,2,2]);
console.log(a);