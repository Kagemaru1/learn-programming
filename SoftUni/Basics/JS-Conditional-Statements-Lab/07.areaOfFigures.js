function areaOfFigures(input) {
	let figure = input[0];

	let area = 0;

	if (figure === "square") {
		let side = Number(input[1]);
		area = side * side;
	} else if (figure === "rectangle") {
		let sideA = Number(input[1]);
		let sideB = Number(input[2]);
		area = sideA * sideB;
	} else if (figure === "circle") {
		let radius = Number(input[1]);
		area = Math.PI * radius ** 2;
	} else {
		let side = Number(input[1]);
		let hight = Number(input[2]);
		area = (side * hight) / 2;
	}

	console.log(area.toFixed(3));
}
areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);
