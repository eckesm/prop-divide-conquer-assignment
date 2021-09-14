function sortedFrequency(arr, num) {
	let firstIdx;
	let lastIdx;
	let leftIdx;
	let rightIdx;

	if (arr[0] === num) {
		firstIdx = 0;
	}
	else {
		leftIdx = 0;
		rightIdx = arr.length - 1;
		while (firstIdx === undefined) {
			let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

			if (arr[middleIdx] < num && arr[middleIdx + 1] === num) {
				firstIdx = middleIdx + 1;
			}
			else if (arr[middleIdx] >= num) {
				rightIdx = middleIdx;
			}
			else {
				leftIdx = middleIdx + 1;
			}

			if (leftIdx === rightIdx) return -1;
		}
	}

	if (arr[arr.length - 1] === num) {
		lastIdx = arr.length - 1;
	}
	else {
		leftIdx = 0;
		rightIdx = arr.length - 1;
		while (lastIdx === undefined && leftIdx !== rightIdx) {
			let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

			if (arr[middleIdx] === num && arr[middleIdx + 1] > num) {
				lastIdx = middleIdx;
			}
			else if (arr[middleIdx] <= num) {
				leftIdx = middleIdx;
			}
			else {
				rightIdx = middleIdx - 1;
			}

			if (leftIdx === rightIdx) return -1;
		}
	}

	return lastIdx - firstIdx + 1;
}

module.exports = sortedFrequency;
