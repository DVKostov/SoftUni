function Problem4 (num) {
    num = Number(num);

    let oneOdd = 0;
    let even = 0;
    let odd7 = 0;
    let modul100 = 0;

    for (let i = 1; i <= num; i ++) {
            let isEven = i % 2 == 0;
        if (i < 10 && !isEven) {
            oneOdd = oneOdd + 1};
        if (isEven) {
            even = even + 1};
        if (i == 7 || (i-7) % 10 == 0) {
            odd7 = odd7 + 1};
        if (100 % i == 0) {
            modul100 = modul100 + 1};
    }

    oneOdd = (oneOdd / num) * 100;
    even = (even / num) * 100;
    odd7 = (odd7 / num) * 100;
    modul100 = (modul100 / num) * 100

    console.log(`${oneOdd.toFixed(2)}%`);
    console.log(`${even.toFixed(2)}%`);
    console.log(`${odd7.toFixed(2)}%`);
    console.log(`${modul100.toFixed(2)}%`)
}
Problem4(49)