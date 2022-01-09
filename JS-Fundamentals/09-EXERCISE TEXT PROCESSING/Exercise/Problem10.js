function solve(input) {
    input = input.split(' ').filter(e => e.length > 0);
    let total = 0;
    for (const i of input) {
        let first = i[0].toLowerCase().charCodeAt() - 96;
        let firstIsUpper = i[0].charCodeAt() > 64 && i[0].charCodeAt() < 91;
        let second = i[i.length-1].toLowerCase().charCodeAt() - 96;
        let secondIsUpper = i[i.length-1].charCodeAt() > 64 && i[i.length-1].charCodeAt() < 91;
        let number = Number(i.substring(1,i.length-1));
        if (firstIsUpper) {
            number = number / first;
        } else {
            number = number * first;
        }
        if (secondIsUpper) {
            number = number - second;
        } else {
            number = number + second;
        }
        total += number
    }
    console.log(total.toFixed(2))
}
solve('A12b s17G'
)
solve('P34562Z q2576f   H456z'
)
solve('a1A'
)