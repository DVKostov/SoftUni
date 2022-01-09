function Problem1 (num1, num2, num3) {
    
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    let sum = num1 + num2 + num3;
    let min = Math.floor(sum / 60);
    let sec = sum - (min * 60);

    if (sec < 10) {
        sec = `0${sec}`;
    }
    
    console.log(`${min}:${sec}`);

}
Problem1(12, 12, 12)