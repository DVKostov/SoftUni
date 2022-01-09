function solve(word, input) {
    input = input.split(' ');
    for (const iterator of input) {
        if (iterator.toLowerCase() === word.toLowerCase()) {
            return word.toLowerCase()
        }
    }
    return `${word} not found!`
}





solve('javascript',
    'JavaScript is the best programming language'
)