function findFloor(arr, val, start = 0, end = arr.length - 1) {
	if (arr[end] <= val) return arr[end];

	if (start > end) return -1;

	let mid = Math.floor((start + end) / 2);

	if (arr[mid] === val) return arr[mid];
	if (arr[mid - 1] <= val && arr[mid] > val) {
		return arr[mid - 1];
	}

	if (arr[mid] > val) {
		return findFloor(arr, val, start, mid - 1);
	}
	else {
		return findFloor(arr, val, mid + 1, end);
	}
}

module.exports = findFloor;
