function findRotatedIndex(arr, int) {
	if (arr[0] === int) return 0;
	if (arr[arr.length - 1] === int) return arr.length - 1;

	const maxPos = findMaxPos(arr);
	console.log('maxPos', maxPos);
	if (arr[maxPos] === int) return maxPos;

	if (int > arr[0] && int < arr[maxPos]) {
		return binarySearch(arr, int, 0, maxPos);
	}
	else {
		return binarySearch(arr, int, maxPos + 1, arr.length - 1);
	}
}

function binarySearch(arr, int, leftIdx, rightIdx) {
	while (leftIdx <= rightIdx) {
		let midIdx = Math.floor((leftIdx + rightIdx) / 2);
		console.log(leftIdx, midIdx, rightIdx);
		if (arr[midIdx] === int) {
			return midIdx;
		}
		else if (arr[midIdx] < int) {
			leftIdx = midIdx + 1;
		}
		else {
			rightIdx = midIdx - 1;
		}
	}
	return -1;
}

function findMaxPos(arr) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	while (leftIdx <= rightIdx) {
		let midIdx = Math.floor((rightIdx + leftIdx) / 2);
		if (arr[midIdx] > arr[midIdx + 1]) return midIdx;
		else if (arr[leftIdx] <= arr[midIdx]) {
			leftIdx = midIdx + 1;
		}
		else {
			rightIdx = midIdx - 1;
		}
	}
}

module.exports = findRotatedIndex;
