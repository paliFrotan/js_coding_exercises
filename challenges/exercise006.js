/* 
⚠️
⚠️ See exercise006.md - this time you have to write your own tests! ⚠️
⚠️
*/

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = arr =>  {
	if (arr === undefined) throw new Error('arr is required');
	let sum=0;
	for (let i =0; i<arr.length;i++){
		let n=arr[i];
		if ((n % 3 === 0 && n % 5 === 0) || (n % 3 === 0) || (n % 5 === 0))
			sum= sum+n;
	}
	return sum;	
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = str => {
	if (str === undefined) throw new Error('str is required');
	if (!str.length) return false;
    for (let i=0; i < str.length; i++){
		let ch=str[i];
		if (ch !== 'A' && ch !=='G' && ch !== 'T' && ch !== 'C'){
			return false;
		};
	};
    return true;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = str => {
	if (str === undefined) throw new Error('str is required');
	if(!isValidDNA(str)) return null;
	let newString = "";
    for (let i=0; i < str.length; i++){
		let ch=str[i];
		switch (ch){
			case 'A':
				ch='T';
				break;
			case 'C':
				ch='G';
				break;
		    case 'T':
				ch='A';
				break;
		    case 'G':
				ch='C';
		};
		newString = newString+ch;
	};
    return newString;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
	if (n === undefined) throw new Error('n is required');
	if (n <= 1 ) return false;
	for ( let i = 2 ; i <= n - 1 ; i ++ )
		if (n % i === 0 ) return false;
	return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
	if (n === undefined) throw new Error('n is required');
	if (fill === undefined) throw new Error('fill is required');
	return new Array(n).fill( new Array(n).fill(fill) );
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
	if (staff === undefined) throw new Error('staff is required');
	if (day === undefined) throw new Error('day is required');
	// count staff if day in rota and it has to be >= 3.
	let count = 0;
	for (let j =0; j< staff.length;j++)
		for (let i = 0; i < staff[j].rota.length; i++) {
			if (staff[j].rota[i] === day) 
				count++;
		};
  	return count >= 3;
};
