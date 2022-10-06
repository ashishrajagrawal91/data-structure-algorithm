/*
 * Given an m x n matrix mat, return an array of all
 * the elements of the array in a diagonal order.
 */

/*
 * Input: mat = [
 * [1,2,3],
 * [4,5,6],
 * [7,8,9]
 * ]
 * Output: [1,2,4,7,5,3,6,8,9]
 */

const findDiagonalOrder = (mat) => {
	if (mat.length === 1) {
		return mat[0];
	}

	let m = mat.length;
	let n = mat[0].length;
	let r = 0;
	let c = 0;
	let result = new Array(m * n);

	for (let i = 0; i < result.length; i++) {
		result[i] = mat[r][c];
		if ((r + c) % 2 === 0) {
			if (c === n - 1) {
				r++;
			} else if (r === 0) {
				c++;
			} else {
				c++;
				r--;
			}
		} else if (r === m - 1) {
			c++;
		} else if (c === 0) {
			r++;
		} else {
			r++;
			c--;
		}
	}

	return result;
};

console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
