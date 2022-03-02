function timePlus15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    minutes += 15;

    if (minutes >= 60) {
        hour += 1;
    }
}
timePlus15Minutes(["1", "46"]);
timePlus15Minutes(["0", "01"]);
timePlus15Minutes(["23", "59"]);
timePlus15Minutes(["11", "08"]);
timePlus15Minutes(["12", "49"]);