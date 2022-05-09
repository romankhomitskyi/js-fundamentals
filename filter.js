const rooms = ['Kitchen', 'Library', 'Conservatory', 'Hall', 'Dining Room'];

function filter(collection, callback) {
	const result = [];
	collection.forEach(item => {
		let value = callback(item);
		if (value) {
			result.push(item);
		}
	});
	return result;
}

const users = [
	{ user: 'barney', age: 36, active: true },
	{ user: 'fred', age: 40, active: true }
];

console.log(filter(users, o => o.user === 'barney'));

const clues = filter(rooms, room => {
	return room.length === 7;
});

// Should return an array of length 2
console.log(clues && clues.length, '=== 2');

// Should return ["Kitchen", "Library"]
console.log(clues && clues[0] === 'Kitchen');
console.log(clues && clues[1] === 'Library');
