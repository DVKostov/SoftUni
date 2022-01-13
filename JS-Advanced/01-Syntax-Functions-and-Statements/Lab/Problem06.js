function solve(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let sum = 0;
    for (let index = num1; index <= num2; index++) {
        sum += index
        
    }
    console.log(sum);
};

solve('1', '5' );