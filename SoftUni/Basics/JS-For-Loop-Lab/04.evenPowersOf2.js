function evenPowersOf2(input) {
	let num = Number(input[0]);
	let powNum = 1;
	console.log(powNum);
	for (let i = 1; i <= num; i += 1) {
		if (i % 2 === 0) {
			powNum = powNum * 2 * 2;
			console.log(powNum);
		}
	}
}
evenPowersOf2(["3"]);
evenPowersOf2(["4"]);
evenPowersOf2(["5"]);
evenPowersOf2(["6"]);
evenPowersOf2(["7"]);
