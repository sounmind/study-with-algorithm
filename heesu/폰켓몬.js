function solution(nums) {
  const uniqNums = new Set(nums);
  const uniqLength = uniqNums.size;
  const max = Math.floor(nums.length / 2);

  if (uniqLength > max) {
    return max;
  } else {
    return uniqLength;
  }
}
