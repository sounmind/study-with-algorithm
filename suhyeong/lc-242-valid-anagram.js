/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// How to make it fast ?
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
  const sObj = {};
  const tObj = {};
  let longerObj;
  let shorterObj;

  if (s.length < t.length) {
    [longerObj, shorterObj] = [tObj, sObj];
  } else {
    [longerObj, shorterObj] = [sObj, tObj];
  }

  countLetters(s, sObj);
  countLetters(t, tObj);

  for (const key in longerObj) {
    if (longerObj.hasOwnProperty(key)) {
      if (longerObj[key] !== shorterObj[key]) {
        return false;
      }
    }
  }
  return true;
};

// console.log(isAnagram("anagram", "nagaram")); // same length
// console.log(isAnagram("rat", "cat")); // same length
console.log(isAnagram("a", "ab")); // different length
