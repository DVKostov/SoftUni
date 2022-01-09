function Problem4 (num) {
    num = Number(num);

    for(let i = 0; i <= num; i = i +2) {
        console.log(Math.pow(2, i));
    }

}
Problem4(3)