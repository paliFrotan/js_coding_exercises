// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
	if (word[0] === word[0].toUpperCase()) return word;
	return word[0].toUpperCase()+ word.substr(1);
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	 
	return firstName[0]+'.'+lastName[0];
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
	if (vatRate === 0) return originalPrice;
	const newPrice = originalPrice + (originalPrice * vatRate/100);
	if (newPrice % 1 !== 0)
	  return Number(newPrice.toFixed(2));
	return Number(newPrice.toFixed(0));
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	const newPrice = originalPrice - originalPrice * reduction/100;
	if (newPrice % 1 !== 0)
	  return Number(newPrice.toFixed(2));
	return Number(newPrice.toFixed(0));
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	if (str.length % 2 === 0)
	   return str[Number((str.length/2).toFixed(0))-1]+str[Number((str.length/2).toFixed(0))];   
	return str[Number((str.length/2).toFixed(0))-1];
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	for (let j=0; j<words.length;j++){
	  words[j] = words[j].split('').reverse().join('');
	}
	return words;
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	return users.map(user => user.type).filter(type => type == "Linux").length;
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	const meanScore = eval(scores.join('+'))/scores.length;
	if (meanScore % 1 !== 0)
	  return Number(meanScore.toFixed(2));
	return Number(meanScore.toFixed(0));
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	// Add your code here!
}
