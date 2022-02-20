function petShop(input) {
	let dogFood = Number(input[0]);
	let catFood = Number(input[1]);
	let dogFoodPrice = dogFood * 2.5;
	let catFoodPrice = catFood * 4;
	let sum = dogFoodPrice + catFoodPrice;
	console.log(`${sum} lv.`);
}
petShop(["4", "5"]);
