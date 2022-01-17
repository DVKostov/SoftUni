function solve(array) {
    let counter = 0;
    for (let i1 = 0; i1 < array.length; i1++) {
        for (let i2 = 0; i2 < array[i1].length; i2++) {
            if (array[i1][i2] === array[i1][i2 + 1]) {
                counter++;
            }
            if (i1 < array.length - 1) {
                if (array[i1][i2] === array[i1 + 1][i2]) {
                    counter++;
                }
            }
        }
    }
    return counter;
}

console.log(solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));