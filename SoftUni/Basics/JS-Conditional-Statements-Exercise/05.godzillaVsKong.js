function godzillaVsKong(input) {
	let budget = Number(input[0]);
	let extras = Number(input[1]);
	let costumePrice = Number(input[2]);

	if (extras > 150) {
		costumePrice *= 0.9;
	}
	let decorPrice = budget * 0.1;
	let moneyNeeded = extras * costumePrice + decorPrice;
	let difference = Math.abs(budget - moneyNeeded).toFixed(2);

	if (moneyNeeded <= budget) {
		console.log("Action!");
		console.log(`Wingard starts filming with ${difference} leva left.`);
	} else {
		console.log("Not enough money!");
		console.log(`Wingard needs ${difference} leva more.`);
	}
}
godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);
