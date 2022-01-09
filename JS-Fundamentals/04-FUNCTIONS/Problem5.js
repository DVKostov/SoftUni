function calculate(firstNum, secondNum, operator) {
    switch (operator) {
        case 'multiply':
            return firstNum * secondNum
        case 'divide':
            return firstNum / secondNum
        case 'add':
            return firstNum + secondNum
        case 'subtract':
            return firstNum - secondNum
        default:
            break;
    }

}


console.log(calculate(5,
    5,
    'multiply'
))