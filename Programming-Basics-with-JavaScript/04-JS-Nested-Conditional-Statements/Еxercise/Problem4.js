// 86 / 100

function Problem4 (flower, QTY, budget) {
    QTY = Number(QTY);
    budget = Number(budget);
    let total = 0;
    let diff = 0;

    switch (flower) {
        case 'Roses':
            total = (QTY * 5);
            if (QTY > 80) {
                total = total * 0.9;
            }
            break;
        case 'Dahlias':
            total = (QTY * 3.8);
            if (QTY > 90) {
                total = total * 0.85;
            }
            break;
        case 'Tulips':
            total = (QTY * 2.8);
            if (QTY > 80) {
                total = total * 0.85;
            }
            break;
        case 'Narcissus':
            total = (QTY * 3);
            if (QTY < 120) {
                total = total * 1.15;
            }
            break;
        case 'Gladiolus':
            total = (QTY * 2.5);
            if (QTY < 80) {
                total = total * 1.2;
            }
            break;
    }
    if (budget >= total) {
        diff = budget - total;
        console.log(`Hey, you have a great garden with ${QTY} ${flower} and ${diff.toFixed(2)} leva left.`)
    } else {
        diff = total - budget;
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`) 
    }


}
Problem4('Roses', 55, 250);
Problem4('Tulips', 88, 260);
Problem4('Narcissus', 119, 360)