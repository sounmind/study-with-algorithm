/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  return (BigInt(num.join(',').split(',').join('')) + BigInt(k)).toString().split('');
};
