function characterSequence(input) {
	let char = input[0];
	let length = char.length;

	for (let i = 0; i < length; i++) {
		console.log(char[i]);
	}
}
characterSequence(["softuni"]);
characterSequence(["ice cream"]);
