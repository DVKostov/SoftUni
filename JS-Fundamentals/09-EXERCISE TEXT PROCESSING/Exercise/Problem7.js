function solve(input) {
    let first = input.substring(0,input.length / 2);
    let second = input.substring((input.length / 2), input.length);
    console.log(first.split('').reverse().join(''));
    console.log(second.split('').reverse().join(''));
}
solve('AbAb'
)