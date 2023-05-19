export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	let squares = [];
	nums.forEach(number => squares.push(number*number));
	return squares;
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	let wordJoined = words[0]; 
	for (let i=1; i<words.length;i++){
		wordJoined = wordJoined + words[i].charAt(0).toUpperCase() + words[i].slice(1);
	}
	return wordJoined;
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	function totalSubjects (people){
		return people.reduce((total,people)=>total+people.subjects.length,0);
	}
	return totalSubjects(people);
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	let menuLength = menu.length;
	for(let j=0; j<menuLength;j++){
		let arrLen = menu[j].ingredients.length;
		for(let i=0; i<arrLen; i++){
			if (menu[j].ingredients[i] === ingredient)
				return true;
		};
	};
    return false;
	//menu.every(menu => {menu.ingredients.every(ingitem => {if (ingitem === ingredient) return true;})});
	//return false;
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	let arr3 = arr1.filter(number => arr2.includes(number)).sort();
	let unique = [];  
	arr3.forEach((item) => {  
   		if(!unique.includes(item)){  
    		unique.push(item);  
   		}  
	});  

	return unique;
}
