function map(collection, callback) {
	const result = [];
	if (Array.isArray(collection)) {
		for (const item of collection) {
			let value = callback(item);
			result.push(value);
		}
	} else {
		for (const item in collection) {
			let value = callback(collection[item]);
			result.push({ [item]: value });
		}
	}
	return result;
}

const suspects = ['Mr. Green', 'Mrs. Peacock'];

const result = map(suspects, suspect => {
	return `Was it ${suspect}!?`;
});

console.log(result);
console.log(map({ a: 1, b: 2 }, number => number + 1));

// If the input is an array, we should get an array back
console.log(
	'1. If the input is an array, we should get an array back',
	'suspects:',
	Array.isArray(suspects),
	'result:',
	Array.isArray(result)
);

// Should return an array of strings questioning each suspect in the array
console.log(
	'Should return an array of strings questioning each suspect in the array',
	result[0] === 'Was it Mr. Green!?'
);
