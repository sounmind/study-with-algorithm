/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const info = {
    "type": 0,
    "color": 1,
    "name": 2,
  };

  const ruleIndex = info[ruleKey];
  let count = 0;

  items.forEach(value => {
    if (value[ruleIndex] === ruleValue) {
      count++;
    }
  });

  return count;
};
