function worldSwimmingRecord(input) {
	let worldSwimmingRecord = Number(input[0]);
	let distanceInMeters = Number(input[1]);
	let secondsPerMeter = Number(input[2]);

	let slowing = Math.floor(distanceInMeters / 15) * 12.5;
	let ivansTime = (distanceInMeters * secondsPerMeter + slowing).toFixed(2);
	let difference = Math.abs(worldSwimmingRecord - ivansTime).toFixed(2);

	if (ivansTime < worldSwimmingRecord) {
		console.log(
			`Yes, he succeeded! The new world record is ${ivansTime} seconds.`
		);
	} else {
		console.log(`No, he failed! He was ${difference} seconds slower.`);
	}
}
worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
