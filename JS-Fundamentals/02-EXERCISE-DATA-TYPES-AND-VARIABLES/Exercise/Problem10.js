function Problem(starting) {
    let days = 0;
    let total = 0;
    while (true) {
        if (starting < 100) {
            if ((total - 26) < 0) {
                total = 0
            } else {
                total -= 26
            }
            break;
        }
        total += starting;
        if ((total - 26) < 0) {
            total = 0
        } else {
            total -= 26
        }
        starting -= 10;
        days += 1
    }
    console.log(days);
    console.log(total)



}
Problem(111)