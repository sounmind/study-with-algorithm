/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const overQuater = arr.length / 4;
  const valueCount = {};

  arr.forEach(value => {
    if (!valueCount[value]) {
      valueCount[value] = 1;
    } else {
      valueCount[value]++;
    }
  });

  for (const value in valueCount) {
    if (valueCount[value] > overQuater) {
      return +value;
    }
  }
};
