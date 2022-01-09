function min(firstNum, secondNum, thirdNum) {
    let minNum = firstNum
    if (secondNum < minNum) {
        minNum = secondNum
    }
    if (thirdNum < minNum) {
        minNum = thirdNum
    }
    return minNum
}
console.log(min(2,
    5,
    3
    ))