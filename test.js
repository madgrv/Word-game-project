const range = (start, end, step = 1) => {
	let output = [];
	if (typeof end === 'undefined') {
		end = start;
		start = 0;
	}
	for (let i = start; i < end; i += step) {
		output.push(i);
	}
	return output;
};

let word = 'HELLO';

range(5).map((n) => {
	console.log(word[n]);
});
