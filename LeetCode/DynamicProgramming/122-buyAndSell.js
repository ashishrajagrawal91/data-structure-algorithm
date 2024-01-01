/*
 *122. Best Time to Buy and Sell Stock II
 *
 *You are given an integer array prices where prices[i] is the price of
 *a given stock on the ith day.
 *On each day, you may decide to buy and/or sell the stock.
 *You can only hold at most one share of the stock at any time.
 *However, you can buy it then immediately sell it on the same day.
 *Find and return the maximum profit you can achieve.
 *
 *Example 1:
 *Input: prices = [7,1,5,3,6,4]
 *Output: 7
 *Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5),
 *profit = 5-1 = 4.
 *Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 *Total profit is 4 + 3 = 7.
 *
 *Example 2:
 *Input: prices = [1,2,3,4,5]
 *Output: 4
 *Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
 *Total profit is 4.
 *
 *Example 3:
 *Input: prices = [7,6,4,3,1]
 *Output: 0
 *Explanation: There is no way to make a positive profit,
 *so we never buy the stock to achieve the maximum profit of 0.
 *
 *Constraints:
 *1 <= prices.length <= 3 * 104
 *0 <= prices[i] <= 104
 */

const solveRecusrion = (prices, index, buy) => {
	if (index >= prices.length) {
		return 0;
	}

	let profit = 0;

	if (buy) {
		let take = -prices[index] + solveRecusrion(prices, index + 1, 0);
		let nottake = 0 + solveRecusrion(prices, index + 1, 1);

		profit = Math.max(take, nottake);
	} else {
		let take = prices[index] + solveRecusrion(prices, index + 1, 1);
		let nottake = 0 + solveRecusrion(prices, index + 1, 0);

		profit = Math.max(take, nottake);
	}
	return profit;
};

/*
 * Time complexity O(n)
 * Space complexity O(n)
 */
const solveTopToBottom = (prices, index, buy, dp) => {
	if (index >= prices.length) {
		return 0;
	}

	if (dp[index][buy] !== -1) {
		return dp[index][buy];
	}

	let profit = 0;

	if (buy) {
		let take = -prices[index] + solveTopToBottom(prices, index + 1, 0, dp);
		let nottake = 0 + solveTopToBottom(prices, index + 1, 1, dp);

		profit = Math.max(take, nottake);
	} else {
		let take = prices[index] + solveTopToBottom(prices, index + 1, 1, dp);
		let nottake = 0 + solveTopToBottom(prices, index + 1, 0, dp);

		profit = Math.max(take, nottake);
	}
	dp[index][buy] = profit;
	return dp[index][buy];
};

/*
 * Time complexity O(n)
 * Space complexity O(1)
 */
const solveBottomToTop = (prices) => {
	let n = prices.length;
	let current = Array.from({"length": 2}).fill(0);
	let next = Array.from({"length": 2}).fill(0);

	for (let index = n - 1; index >= 0; index--) {
		for (let buy = 0; buy <= 1; buy++) {
			let profit = 0;

			if (buy) {
				let take = -prices[index] + next[0];
				let nottake = next[1];

				profit = Math.max(take, nottake);
			} else {
				let take = prices[index] + next[1];
				let nottake = next[0];

				profit = Math.max(take, nottake);
			}
			current[buy] = profit;
		}
		next = current;
	}
	return next[1];
};

const maxProfit = (prices) => {
	console.log(solveRecusrion(prices, 0, 1));

	console.log(solveTopToBottom(
		prices,
		0,
		1,
		Array.from({"length": prices.length}).map(() => Array.from({ "length": 2}).fill(-1)),
	));

	console.log(solveBottomToTop(prices));
};

maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([1, 2, 3, 4, 5]);
maxProfit([7, 6, 4, 3, 1]);

