function poolDay(input) {
	let people = Number(input[0]);
	let entranceTax = Number(input[1]);
	let chaiseLonguePrice = Number(input[2]);
	let umbrellaPrice = Number(input[3]);

	let costOfUmbrellas = Math.ceil(people / 2) * umbrellaPrice;
	let costOfChaiseLongue = Math.ceil(people * 0.75) * chaiseLonguePrice;
	let costEntrance = people * entranceTax;
	let finalCost = costEntrance + costOfChaiseLongue + costOfUmbrellas;

	console.log(`${finalCost.toFixed(2)} lv.`);
}
poolDay(["21", "5.50", "4.40", "6.20"]);
