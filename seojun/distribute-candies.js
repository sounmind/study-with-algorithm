/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const candyTypes = new Set(candyType);

  return Math.min(candyTypes.size, candyType.length / 2);
};
