function Problem3 (start, end, divider) {
    start = Number(start);
    end = Number(end);
    divider = Number(divider);
    let rez = 0;

    for (start; start <= end; start ++) {
        if (start % divider == 0) {
            rez = rez + start
        }
    }
    console.log(rez)

}
Problem3(10,30,7)