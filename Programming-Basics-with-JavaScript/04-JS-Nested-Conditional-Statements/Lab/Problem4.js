function Problem4 (goods, town, QTY) {
    QTY = Number(QTY);
    let PRC = 0;

    switch (town) {
        case ('Sofia'):
            switch (goods) {
                case ('coffee'):
                    PRC = 0.5;
                    break;
                case ('water'):
                    PRC = 0.8;
                    break;
                case ('beer'):
                    PRC = 1.2;
                    break;
                case ('sweets'):
                    PRC = 1.45;
                    break;
                case ('peanuts'):
                    PRC = 1.6;
                    break;
            }
            break;
        case ('Plovdiv'):
            switch (goods) {
                case ('coffee'):
                    PRC = 0.4;
                    break;
                case ('water'):
                    PRC = 0.7;
                    break;
                case ('beer'):
                    PRC = 1.15;
                    break;
                case ('sweets'):
                    PRC = 1.30;
                    break;
                case ('peanuts'):
                    PRC = 1.5;
                    break;
            }
            break;
        case ('Varna'):
            switch (goods) {
                case ('coffee'):
                    PRC = 0.45;
                    break;
                case ('water'):
                    PRC = 0.7;
                    break;
                case ('beer'):
                    PRC = 1.1;
                    break;
                case ('sweets'):
                    PRC = 1.35;
                    break;
                case ('peanuts'):
                    PRC = 1.55;
                    break;
            }
            break;
    }
let total = QTY * PRC;

console.log(total);

}
Problem4('coffee','Varna',2)