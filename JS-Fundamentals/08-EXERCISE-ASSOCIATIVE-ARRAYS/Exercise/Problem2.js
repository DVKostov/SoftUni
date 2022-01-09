function solve(input) {
    class Word {
        constructor(word, wordCount) {
            this.word = word;
            this.wordCount = wordCount;
            this.plus = () => {
                this.wordCount += 1;
            }
        }

    }
    let words = [];
    input = input.split(' ');
    for (const iterator of input) {
        let word = iterator.toLowerCase();
        if (words.find(wordIndex => wordIndex.word === word) === undefined) {
            words.push(new Word(word, 1));
        } else {
            words.find(wordIndex => wordIndex.word === word).plus();
        }
    }
    let filtered = words.filter(word => word.wordCount % 2 !== 0);
    let prt = [];
    for (const iterator of filtered) {
        prt.push(iterator.word)
    }
    console.log(prt.join(' '))
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
)