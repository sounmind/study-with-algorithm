/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let result = 0;
  let small = prices[0];
  
  for (let i = 1; i < prices.length; i++) {
      if (prices[i] < small) {
          small = prices[i]

      } else {
          if (prices[i] - small > result) {
          result = prices[i] - small
      }
      }
  }
  return result;
};