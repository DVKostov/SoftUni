function Problem6 (num1, num2) {
    let sum = 0;
    let str = "";
    while (num1 <= num2) {
        str += num1 + " ";
        sum += num1;
        num1++;
    }
    console.log(str);
    console.log(`Sum: ${sum}`)
}
Problem6 (5, 10)