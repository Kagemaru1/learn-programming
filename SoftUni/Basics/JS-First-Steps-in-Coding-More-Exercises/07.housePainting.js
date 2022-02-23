function housePainting(input) {
	let houseHight = Number(input[0]);
	let sideWallLength = Number(input[1]);
	let roofTriangleHight = Number(input[2]);

	let roofPaint =
		(roofTriangleHight * houseHight + sideWallLength * houseHight * 2) / 4.3;
	let wallsPaint =
		(houseHight * houseHight * 2 -
			2 * 1.2 +
			houseHight * sideWallLength * 2 -
			1.5 * 1.5 * 2) /
		3.4;

	console.log(wallsPaint.toFixed(2));
	console.log(roofPaint.toFixed(2));
}
housePainting(["6", "10", "5.2"]);
