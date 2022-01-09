function solve(input) {
    class Word {
        constructor(word) {
            this.word = word;
            this.wordCount = 0;
            this.plus = () => {
                this.wordCount += 1;
            }
        }
    }
    let first = input.shift().split(' ');
    let words = [];
    for (const iterator of first) {
        words.push(new Word(iterator))
    }
    for (const iterator of input) {
        if (words.find(word => word.word === iterator) !== undefined) {
            words.find(word => word.word === iterator).plus();
        }
    }
    let sorted = words.sort((a, b) => b.wordCount - a.wordCount)
    for (const iterator of sorted) {
        console.log(`${iterator.word} - ${iterator.wordCount}`)
    }
}
solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]


)