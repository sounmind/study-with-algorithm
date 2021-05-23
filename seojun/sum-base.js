/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  const convertNum = n.toString(k);
  const convertNumArr = convertNum.split("");

  return convertNumArr.reduce((a, b) => +a + +b);
};
