function hard (x1, y1, x2, y2) {
    x1 = Number(x1);
    x2 = Number(x2);
    y1 = Number(y1);
    y2 = Number(y2);
    let first = Math.abs(x1 - x2);
    let second = Math.abs(y1 - y2);
    let ans1 = first * second;
    let ans2 = 2 * (first + second);


    console.log(ans1.toFixed(2));
    console.log(ans2.toFixed(2))

}

hard(600.25, 500.75, 100.50, -200.5)