function findRotationCount(arr) {
	if (arr[0] < arr[arr.length - 1]) return 0;

	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	while (leftIdx <= rightIdx) {
		let midIdx = Math.floor((rightIdx + leftIdx) / 2);
		if (arr[midIdx] > arr[midIdx + 1]) return midIdx + 1;
		else if (arr[leftIdx] <= arr[midIdx]) {
			leftIdx = midIdx + 1;
		}
		else {
			rightIdx = midIdx - 1;
		}
	}
}

module.exports = findRotationCount;
