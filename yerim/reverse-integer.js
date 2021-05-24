/**
 * @param {number} x
 * @return {number}
 */

 var reverse = function(x) {
  let num = x.toString();
  let minNum = -2147483648;
  let maxNum = 2147483647;
  let minus;

  if (isNaN(num[0])) {
    minus = num[0];
    num = num.slice(1);
  }

  num = num.split("").reverse().join("");
  num = +num;

  if ( num < minNum || num > maxNum) {
    return 0;
  }

  if (minus) {
    return parseInt(minus + num);
  } else {
    return parseInt(num);
  }
};

reverse(1534236469)