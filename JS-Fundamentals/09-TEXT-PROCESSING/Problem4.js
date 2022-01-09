function solve(first, second) {
    first = first.split(' ');
    let count = 0;
    for (const iterator of first) {
        if (iterator === second) {count++}
    }
    console.log(count)
}
solve("This is a word and it also is a sentence",
"is"
)