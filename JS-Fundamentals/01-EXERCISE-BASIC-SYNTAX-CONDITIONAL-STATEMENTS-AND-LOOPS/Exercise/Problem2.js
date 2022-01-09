function Problem2 (num, prec) {
    if (prec > 15) {
        prec = 15;
    }
    let print = parseFloat(num.toFixed(prec))
    console.log(print)
}
Problem2(3.500,3)