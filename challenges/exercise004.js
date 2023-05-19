export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	return nums.filter( item => item < 1);
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	return names.filter( item => item[0] === char);
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	return words.filter( item => item.includes("to "));
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	return nums.filter( item => Number.isInteger(item));
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	return users.map(item => item.data.city.displayName);
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	return nums.map( item => Number(Math.sqrt(item).toFixed(2)))
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	return sentences.filter( item =>  (item.toLowerCase().search(str.toLowerCase()) != -1));

}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
    const newArr = [];
	triangles.forEach(function (item) {
		 const side = Math.max.apply(Math,item);
		 newArr.push(side)});
	return newArr;
	//return triangles.forEach(item => Math.max.apply(Math,item))
}
