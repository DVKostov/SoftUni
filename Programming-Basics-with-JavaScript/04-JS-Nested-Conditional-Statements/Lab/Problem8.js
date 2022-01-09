function Problem8 (fruit, day, QTY) {
    QTY = Number(QTY);

    let isWeekend = day == 'Saturday' || day == 'Sunday';
    let isWorkday = day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday';
    let isError = isWeekend == false && isWorkday == false 
    let isFruit = true

    let total = 0;

    if (isError) {
       console.log('error'); 
    } else {
        if (isWorkday) {
            switch (fruit) {
                case 'banana':
                    total = QTY * 2.5;
                    break;
                case 'apple':
                    total = QTY * 1.2;
                    break;
                case 'orange':
                    total = QTY * 0.85;
                    break;
                case 'grapefruit':
                    total = QTY * 1.45;
                    break;
                case 'kiwi':
                    total = QTY * 2.7;
                    break;
                case 'pineapple':
                    total = QTY * 5.5;
                    break;
                case 'grapes':
                    total = QTY * 3.85;
                    break;
                default:
                    isFruit = false;
            }
        } else {
            switch (fruit) {
                case 'banana':
                    total = QTY * 2.7;
                    break;
                case 'apple':
                    total = QTY * 1.25;
                    break;
                case 'orange':
                    total = QTY * 0.9;
                    break;
                case 'grapefruit':
                    total = QTY * 1.6;
                    break;
                case 'kiwi':
                    total = QTY * 3;
                    break;
                case 'pineapple':
                    total = QTY * 5.6;
                    break;
                case 'grapes':
                    total = QTY * 4.2;
                    break;
                default:
                    isFruit = false;
            }

        }

        if (isFruit) {
            console.log(total.toFixed(2));
        } else {
            console.log('error');
        }
    }
}
Problem8('tomato', 'Tuesday', 2);
Problem8('apple', 'Tuesday', 2)