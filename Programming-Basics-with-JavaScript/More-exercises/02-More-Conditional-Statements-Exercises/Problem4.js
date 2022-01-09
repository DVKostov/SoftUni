function Problem4 (n, str) {
    n = Number(n);

    let taxiSum = 0;
    let busSum = 0.09 * n;
    let trainSum = 0.06 * n;

    switch (str) {
        case 'day':
        taxiSum = 0.7 + (0.79 * n);
        break;
        default:
        taxiSum = 0.7 + (0.9 * n);
    } 

    if (n < 20) {
        console.log(taxiSum.toFixed(2));
    } else if (n < 100) {
        console.log(busSum.toFixed(2));
    } else {
        console.log(trainSum.toFixed(2));
    }



}
Problem4(5 , 'day')