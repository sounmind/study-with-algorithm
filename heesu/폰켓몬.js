function solution(nums) {
  const arr = [...new Set(nums)];
  const max = nums.length / 2;

  return max > arr.length ? arr.length : max;
}
