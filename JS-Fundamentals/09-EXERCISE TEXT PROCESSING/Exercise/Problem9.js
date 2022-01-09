function solve(input) {

    let pass = (input[0] + input[1]).toLowerCase().split('');
    let word = input[2].toUpperCase();
    let vowels = [97, 101, 105, 111, 117]
    let wordIndex = 0;

    for (let index = 0; index < pass.length; index++) {
        let char = pass[index].charCodeAt();
        if (vowels.includes(char)) {
            pass[index] = word[wordIndex];
            wordIndex++;
            if (word[wordIndex] === undefined) {
                wordIndex = 0;
            }
        }
    }
    console.log(`Your generated password is ${pass.reverse().join('')}`)
}
solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    
)