/*
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * Find the maximum profit you can achieve. You may complete as many transactions as you like
 * (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:
 * After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
 * Note: You may not engage in multiple transactions simultaneously
 * (i.e., you must sell the stock before you buy again).
 */

/*
 * Example 1:
 * Input: prices = [1,2,3,0,2]
 * Output: 3
 * Explanation: transactions = [buy, sell, cooldown, buy, sell]
 */

/*
 * Example 2:
 * Input: prices = [1]
 * Output: 0
 */

/*
 * Constraints:
 * 1 <= prices.length <= 5000
 * 0 <= prices[i] <= 1000
 */

let solveRecursion = (prices, index, buy) => {
	if (index >= prices.length) {
		return 0;
	}
	let profit = 0;

	if (buy) {
		let buyKaro = -prices[index] + solveRecursion(prices, index + 1, 0);
		let skipKaro = 0 + solveRecursion(prices, index + 1, 1);

		profit = Math.max(buyKaro, skipKaro);
	} else {
		let sellKaro = prices[index] + solveRecursion(prices, index + 2, 1);
		let skipKaro = 0 + solveRecursion(prices, index + 1, 0);

		profit = Math.max(sellKaro, skipKaro);
	}
	return profit;
};

let solveTopToBottom = (index, buy, prices, dp) => {
	if (index >= prices.length) {
		return 0;
	}

	if (dp[index][buy] !== -1) {
		return dp[index][buy];
	}

	let profit = 0;

	if (buy) {
		let buyKaro = -prices[index] + solveTopToBottom(index + 1, 0, prices, dp);
		let skipKaro = solveTopToBottom(index + 1, 1, prices, dp);

		profit = Math.max(buyKaro, skipKaro);
	} else {
		let sellKaro = prices[index] + solveTopToBottom(index + 2, 1, prices, dp);
		let skipKaro = solveTopToBottom(index + 1, 0, prices, dp);

		profit = Math.max(sellKaro, skipKaro);
	}
	dp[index][buy] = profit;
	return dp[index][buy];
};

let solveBottomToTop = (prices) => {
	let n = prices.length;
	let dp = Array.
		from({ "length": n + 2 }).
		map(() => Array.from({ "length": 2 }).fill(0));

	for (let index = n - 1; index >= 0; index--) {
		for (let buy = 0; buy <= 1; buy++) {
			let profit = 0;

			if (buy) {
				let buyKaro = -prices[index] + dp[index + 1][0];
				let skipKaro = dp[index + 1][1];

				profit = Math.max(buyKaro, skipKaro);
			} else {
				let sellKaro = prices[index] + dp[index + 2][1];
				let skipKaro = dp[index + 1][0];

				profit = Math.max(sellKaro, skipKaro);
			}
			dp[index][buy] = profit;
		}
	}
	return dp[0][1];
};

// TODO :- Space Optimization / Transaction method / Bottom Top approach
/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = (prices) => {
	let dp = Array.
		from({ "length": prices.length }).
		map(() => Array.from({ "length": 2 }).fill(-1));

	console.log(`solveRecursion `, solveRecursion(prices, 0, 1));

	console.log(`solveTopToBottom `, solveTopToBottom(0, 1, prices, dp));

	console.log(`solveBottomToTop `, solveBottomToTop(prices));
};

maxProfit([1, 2, 3, 0, 2]);
maxProfit([7, 1, 5, 3, 6, 4]);
