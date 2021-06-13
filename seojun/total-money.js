/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  const weeks = Math.floor(n / 7);
  const lastWeek = n % 7;
  let result = [];

  for (let i = 0; i < weeks; i++) {
    const moneyInWeek = [...Array(7).keys()].map(j => j + i + 1);
    const totalInWeek = moneyInWeek.reduce((a, b) => a + b);
    result.push(totalInWeek);
  }

  if (lastWeek) {
    const lastWeekMoney = [...Array(lastWeek).keys()].map(j => j + weeks + 1);
    result = [...result, ...lastWeekMoney];
  }

  return result.reduce((a, b) => a + b);
};
