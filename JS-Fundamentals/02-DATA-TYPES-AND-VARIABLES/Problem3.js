function Problem3 (num1, num2, num3) {
    let sum = num1 + num2 + num3
    sumInt = parseInt(sum)
    if (sum == sumInt) {
        console.log(`${sum} - Integer`)
    } else {
        console.log(`${sum} - Float`)
    }
}
Problem3 (9, 100, 1.1)