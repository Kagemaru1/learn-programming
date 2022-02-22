function trapezoidArea(input) {
    let base1 = Number(input[0]);
    let base2 = Number(input[1]);
    let high = Number(input[2]);

    let area = (base1 + base2) * high / 2;

    console.log(area.toFixed(2));
}
trapezoidArea(["8", "13", "7"]);
