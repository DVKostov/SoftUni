function Problem5 (budget, season, numPeople) {
    budget = Number(budget);
    numPeople = Number(numPeople);
    let PRC = 0;
    let isEven = numPeople % 2 == 0;

    switch (season) {
        case 'Spring':
            PRC = 3000;
            break;
        case 'Winter':
            PRC = 2600;
            break;
        default:
            PRC = 4200;
            break;  
    }
    if (numPeople <= 6) {
        PRC = PRC * 0.9;
    } else if (numPeople <= 11) {
        PRC = PRC * 0.85;
    } else {
        PRC = PRC * 0.75;
    }
    if (isEven && season !== 'Autumn') {
        PRC = PRC * 0.95;
    }
    if (budget >= PRC) {
        let diff = budget - PRC;
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        let diff = PRC - budget;
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
Problem5(3000,'Summer',10);
Problem5(3600,'Autumn',6);
Problem5(2000,'Winter',13);