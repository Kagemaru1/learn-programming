function sopping(input) {
	let budget = Number(input[0]);
	let videoCardsCount = Number(input[1]);
	let processorsCount = Number(input[2]);
	let ramMemoryCount = Number(input[3]);

	let videoCardsPrice = 250;
	let processorsPrice = videoCardsPrice * videoCardsCount * 0.35;
	let ramMemoryPrice = videoCardsPrice * videoCardsCount * 0.1;
	let finaleMoney =
		videoCardsPrice * videoCardsCount +
		processorsCount * processorsPrice +
		ramMemoryCount * ramMemoryPrice;

	if (videoCardsCount > processorsCount) {
		finaleMoney *= 0.85;
	}
	let difference = Math.abs(budget - finaleMoney).toFixed(2);

	if (budget >= finaleMoney) {
		console.log(`You have ${difference} leva left!`);
	} else {
		console.log(`Not enough money! You need ${difference} leva more!`);
	}
}
sopping(["900", "2", "1", "3"]);
sopping(["920.45", "3", "1", "1"]);
