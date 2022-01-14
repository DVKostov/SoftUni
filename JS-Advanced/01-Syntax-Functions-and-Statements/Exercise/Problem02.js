function solve(num1, num2) {
    let start = num1;
    if (num1 > num2) {
        start = num2
    };
    let loop = true;
    while (loop) {
        if (num1 % start === 0 && num2 % start === 0) {
            loop = false;
        } else {
            start--;
        }
    };
    console.log(start);
};

solve(2154, 458);