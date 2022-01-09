function Problem8(PVac, QPuz, QDoll, QTedy, QMinions, QCar) {
    PVac = Number(PVac);
    QPuz = Number(QPuz);
    QDoll = Number(QDoll);
    QTedy = Number(QTedy);
    QMinions = Number(QMinions);
    QCar = Number(QCar);

    let CPuz = 2.6;
    let CDoll = 3;
    let CTedy = 4.1;
    let CMinions = 8.2;
    let CCar = 2;

    let sumPuz = QPuz * CPuz;
    let sumDoll = QDoll * CDoll;
    let sumTedy = QTedy * CTedy;
    let sumMinions = QMinions * CMinions;
    let sumCar = QCar * CCar;

    let sum = sumPuz + sumDoll + sumTedy + sumMinions + sumCar;
    let Qtotal = QPuz + QDoll + QTedy + QMinions + QCar;
    
    if (Qtotal >= 50) {
        sum = sum * 0.75;
    }

    sum = sum * 0.9;


    if (sum >= PVac) {
        let rest = sum - PVac
        console.log(`Yes! ${rest.toFixed(2)} lv left.`)
    }else {
        let rest = PVac - sum
        console.log(`Not enough money! ${rest.toFixed(2)} lv needed.`)
    }
}
Problem8(320, 8, 2, 5, 5, 1)