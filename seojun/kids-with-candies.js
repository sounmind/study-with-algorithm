/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  return candies.map(candy => {
    const distributed = candy + extraCandies;
    return Math.max(distributed, ...candies) === distributed;
  });
};
