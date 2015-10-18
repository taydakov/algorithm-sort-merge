function mergeSort(input) {
	// validation
	if (!input || input.length <= 1) {
		return input;
	}
	var res = [];
	// divide
	var len = input.length;
	var centerId = Math.floor(len / 2);
	var half1 = mergeSort(input.slice(0, centerId));
	var half2 = mergeSort(input.slice(centerId));
	var len1 = half1.length;
	var len2 = half2.length;
	var i1 = 0;
	var i2 = 0;
	for (var i = 0; i < len; ++i) {
		if (i1 < len1 && (i2 >= len2 || half1[i1] <= half2[i2])) {
			res.push(half1[i1]);
			i1 += 1;
		} else {
			res.push(half2[i2]);
			i2 += 1;
		}
	}
	return res;
}

module.exports = mergeSort;