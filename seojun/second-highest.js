/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  const digits = s.replace(/\D/g, "").split("");
  const uniqueDigits = digits.filter((digit, index, self) => self.indexOf(digit) === index);
  const sorted = uniqueDigits.sort((a, b) => b - a);

  if (uniqueDigits.length === 1 || uniqueDigits.length === 0) return -1;

  return +sorted[1];
};
