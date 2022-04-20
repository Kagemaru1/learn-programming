function sumOfNumbers(input) {
	let num = input[0];
	let numLength = num.length;
	let sum = 0;

	for (let i = 0; i < numLength; i++) {
		sum = sum + Number(num[i]);
	}
	console.log("The sum of the digits is:" + sum);
}
sumOfNumbers(["1234"]);
sumOfNumbers(["564891"]);
