function basketballEquipment(input) {
	let tax = Number(input[0]);

	let snickersPrice = tax * 0.6;
	let uniformPrice = snickersPrice * 0.8;
	let ballPrice = uniformPrice / 4;
	let accessoriesPrice = ballPrice / 5;

	let finalePrice =
		tax + snickersPrice + uniformPrice + ballPrice + accessoriesPrice;

	console.log(finalePrice.toFixed(2));
}
basketballEquipment(["320"]);
