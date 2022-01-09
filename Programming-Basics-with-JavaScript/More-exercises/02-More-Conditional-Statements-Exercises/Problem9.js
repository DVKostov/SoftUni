function Problem9 (type, QTY, card) {
    type = type.toLowerCase();
    QTY = Number(QTY);
    let haveCard = card == 'Yes';
    let PRC = 0;
 
    switch (type) {
        case 'gasoline':
            if (haveCard) {
                PRC = 2.22 - 0.18;
            } else {
                PRC = 2.22;
            }
        break;
        case 'diesel':
            if (haveCard) {
                PRC = 2.33 - 0.12;
            } else {
                PRC = 2.33;
            }
        break;
        case 'gas':
            if (haveCard) {
                PRC = 0.93 - 0.08;
            } else {
                PRC = 0.93;
            }
    }

    let tot = QTY * PRC;

    if (QTY >= 20 && QTY <= 25) {
        tot = tot * 0.92;
    } else if (QTY > 25) {
        tot = tot * 0.90;
    }
   
    console.log(`${tot.toFixed(2)} lv.`)
}
Problem9('Gas', 30, 'Yes')