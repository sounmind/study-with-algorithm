/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
 var canBeEqual = function(target, arr) {
  let targetObj = {};
  let arrObj = {};

  for (let key of target) {
    if (!targetObj[key]) {
      targetObj[key] = 1;
    } else {
      targetObj[key]++;
    }
  }

  for (let key of arr) {
    if (!arrObj[key]) {
      arrObj[key] = 1;
    } else {
      arrObj[key]++;
    }
  }

  if (JSON.stringify(targetObj) === JSON.stringify(arrObj)) {
    return true;
  } else {
    return false;
  }
};