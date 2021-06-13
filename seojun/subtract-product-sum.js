/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const numberArray = String(n).split("");

  const product = numberArray.reduce((a, b) => +a * +b);
  const sum = numberArray.reduce((a, b) => +a + +b);

  return product - sum;
};
