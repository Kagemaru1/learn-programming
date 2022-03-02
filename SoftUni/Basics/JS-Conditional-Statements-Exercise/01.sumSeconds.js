function sumSeconds(input) {
	let firstSportsmen = Number(input[0]);
	let secondSportsmen = Number(input[1]);
	let thirdSportsmen = Number(input[2]);

	let sumSeconds = firstSportsmen + secondSportsmen + thirdSportsmen;

	let min = Math.trunc(sumSeconds / 60);
	let seconds = sumSeconds % 60;

	if (seconds > 9) {
		console.log(`${min}:${seconds}`);
	} else {
		console.log(`${min}:0${seconds}`);
	}
}
sumSeconds(["35", "45", "44"]);
sumSeconds(["22", "7", "34"]);
sumSeconds(["50", "50", "49"]);
sumSeconds(["14", "12", "10"]);
