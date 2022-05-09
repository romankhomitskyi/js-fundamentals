function split(str, separator) {
	const result = [''];
	let currentIndex = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === separator) {
            // Creating the next item in our array,
			currentIndex++;
			result[currentIndex] = '';
		} else {
            // Concatenate string
			result[currentIndex] += str[i];
		}
	}
	return result;
}
console.log(split('gregre,gerge', ','));
