function Problem5(first, second, third) {

    let firstLenght = first.length;
    let secondLenght = second.length;
    let thirdLenght = third.length;

    let total = (secondLenght * firstLenght) * thirdLenght / 2;

    let runs = Math.ceil(total / 2.5);

    console.log(`The plate was rotated ${runs} times.`);

}
Problem5('Black Sabbath', 'Paranoid', 'War Pigs')