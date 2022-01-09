function Problem6 (days, foodKG, dogPerDayKG, catPerDayKG, turtPerDayG) {
    days = Number(days);
    foodKG = Number(foodKG);
    dogPerDayKG = Number(dogPerDayKG);
    catPerDayKG = Number(catPerDayKG);
    turtPerDayG = Number(turtPerDayG);
    let turtPerDayKG = turtPerDayG / 1000;
    let totKG = (dogPerDayKG + catPerDayKG + turtPerDayKG) * days;

    let diff = Math.abs(foodKG - totKG);

    if (totKG <= foodKG) {
        console.log(`${Math.floor(diff)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
    }




}
Problem6(2, 10, 1, 1, 1200)