/*
 *1207. Unique Number of Occurrences
 *Given an array of integers arr, return true if the number of occurrences
 *of each value in the array is unique or false otherwise.
 *
 *Example 1:
 *Input: arr = [1,2,2,1,1,3]
 *Output: true
 *Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1.
 *No two values have the same number of occurrences.
 *
 *Example 2:
 *Input: arr = [1,2]
 *Output: false
 *
 *Example 3:
 *Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
 *Output: true
 *
 *Constraints:
 *1 <= arr.length <= 1000
 *-1000 <= arr[i] <= 1000
 */

const uniqueOccurrences = (arr) => {
	let occr = {};

	for (let i = 0; i < arr.length; i++) {
		if (occr[arr[i]]) {
			occr[arr[i]] = occr[arr[i]] + 1;
		} else {
			occr[arr[i]] = 1;
		}
	}
	let occrSet = new Set(Object.values(occr));

	return occrSet.size === Object.keys(occr).length;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
