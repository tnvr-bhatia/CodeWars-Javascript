function findOdd(A) {
	let obj = {};
	//Loop through the array and save the count of all element in an object
	A.forEach(element => {
		obj[element] = obj[element] ? obj[element] + 1 : 1;
	});

	//check the value of the object key which is odd and return the key
	for (let key in obj) {
		if (obj[key] % 2 !== 0) {
			return Number(key);
		}
	}
}

// Optimised Solution
const findOdd = xs => xs.reduce((a, b) => a ^ b);

// a ^ b will work on the fact that
// a ^ b is equal to x if and only if a ^ x is equal to b.
// let xs = [1,5,1,5,5]
// 1st iteration will have accumulator = 1 and current_value = 5 and accumulator ^ current_value = 4
// 2nd iteration will have accumulator = 4 and current_value = 1 and accumulator ^ current_value = 5
// 3rd iteration will have accumulator = 5 and current_value = 5 and accumulator ^ current_value = 0
// 4th iteration will have accumulator = 0 and current_value = 5 and accumulator ^ current_value = 5
