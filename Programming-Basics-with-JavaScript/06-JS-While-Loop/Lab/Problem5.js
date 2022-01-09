function Problem5 (input) {
    let trans = Number(input.shift());
    let fee = Number(input.shift());
    let counter = 1;
    let sum = 0;
    while (counter <= trans ) {
        if (fee < 0) {
            console.log('Invalid operation!')
            break;
        }
        console.log(`Increase: ${fee.toFixed(2)}`)
        sum += fee;
        counter++;
        fee = Number(input.shift());
    }
    console.log(`Total: ${sum.toFixed(2)}`);

}
Problem5([
    '3',
    '5.51',
    '69.42',
    '100',
    ])