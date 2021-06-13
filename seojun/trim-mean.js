/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  const smallLarge = Math.floor(arr.length * 0.05);
  const trimedArr = arr.sort((a, b) => a - b).slice(smallLarge, -smallLarge);

  return trimedArr.reduce((a, b) => a + b) / trimedArr.length;
};
