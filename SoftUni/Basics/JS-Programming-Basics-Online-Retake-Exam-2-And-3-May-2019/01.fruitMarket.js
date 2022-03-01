function fruitMarket(input) {
	let strawberryPrice = Number(input[0]);
	let bananasKg = Number(input[1]);
	let orangeKg = Number(input[2]);
	let raspberryKg = Number(input[3]);
	let strawberryKg = Number(input[4]);

	let raspberryPrice = strawberryPrice / 2;
	let orangePrice = raspberryPrice * 0.6;
	let bananasPrice = raspberryPrice * 0.2;

	let finalePrice =
		strawberryPrice * strawberryKg +
		bananasPrice * bananasKg +
		orangePrice * orangeKg +
		raspberryPrice * raspberryKg;

	console.log(finalePrice.toFixed(2));
}
fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);
