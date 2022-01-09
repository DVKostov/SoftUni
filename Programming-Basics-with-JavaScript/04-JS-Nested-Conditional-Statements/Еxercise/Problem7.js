function Problem7 (n1, n2, action) {
    n1 = Number(n1);
    n2 = Number(n2);
    let EvenOdd = ''
    let rez = 0;
    let zero = n2 == 0 && (action == '/' || action == '%');
    
    if (zero) {
        console.log(`Cannot divide ${n1} by zero`);
    } else {
        switch (action) {
            case '/':
                rez = n1 / n2;
                console.log(`${n1} / ${n2} = ${rez.toFixed(2)}`);
                break;
            case '%':
                rez = n1 % n2;
                console.log(`${n1} % ${n2} = ${rez}`);
                break;
            case '+':
                rez = n1 + n2;
                if (rez % 2 == 0) {
                    EvenOdd = 'even';
                } else {
                    EvenOdd = 'odd';
                }
                console.log(`${n1} + ${n2} = ${rez} - ${EvenOdd}`);
                break;
            case '-':
                rez = n1 - n2;
                if (rez % 2 == 0) {
                    EvenOdd = 'even';
                } else {
                    EvenOdd = 'odd';
                }
                console.log(`${n1} - ${n2} = ${rez} - ${EvenOdd}`);
                break;
            case '*':
                rez = n1 * n2;
                if (rez % 2 == 0) {
                    EvenOdd = 'even';
                } else {
                    EvenOdd = 'odd';
                }
                console.log(`${n1} * ${n2} = ${rez} - ${EvenOdd}`);
                break;

        }
    }

}
Problem7(10, 12, '+');
Problem7(123, 12, '/');
Problem7(112, 0, '/');
Problem7(10, 1, '-');
Problem7(10, 3, '%');
Problem7(10, 0, '%');
Problem7(7, 3, '*');