function suppliesForSchool(input) {
	let pensPrice = 5.8;
	let markersPrice = 7.2;
	let cleanerPrice = 1.2;

	let penPack = Number(input[0]);
	let markersPack = Number(input[1]);
	let cleanerLitre = Number(input[2]);
	let skid = Number(input[3]);

	let price =
		(penPack * pensPrice +
			markersPack * markersPrice +
			cleanerLitre * cleanerPrice) *
		(1 - skid / 100);

	console.log(price);
}
suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);
suppliesForSchool(["4 ", "2 ", "5 ", "13 "]);
