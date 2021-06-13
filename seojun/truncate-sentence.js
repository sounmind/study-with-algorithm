/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  const split = s.split(" ");
  const truncate = split.slice(0, k);

  return truncate.join(" ");
};
