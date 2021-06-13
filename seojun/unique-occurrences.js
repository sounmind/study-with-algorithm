/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const occurrenceList = {};

  arr.forEach(num => {
    !occurrenceList[num] ? occurrenceList[num] = 1 : occurrenceList[num]++;
  });

  const occurrence = new Set(Object.values(occurrenceList));
  const values = new Set(arr);

  if (occurrence.size === values.size) return true;
  return false;
};
