function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)

	let max = 0;

	let array = [];

	for (leti = 0; i < A.length; i++) {
		if (A[i] > 0) {
			if (A[i] > max) {
				max = A[i];
			}

			array[A[i]] = 0;
		}
	}

	if (max < 1) {
		return1;
	}

	for (let j = 1; j < max; j++) {
		if (typeof array[j] === 'undefined') {
			return j;
		}
	}

	return max + 1;
}
