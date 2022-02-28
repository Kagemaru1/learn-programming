function changeBureau(input) {
	let bitcoins = Number(input[0]);
	let rmb = Number(input[1]);
	let commission = Number(input[2]);

	let bitcoinToBGN = bitcoins * 1168;
	let rmbToUSD = rmb * 0.15;
	let usdToBGN = rmbToUSD * 1.76;
	let eur = (bitcoinToBGN + usdToBGN) / 1.95;
	let eurAfterCommission = (1 - commission / 100) * eur;
	console.log(eurAfterCommission.toFixed(2));
}
changeBureau(["1", "5", "5"]);
