function Problem8 (start, end, n) {
    start = Number(start);
    end = Number(end);
    n = Number(n);
    n2 = Math.pow(n, 2);

    for (start; start <= end; start ++) {
        if (start % n2 == 0) {
            console.log(`Very special number: ${start}`);
        } else if (start % n == 0) {
            console.log(`Special number: ${start}`);
        } else {
            console.log(start)
        }
    }
}
Problem8(1, 25, 3)
