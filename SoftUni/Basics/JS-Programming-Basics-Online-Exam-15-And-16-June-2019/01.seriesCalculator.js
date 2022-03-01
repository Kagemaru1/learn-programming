function seriesCalculator(input) {
	let seriesName = input[0];
	let seasonsCount = Number(input[1]);
	let episodesCount = Number(input[2]);
	let episodeLength = Number(input[3]);

	let specialEpisode = 10;
	let episodeLengthWithCommercials = episodeLength * 1.2;
	let seasonLength =
		episodeLengthWithCommercials * episodesCount + specialEpisode;
	let finaleLengthInMin = Math.round(seasonLength * seasonsCount);

	console.log(
		`Total time needed to watch the ${seriesName} series is ${finaleLengthInMin} minutes.`
	);
}
seriesCalculator(["Lucifer", "3", "18", "55"]);
