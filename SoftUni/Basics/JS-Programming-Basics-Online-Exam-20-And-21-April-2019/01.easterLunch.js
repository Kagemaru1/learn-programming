function easterLunch(input) {
	let sweetBreadCount = Number(input[0]);
	let eggsBoxCount = Number(input[1]);
	let cookiesKg = Number(input[2]);

	let sweetBreadPrice = 3.2;
	let eggsBoxPrice = 4.35; // for 12 eggs
	let cookiesPrice = 5.4; // for a kilo of cookies
	let eggsPaintPrice = 0.15; // per egg

	let finaleCost =
		sweetBreadCount * sweetBreadPrice +
		eggsBoxCount * eggsBoxPrice +
		cookiesKg * cookiesPrice +
		eggsPaintPrice * eggsBoxCount * 12;

	console.log(finaleCost.toFixed(2));
}
easterLunch(["3", "2", "3"]);
