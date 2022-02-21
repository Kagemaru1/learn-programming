function basketballEquipment(input) {
	let trainingTax = Number(input[0]);

	let snickersPrice = trainingTax * 0.6;
	let clothsPrice = snickersPrice * 0.8;
	let ballPrice = clothsPrice / 4;
	let accessoriesPrice = ballPrice / 5;

	let finalePrice =
		trainingTax + snickersPrice + ballPrice + accessoriesPrice + clothsPrice;

	console.log(finalePrice);
}
basketballEquipment(["365"]);
basketballEquipment(["550"]);
