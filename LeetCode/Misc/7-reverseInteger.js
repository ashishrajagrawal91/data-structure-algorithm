/*
 *7. Reverse Integer
 *Given a signed 32-bit integer x, return x with its digits reversed.
 *If reversing x causes the value to go outside the signed 32-bit integer
 *range [-2^31, 2^31 - 1], then return 0.
 *
 *Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 *
 *Example 1:
 *Input: x = 123
 *Output: 321
 *
 *Example 2:
 *Input: x = -123
 *Output: -321
 *
 *Example 3:
 *Input: x = 120
 *Output: 21
 *
 *Constraints:
 *-2^31 <= x <= 2^31 - 1
 */

let reverse = (x) => {
	let num = x;
	let ans = 0;
	let INT_MAX = Math.pow(2, 31) - 1;
	let INT_MIN = Math.pow(-2, 31);

	while (num !== 0) {
		if (ans < INT_MIN / 10 || ans > INT_MAX / 10) {
			return 0;
		}
		ans = (ans * 10) + (num % 10);
		num = parseInt(num / 10, 10);
	}

	return ans;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
