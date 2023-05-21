export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	const index = nums.findIndex(number => number === n);
	if (index === -1 || nums.length-1=== index) return null;
	return nums[index+1];
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	let count1s = (str.match(/1/g) || []).length;
	let count0s = (str.match(/0/g) || []).length;
	return {1:count1s, 0:count0s};
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	let nString =""+n;
	return Number(nString.split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	let sum =0;
	arrs.forEach(item => item.forEach(item => sum=sum+item));
	return sum;
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	let temp = arr[0];
	arr[0]=arr[arr.length-1];
	arr[arr.length-1]=temp;
	return arr;
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	if (typeof haystack === "string") return haystack.toLowerCase().includes(searchTerm.toLowerCase());
	return Object.values(haystack).some(val => findNeedle(val, searchTerm));
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	//let freqWord = {};
	//return Object.keys(str).sort().forEach(function(word) {str[word];});
	let strStripped = str.replace(/[,.!?]/g, '');
	let words = strStripped.toLowerCase().split(' ');
	let wordCounts = {};
	words.forEach(word => {
		wordCounts[word] = (wordCounts[word] || 0) + 1;
	});
	let result ={};
	words.forEach((item) => {
		result[item] = result[item] ? ++result[item] : 1;
	});
	return result;
};
