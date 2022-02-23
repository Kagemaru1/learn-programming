function circleAreaAndPerimeter(input) {
	let radius = Number(input[0]);

	let circle = 2 * Math.PI * radius;
	let area = Math.PI * radius ** 2;

	console.log(area.toFixed(2));
	console.log(circle.toFixed(2));
}
circleAreaAndPerimeter(["3"]);
circleAreaAndPerimeter(["4.5"]);
