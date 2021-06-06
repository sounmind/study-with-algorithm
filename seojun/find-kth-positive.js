/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  const setArr = new Set(arr);
  let count = 0;

  while (k) {
    count++;
    if (!setArr.has(count)) k--;
  }

  return count;
};
