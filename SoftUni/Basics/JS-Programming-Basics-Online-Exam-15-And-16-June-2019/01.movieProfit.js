function movieProfit(input) {
	let movieName = input[0];
	let days = Number(input[1]);
	let ticketsCount = Number(input[2]);
	let ticketPrice = Number(input[3]);
	let theaterPercentage = Number(input[4]);

	let profit = days * (ticketsCount * ticketPrice);

	let finaleProfit = profit * (1 - theaterPercentage / 100);

	console.log(
		`The profit from the movie ${movieName} is ${finaleProfit.toFixed(2)} lv.`
	);
}
movieProfit(["The Programmer", "20", "500", "7.50", "7"]);
