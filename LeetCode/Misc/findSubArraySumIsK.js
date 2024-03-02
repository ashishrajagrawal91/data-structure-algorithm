/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findSubArraySum = (nums, k) => {
	if (nums.length === 1) {
		if (nums[0] === k) {
			return 1;
		}
		return 0;
	}

	let counter = 0;
	let i = 0;
	let j = 0;
	let sum = 0;

	while (j < nums.length) {
		sum = sum + nums[j];
		j++;

		while (sum > k && i < j) {
			sum = sum - nums[i];
			i++;
		}
		console.log(sum, i, j);
		if (sum === k) {
			counter++;
		}
	}
	return counter;
};

console.log(findSubArraySum([1, 3, 2, 2, 3, 1, 5, 4], 4));
console.log(findSubArraySum([-1, -1, 1], 0));
