function repainting(input) {
	let coverPrice = 1.5; // per square meter
	let paintPrice = 14.5; // per litre
	let paintReducerPrice = 5; // per litre
	let bagsPrice = 0.4; // const

	let coverNeeded = Number(input[0]); // in square meters
	let paintNeeded = Number(input[1]); // in litre
	let paintReducerNeeded = Number(input[2]); // in litre
	let hoursNeeded = Number(input[3]); // to end the work

	let cost =
		(coverNeeded + 2) * coverPrice +
		bagsPrice +
		paintNeeded * 1.1 * paintPrice +
		paintReducerNeeded * paintReducerPrice;
	let workCost = cost * 0.3 * hoursNeeded;
	let finaleCost = cost + workCost;

	console.log(finaleCost);
}
repainting(["10 ", "11 ", "4 ", "8 "]);
repainting(["5 ", "10 ", "10 ", "1 "]);
