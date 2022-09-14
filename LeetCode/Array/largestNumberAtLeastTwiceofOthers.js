/*
 *You are given an integer array nums where the largest integer is unique.
 *Determine whether the largest element in the array is at least twice as
 *much as every other number in the array. If it is, return the index of the largest element,
 *or return -1 otherwise.
 */

const dominantIndex = (nums) => {
	let max = -1;
	let secondMax = -1;
	let index = -1;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > max) {
			secondMax = max;
			max = nums[i];
			index = i;
		} else if (nums[i] > secondMax) {
			secondMax = nums[i];
		}
	}
	return max >= 2 * secondMax ? index : -1;
};

// Output should be 1 index
console.log(dominantIndex([3, 6, 1, 0]));
