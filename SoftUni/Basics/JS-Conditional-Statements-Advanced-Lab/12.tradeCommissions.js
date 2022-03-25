function tradeCommissions(input) {
	let city = input[0];
	let seals = Number(input[1]);

	let isCity = city === "Sofia" || city === "Varna" || city === "Plovdiv";
	let isInRange = seals >= 0;
	let commissions = 0;

	switch (city) {
		case "Sofia":
			if (seals >= 0 && seals <= 500) {
				commissions = 0.05;
			} else if (seals >= 500 && seals <= 1000) {
				commissions = 0.07;
			} else if (seals >= 1000 && seals <= 10000) {
				commissions = 0.08;
			} else if (seals > 10000) {
				commissions = 0.12;
			}
			break;
		case "Varna":
			if (seals >= 0 && seals <= 500) {
				commissions = 0.045;
			} else if (seals >= 500 && seals <= 1000) {
				commissions = 0.075;
			} else if (seals >= 1000 && seals <= 10000) {
				commissions = 0.1;
			} else if (seals > 10000) {
				commissions = 0.13;
			}
			break;
		case "Plovdiv":
			if (seals >= 0 && seals <= 500) {
				commissions = 0.055;
			} else if (seals >= 500 && seals <= 1000) {
				commissions = 0.08;
			} else if (seals >= 1000 && seals <= 10000) {
				commissions = 0.12;
			} else if (seals > 10000) {
				commissions = 0.145;
			}
			break;
	}
	if (!(isCity && isInRange)) {
		console.log("error");
	} else {
		console.log((seals * commissions).toFixed(2));
	}
}
tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "499.99"]);
tradeCommissions(["Varna", "3874.50"]);
tradeCommissions(["Kaspichan", "-50"]);
