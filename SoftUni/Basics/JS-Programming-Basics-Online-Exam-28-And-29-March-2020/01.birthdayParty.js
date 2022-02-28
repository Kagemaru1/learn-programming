function birthdayParty(input) {
	let hallPrice = Number(input[0]);

	let cakePrice = hallPrice * 0.2;
	let drinksPrice = cakePrice * 0.55;
	let animatorPrice = hallPrice / 3;

	let budget = hallPrice + cakePrice + drinksPrice + animatorPrice;

	console.log(budget);
}
birthdayParty(["3720"]);
