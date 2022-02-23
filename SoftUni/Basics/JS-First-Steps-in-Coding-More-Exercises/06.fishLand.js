function fishLand(input) {
	let atlanticMackerelPrice = Number(input[0]);
	let europeanSpratPrice = Number(input[1]);
	let kgAtlanticBonito = Number(input[2]);
	let kgTrachurus = Number(input[3]);
	let kgShellfish = Number(input[4]);

	let shellfishPrice = 7.5;
	let atlanticBonitoPrice = atlanticMackerelPrice * 1.6;
	let trachurusPrice = europeanSpratPrice * 1.8;

	let costAtlanticBonito = kgAtlanticBonito * atlanticBonitoPrice;
	let costOfshellfish = shellfishPrice * kgShellfish;
	let costOfTrachurus = kgTrachurus * trachurusPrice;
	let cost = costAtlanticBonito + costOfTrachurus + costOfshellfish;
	console.log(cost.toFixed(2));
}
fishLand(["6.90", "4.20", "1.5", "2.5", "1"]);
