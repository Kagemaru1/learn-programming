function tennisEquipment(input) {
	let tennisRocketPrice = Number(input[0]);
	let tennisRocketsCount = Number(input[1]);
	let snickersCount = Number(input[2]);

	let snickersPrice = tennisRocketPrice / 6;
	let snickersAndRocketsCost =
		tennisRocketsCount * tennisRocketPrice + snickersCount * snickersPrice;
	let otherEquipmentCost = snickersAndRocketsCost * 0.2;

	let wholeCost = snickersAndRocketsCost + otherEquipmentCost;
	let djokovicPays = Math.floor(wholeCost / 8);
	let sponsorPays = Math.ceil((wholeCost * 7) / 8);
	console.log(`Price to be paid by Djokovic ${djokovicPays}`);
	console.log(`Price to be paid by sponsors ${sponsorPays}`);
}
tennisEquipment(["850", "4", "2"]);
