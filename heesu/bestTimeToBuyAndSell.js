/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let result = 0;
  let min = prices[0];

   for (let i = 1; i < prices.length; i++) {
     min = Math.min(prices[i], min)
     result = Math.max(result, prices[i] - min)
   }
  return result;
 };

const answer = maxProfit([7, 1, 3, 2, 6, 3, 8]);

console.log(answer);