/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  const wealths = [];

  accounts.forEach(account => {
    const wealth = account.reduce((a, b) => a + b);
    wealths.push(wealth);
  });

  return Math.max(...wealths);
};
