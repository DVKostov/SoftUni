function solve(input) {
    let words = new Map();
    for (const iterator of input) {
        if (words.has(iterator)) {
        words.set(iterator, words.get(iterator) + 1);
        } else {
            words.set(iterator, 1);
        }
    }
    let sorted = Array.from(words).sort((a, b) => b[1] - a[1]);
    for (const iterator of sorted) {
        console.log(`${iterator[0]} -> ${iterator[1]} times`);
    }

}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]
)