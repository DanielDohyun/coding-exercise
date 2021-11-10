// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

// ex.Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // base condition
  if (prices == null || prices.length < 1) {
    return 0;
  }

  let profit = 0;

  //looping thr the prices arr
  for (let i = 0; i < prices.length; i++) {
    //buying have to happen prior selling
    //in order to make profit, need to sell the stock at higher price
    //price next day has to be higher than price of yesterday
    if (prices[i - 1] < prices[i]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
};
