function Problem4 (num, enter, exit) {
    num = Number(num);
    let mm = 'mm';
    let sm = 'cm';
    let m = 'm';
    let num1 = 0

    if (enter == exit){
        num1 = num;
    }else if (enter == mm) {
        if (exit == sm){
            num1 = num / 10;
        }else {
            num1 = num / 1000;
        }
    }else if (enter == sm) {
        if (exit == m){
            num1 = num / 100;
        }else {
            num1 = num * 10;
        }
    }else {
        if (exit == mm) {
            num1 = num * 1000;
        }else {
            num1 = num * 100;
        }
    }
    console.log(num1.toFixed(3))

}
Problem4(1000,'mm','m')