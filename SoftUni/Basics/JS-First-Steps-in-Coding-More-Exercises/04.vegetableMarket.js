function vegetableMarket(input) {
	let vegetablePrice = Number(input[0]);
	let fruitPrice = Number(input[1]);
	let vegetableKilos = Number(input[2]);
	let fruitKilos = Number(input[3]);

	let vegetableCost = vegetablePrice * vegetableKilos;
	let fruitCost = fruitPrice * fruitKilos;
	let costInEuro = (vegetableCost + fruitCost) / 1.94;

	console.log(costInEuro.toFixed(2));
}
vegetableMarket(["0.194", "19.4", "10", "10"]);
