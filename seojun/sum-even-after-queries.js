/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (nums, queries) {
  const result = [];
  const afterQueries = [...nums];

  for (const query of queries) {
    const val = query[0];
    const index = query[1];

    afterQueries.splice(index, 1, afterQueries[index] + val);

    const even = afterQueries.filter(num => num % 2 === 0);
    const sum = even.length > 1 ? even.reduce((a, b) => a + b) : even;

    result.push(sum);
  }

  return result;
};
