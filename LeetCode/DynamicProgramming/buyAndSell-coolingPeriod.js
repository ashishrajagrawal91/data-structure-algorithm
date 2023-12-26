let solve = (index, buy, prices, dp) => {
	if (index >= prices.length) {
		return 0;
	}

	if (dp[index][buy] !== -1) {
		return dp[index][buy];
	}

	let profit = 0;

	if (buy) {
		let buyKaro = -prices[index] + solve(index + 1, 0, prices, dp);
		let skipKaro = solve(index + 1, 1, prices, dp);

		profit = Math.max(buyKaro, skipKaro);
	} else {
		let sellKaro = prices[index] + solve(index + 2, 1, prices, dp);
		let skipKaro = solve(index + 1, 0, prices, dp);

		profit = Math.max(sellKaro, skipKaro);
	}
	dp[index][buy] = profit;
	return dp[index][buy];
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

	return solve(0, 1, prices, dp);
};
