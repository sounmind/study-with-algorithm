/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const countValues = {};

  nums.forEach(num => {
    if (!countValues[num]) {
      countValues[num] = 1;
    } else {
      countValues[num]++;
    }
  });

  const uniqueValue = [];

  for (const value in countValues) {
    if (countValues[value] === 1) {
      uniqueValue.push(+value);
    }
  }

  return uniqueValue.length === 0 ? 0 : uniqueValue.reduce((a, b) => a + b);
};
