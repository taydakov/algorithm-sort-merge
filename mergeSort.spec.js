var assert = require('assert');

describe('mergeSort', function () {
    var mergeSort;
    beforeEach(function () {
        mergeSort = require('./mergeSort.js');
    });
    it('is a function', function () {
        console.assert(typeof mergeSort === 'function');
    });
    it('should not sort empty array', function () {
    	var input  = [];
    	var output = mergeSort(input);
    	assert.deepEqual(input, output);
    });
    it('should not sort one element array', function () {
    	var input  = [42];
    	var output = mergeSort(input);
    	assert.deepEqual(input, output);
    });
    it('should sort two element array', function () {
    	var input          = [6, 5];
    	var expectedOutput = [5, 6];
    	var actualOutput   = mergeSort(input);
    	assert.deepEqual(actualOutput, expectedOutput);
    });
    it('should sort a random array', function () {
    	var input          = [5, 5, 1, 5, 1, 2, 432, 543, 643, 6543, 45, 54];
    	var actualOutput   = mergeSort(input);
    	var expectedOutput = input.sort(function(a, b) { return a - b });
    	assert.deepEqual(actualOutput, expectedOutput);
    });
});