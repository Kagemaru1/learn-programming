function toyShop(input) {
	let excursionPrice = Number(input[0]);
	let puzzlesCount = Number(input[1]);
	let dollsCount = Number(input[2]);
	let teddyBearsCount = Number(input[3]);
	let minionsCount = Number(input[4]);
	let trucksCount = Number(input[5]);

	let puzzlePrice = 2.6;
	let dollPrice = 3;
	let teddyBearPrice = 4.1;
	let minionPrice = 8.2;
	let truckPrice = 2;

	let sumToys =
		puzzlesCount + dollsCount + teddyBearsCount + minionsCount + trucksCount;

	let money =
		puzzlesCount * puzzlePrice +
		dollsCount * dollPrice +
		teddyBearsCount * teddyBearPrice +
		minionsCount * minionPrice +
		trucksCount * truckPrice;

	if (sumToys >= 50) {
		money *= 0.75;
	}
	let moneyLeft = money * 0.9; // money after rent 10%
	let difference = Math.abs(moneyLeft - excursionPrice).toFixed(2);

	if (moneyLeft >= excursionPrice) {
		console.log(`Yes! ${difference} lv left.`);
	} else {
		console.log(`Not enough money! ${difference} lv needed.`);
	}
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);
