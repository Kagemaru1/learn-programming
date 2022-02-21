function vacationBooksList(input) {
	let pages = Number(input[0]);
	let pagesPerHour = Number(input[1]);
	let daysForReading = Number(input[2]);

	let daysNeeded = pages / daysForReading / pagesPerHour;
	console.log(daysNeeded);
}
vacationBooksList(["212 ", "20 ", "2 "]);
vacationBooksList(["432 ", "15 ", "4 "]);
