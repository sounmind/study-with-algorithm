/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  const stringedNum = String(x);
  const reversedNum = stringedNum.split("").reverse().join("");

  if (stringedNum === reversedNum) {
    return true;
  } else {
    return false;
  }
};
