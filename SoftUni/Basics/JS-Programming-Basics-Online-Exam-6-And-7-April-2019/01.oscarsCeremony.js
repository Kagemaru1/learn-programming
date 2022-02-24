function oscarsCeremony(input) {
	let hallCost = Number(input[0]);

	let statueCost = hallCost * 0.7;
	let cateringCost = statueCost * 0.85;
	let soundCost = cateringCost / 2;

	let finalCost = hallCost + statueCost + cateringCost + soundCost;

	console.log(finalCost.toFixed(2));
}
oscarsCeremony(["3500"]);
