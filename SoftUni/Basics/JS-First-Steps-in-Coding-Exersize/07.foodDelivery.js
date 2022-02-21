function foodDelivery(input) {
	let chickenMenuPrice = 10.35;
	let fishMenuPrice = 12.4;
	let veganMenuPrice = 8.15;

	let chickenMenuPortions = Number(input[0]);
	let fishMenuPortions = Number(input[1]);
	let veganMenuPortions = Number(input[2]);

	let price =
		(chickenMenuPortions * chickenMenuPrice +
			fishMenuPortions * fishMenuPrice +
			veganMenuPortions * veganMenuPrice) *
			1.2 +
		2.5;

	console.log(price);
}
foodDelivery(["2 ", "4 ", "3 "]);
foodDelivery(["9 ", "2 ", "6 "]);
