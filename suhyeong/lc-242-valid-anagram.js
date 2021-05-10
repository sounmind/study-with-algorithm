/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  sArray = Array.from(s);
  tArray = Array.from(t);

  sArray.sort();
  tArray.sort();

  sortedS = sArray.join("");
  sortedT = tArray.join("");

  for (let i = 0; i < Math.max(sortedS.length, sortedT.length); i++) {
    if (sortedS[i] !== sortedT[i]) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
