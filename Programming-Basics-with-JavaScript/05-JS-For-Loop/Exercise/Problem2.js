function Problem2 (n) {

    n = Number(n);
    let rez = 0;

    for (let i = 1; i <= n; i++) {
        rez = rez + (i * i)
    }

    console.log(rez)
}
Problem2(7)