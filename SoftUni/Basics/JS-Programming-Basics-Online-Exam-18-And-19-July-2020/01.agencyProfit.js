function agencyProfit(input) {
	let agency = input[0];
	let adultTickets = Number(input[1]);
	let childrenTickets = Number(input[2]);
	let adultTicketsPrice = Number(input[3]);
	let tax = Number(input[4]);

	let childrenTicketsPrice = (adultTicketsPrice * 0.3 + tax) * childrenTickets;
	adultTicketsPrice = (adultTicketsPrice + tax) * adultTickets;

	let agencyProfit = (childrenTicketsPrice + adultTicketsPrice) * 0.2;

	console.log(
		`The profit of your agency from ${agency} tickets is ${agencyProfit.toFixed(2)} lv.`);
}
agencyProfit(["WizzAir", "15", "5", "120", "40"]);
