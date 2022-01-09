function Problem2 (num) {
    num = Number(num);

    let num2 = 0;

    if(num <= 100) {
        num2 = num + 5;
    }else if (num > 100 && num < 1000) {
        num2 = num * 1.2;
    }else {
        num2 = num * 1.1;
    }

    if((num % 2) == 0) {
        num2 = num2 + 1;
    }

    if(((num - 5) % 10) == 0) {
        num2 = num2 + 2;
    }

    let bonus = num2 - num;

    console.log(bonus);
    console.log(num2);

}

Problem2(175)