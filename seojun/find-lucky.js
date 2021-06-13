/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const frequencyObj = {};
  const frequencyArr = [];

  arr.forEach(num => {
    if (!frequencyObj[num]) {
      frequencyObj[num] = 1;
    } else {
      frequencyObj[num]++;
    }
  });


  for (const num in frequencyObj) {
    if (+num === frequencyObj[num]) {
      frequencyArr.push(+num);
    }
  }

  return frequencyArr.length === 0 ? -1 : Math.max(...frequencyArr);
};
