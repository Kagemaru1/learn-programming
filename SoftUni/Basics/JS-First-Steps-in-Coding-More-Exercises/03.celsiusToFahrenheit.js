function celsiusToFahrenheit(input) {
	let celsius = Number(input[0]);

	let fahrenheit = 1.8 * celsius + 32;

	console.log(fahrenheit.toFixed(2));
}
celsiusToFahrenheit(["25"]);
