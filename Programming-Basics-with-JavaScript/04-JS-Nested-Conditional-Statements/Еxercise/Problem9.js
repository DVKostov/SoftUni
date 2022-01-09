function Problem9 (examH, examM, arivalH, arivalM) {
    examH = Number(examH);
    examM = Number(examM);
    arivalH = Number(arivalH);
    arivalM = Number(arivalM);

    let zero = '';
    let diffH = 0;
    let diffM = 0;
    let examTime = (examH * 60) + examM;
    let arivalTime = (arivalH * 60) + arivalM;

    let diff = examTime - arivalTime;

    if (diff < 0) {
        console.log(`Late`);
        diff = Math.abs(diff);
        if (diff >=60) {
            diffH = (diff - (diff % 60)) / 60;
            diffM = diff % 60;
            if (diffM < 10) {
                zero = '0';
            }
            console.log(`${diffH}:${zero}${diffM} hours after the start`);
        } else {
            console.log(`${diff} minutes after the start`);
        }
    } else if ( diff <= 30) {
        console.log('On time');
        if (diff > 0) {
            console.log(`${diff} minutes before the start`);
        }
    } else {
        console.log('Early');
        if (diff >= 60) {
            diffH = (diff - (diff % 60)) / 60;
            diffM = diff % 60;
            if (diffM < 10) {
                zero = '0';
            }
            console.log(`${diffH}:${zero}${diffM} hours before the start`);
        } else {
            console.log(`${diff} minutes before the start`);
        }
    }

}
Problem9(9, 30, 9, 50);
Problem9(9, 00, 8, 30);
Problem9(16, 00, 15, 00);
Problem9(9, 00, 10, 30);
Problem9(14, 00, 13, 55);
Problem9(11, 30, 8, 12);
Problem9(10, 00, 10, 00);
Problem9(11, 30, 10, 55);
Problem9(11, 30, 12, 29);