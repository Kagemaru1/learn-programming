function trainingLab(input) {
	let width = Number(input[0]) * 100; // to turn m to cm
	let height = Number(input[1]) * 100; // to turn m to cm

	let rows = Math.floor((height - 100) / 70);
	let columns = Math.floor(width / 120);
	let seats = rows * columns - 3;

	console.log(seats);
}
trainingLab(["15", "8.9"]);
