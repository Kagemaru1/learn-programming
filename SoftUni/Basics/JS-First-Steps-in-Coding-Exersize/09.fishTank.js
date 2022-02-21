function fishTank(input) {
	let length = Number(input[0]);
	let width = Number(input[1]);
	let high = Number(input[2]);
	let percentageTaken = Number(input[3]);

	let tankVolume = (length * width * high) / 1000; // to turn it in liters
	let finaleVolume = tankVolume * (1 - percentageTaken / 100);

	console.log(finaleVolume);
}
fishTank(["85 ", "75 ", "47 ", "17 "]);
fishTank(["105 ", "77 ", "89 ", "18.5 "]);
