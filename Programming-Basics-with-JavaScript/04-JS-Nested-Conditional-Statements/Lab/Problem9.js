function Problem9(sity, volum){
    volum = Number(volum);
    let rez = 0;
    let isSity = sity == 'Sofia' || sity == 'Varna' || sity == 'Plovdiv';
    let isLessGreaterZero = volum > 0;

    if (volum <= 500) {
        switch (sity) {
            case 'Sofia':
                rez = volum * 0.05;
                break;
            case 'Varna':
                rez = volum * 0.045;
                break;
            case 'Plovdiv':
                rez = volum * 0.055;
                break;
        }
    } else if (volum <= 1000) {
        switch (sity) {
            case 'Sofia':
                rez = volum * 0.07;
                break;
            case 'Varna':
                rez = volum * 0.075;
                break;
            case 'Plovdiv':
                rez = volum * 0.08;
                break;
        }
    } else if (volum <= 10000) {
        switch (sity) {
            case 'Sofia':
                rez = volum * 0.08;
                break;
            case 'Varna':
                rez = volum * 0.1;
                break;
            case 'Plovdiv':
                rez = volum * 0.12;
                break;
        }
    }else if (volum > 10000) {
        switch (sity) {
            case 'Sofia':
                rez = volum * 0.12;
                break;
            case 'Varna':
                rez = volum * 0.13;
                break;
            case 'Plovdiv':
                rez = volum * 0.145;
                break;
        }
    }
    if (isSity && isLessGreaterZero) {
        console.log(rez.toFixed(2));
    } else {
        console.log('error')
    }
}
Problem9('Sofia', 1500);
Problem9('Plovdiv', 499.99);
Problem9('Varna', 3874.5);
Problem9('Kaspichan', -50);