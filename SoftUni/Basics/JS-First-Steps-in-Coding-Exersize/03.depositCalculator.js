function depositCalculator(input) {
	let deposit = Number(input[0]);
	let lengthOfDeposit = Number(input[1]);
	let percentage = Number(input[2]);
	let amount =
		deposit + lengthOfDeposit * ((deposit * (percentage / 100)) / 12);
	console.log(amount);
}
depositCalculator(["200 ", "3 ", "5.7 "]);
