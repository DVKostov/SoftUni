function solve(input) {
    let newWord = [];
    for (let index = 0; index < input.length; index++) {
        if (input[index] !== input[index + 1]) {newWord.push(input[index])}   
    }
    console.log(newWord.join(''))
}





solve('qqqwerqwecccwd'
)