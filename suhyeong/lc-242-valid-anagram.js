/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const countLetters = function (string, object) {
  for (let i = 0; i < string.length; i++) {
    if (object[string[i]]) {
      object[string[i]] += 1;
    } else {
      object[string[i]] = 1;
    }
  }
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sObj = {};
  const tObj = {};

  countLetters(s, sObj);
  countLetters(t, tObj);

  for (const key in sObj) {
    if (sObj.hasOwnProperty(key)) {
      if (sObj[key] !== tObj[key]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram")); // same length
console.log(isAnagram("rat", "cat")); // same length
console.log(isAnagram("a", "ab")); // different length
