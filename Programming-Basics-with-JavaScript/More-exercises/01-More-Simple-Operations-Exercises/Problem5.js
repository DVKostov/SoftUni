function Problem5 (w, h) {
    w = Number(w) * 100;
    h= Number(h) * 100;

    num1 = Math.floor(w / 120)
    num2 = Math.floor((h - 100) / 70)

    let tot = num1 * num2 - 3

    console.log(tot)



}
Problem5(8.5, 5.2)