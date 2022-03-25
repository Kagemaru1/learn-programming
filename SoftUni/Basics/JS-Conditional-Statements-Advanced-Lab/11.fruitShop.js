function fruitShop(input) {
	let fruit = input[0];
	let day = input[1];
	let quantity = Number(input[2]);

	let price = 0;
	let isFruit =
		fruit === "banana" ||
		fruit === "apple" ||
		fruit === "orange" ||
		fruit === "grapefruit" ||
		fruit === "kiwi" ||
		fruit === "pineapple" ||
		fruit === "grapes";
	let isDayOfWeek =
		day === "Monday" ||
		day === "Tuesday" ||
		day === "Wednesday" ||
		day === "Thursday" ||
		day === "Friday" ||
		day === "Saturday" ||
		day === "Sunday";
	switch (day) {
		case "Monday":
		case "Tuesday":
		case "Wednesday":
		case "Thursday":
		case "Friday":
			if (fruit === "banana") {
				price = 2.5;
			} else if (fruit === "apple") {
				price = 1.2;
			} else if (fruit === "orange") {
				price = 0.85;
			} else if (fruit === "grapefruit") {
				price = 1.45;
			} else if (fruit === "kiwi") {
				price = 2.7;
			} else if (fruit === "pineapple") {
				price = 5.5;
			} else if (fruit === "grapes") {
				price = 3.85;
			}
			break;
		case "Saturday":
		case "Sunday":
			if (fruit === "banana") {
				price = 2.7;
			} else if (fruit === "apple") {
				price = 1.25;
			} else if (fruit === "orange") {
				price = 0.9;
			} else if (fruit === "grapefruit") {
				price = 1.6;
			} else if (fruit === "kiwi") {
				price = 3;
			} else if (fruit === "pineapple") {
				price = 5.6;
			} else if (fruit === "grapes") {
				price = 4.2;
			}
			break;
	}
	if (!(isDayOfWeek && isFruit)) {
		console.log("error");
	} else {
		console.log((quantity * price).toFixed(2));
	}
}
fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);
