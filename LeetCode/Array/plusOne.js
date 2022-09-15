/*
 *You are given a large integer represented as an integer array digits,
 *where each digits[i] is the ith digit of the integer.
 *The digits are ordered from most significant to least significant in left-to-right order.
 *The large integer does not contain any leading 0's.
 *Increment the large integer by one and return the resulting array of digits.
 */

const plusOne = (digits) => {
	for (let i = digits.length - 1; i >= 0; i--) {
		let sum = digits[i] + 1;

		if (sum === 10 && typeof digits[i - 1] !== `undefined`) {
			digits[i] = 0;
		} else if (sum === 10 && typeof digits[i - 1] === `undefined`) {
			digits[i] = 0;
			return [1].concat(digits);
		} else {
			digits[i] = sum;
			break;
		}
	}
	return digits;
};

console.log(plusOne([9, 9]));
