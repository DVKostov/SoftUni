function solve(first, second) {
    first = first.split(', ');
    second = second.split(' ');
    for (const iterator of first) {
        for (let index = 0; index < second.length; index++) {
            if (second[index] === '*'.repeat(iterator.length)) { second[index] = iterator };

        }
    }
    console.log(second.join(' '))

}
solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
)