function countZeroes(arr) {
	if (arr[0] === 0) return arr.length;
	if (arr[arr.length - 1] === 1) return 0;

	let leftIdx = 0;
	let rightIdx = arr.length - 1;

	while (leftIdx <= rightIdx) {
		let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

		if (arr[middleIdx] === 1 && arr[middleIdx + 1] === 0) {
			return arr.length - middleIdx - 1;
		}
		else if (arr[middleIdx + 1] === 1) {
			leftIdx = middleIdx + 1;
		}
		else {
			rightIdx = middleIdx;
		}
	}
}

module.exports = countZeroes;
