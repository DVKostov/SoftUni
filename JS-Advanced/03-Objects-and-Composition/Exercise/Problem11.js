function solve(array) {
    let storage = [];
    for (let index = 0; index < array.length; index++) {
        if (typeof array[index] === 'number') {
            storage.push(Number(array[index]));
        } else {
            if (storage.length < 2) {
                return console.log("Error: not enough operands!");
            } else {
                let num2 = storage.pop();
                let num1 = storage.pop();
                switch (array[index]) {
                    case '+':
                        storage.push(num1 + num2);
                        break;
                    case '-':
                        storage.push(num1 - num2);
                        break;
                    case '*':
                        storage.push(num1 * num2);
                        break;
                    case '/':
                        storage.push(num1 / num2);
                        break;
                    default:
                        break;
                }
            }
        }
    }

    if (storage.length > 1) {
        console.log("Error: too many operands!");
    } else {
        console.log(storage[0]);
    }
}

console.log(solve([5,
    3,
    4,
    '*',
    '-']
));