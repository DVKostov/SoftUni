function Problem5 (age, washingPRC, toyPRC) {
    age = Number(age);
    washingPRC = Number(washingPRC);
    toyPRC = Number(toyPRC);

    let moneyToGet = 10;
    let moneyBD = 0;
    let toys = 0;

    for (i = 1; i <= age; i ++) {
        let isEven = i % 2 == 0
        if (isEven) {
            moneyBD = moneyBD + moneyToGet - 1;
            moneyToGet = moneyToGet + 10
        } else {
            toys = toys + 1
        }
    }

    moneyBD = moneyBD + (toys * toyPRC);
    let diff = Math.abs(moneyBD - washingPRC);

    if (washingPRC <= moneyBD) {
        console.log(`Yes! ${diff.toFixed(2)}`)
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }

}
Problem5(21, 1570.98, 3)