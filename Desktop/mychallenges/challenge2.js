
function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPointsPer5KmOver = 1;
    const suspensionThreshold = 12;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / 5);

        console.log("Points: " + demeritPoints);

        if (demeritPoints > suspensionThreshold) {
            console.log("License suspended");
        }
    }
}

checkSpeed(80);

