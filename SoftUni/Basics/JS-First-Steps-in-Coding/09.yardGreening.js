function yardGreening(input) {
	let squareMeters = Number(input[0]);
	let price = squareMeters * 7.61;
	let discount = price * 0.18;
    let finalePrice = price - discount;
	console.log(`The final price is: ${finalePrice} lv.`);
	console.log(`The discount is: ${discount} lv.`);
}
yardGreening(["550"]);
