function Problem2 (input) {
    let user = input.shift();
    let pass = input.shift();
    let tr = input.shift();
    while (tr !== pass) {
        tr = input.shift();
    }
    console.log(`Welcome ${user}!`)

}
Problem2([
    'Nakov',
    '1234',
    'pass',
    '1324',
    '1234',
])