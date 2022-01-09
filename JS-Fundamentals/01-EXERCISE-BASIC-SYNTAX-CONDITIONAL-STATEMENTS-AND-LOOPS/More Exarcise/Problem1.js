function Problem1 (num1, num2, num3) {
    let array = []
    array.push(num1)
    array.push(num2)
    array.push(num3)
    array.sort().reverse()
    for ( let i = 1; i <= 3; i++) {
    console.log(array.shift())
    }
}
Problem1(2,1,3)