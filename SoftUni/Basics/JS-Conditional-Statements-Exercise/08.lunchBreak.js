function lunchBreak(input) {
	let seriesName = input[0];
	let episodeLength = Number(input[1]);
	let restLength = Number(input[2]);

	let timeLeft = restLength - (restLength / 8 + restLength / 4);
	let difference = Math.ceil(Math.abs(timeLeft - episodeLength));

	if (episodeLength <= timeLeft) {
		console.log(
			`You have enough time to watch ${seriesName} and left with ${difference} minutes free time.`
		);
	} else {
		console.log(
			`You don't have enough time to watch ${seriesName}, you need ${difference} more minutes.`
		);
	}
}
lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);
