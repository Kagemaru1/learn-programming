function easterBakery(input) {
	let flourPrice = Number(input[0]);
	let flourKg = Number(input[1]);
	let sugarKg = Number(input[2]);
	let eggsBox = Number(input[3]);
	let yestPackage = Number(input[4]);

	let sugarPrice = flourPrice * 0.75;
	let eggsBoxPrice = flourPrice * 1.1;
	let yestPackagePrice = sugarPrice * 0.2;

	let finaleCost =
		flourPrice * flourKg +
		sugarPrice * sugarKg +
		eggsBox * eggsBoxPrice +
		yestPackage * yestPackagePrice;

	console.log(finaleCost.toFixed(2));
}
easterBakery(["50", "10", "3.5", "6", "1"]);
