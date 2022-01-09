function solve(first, second) {
    while (first.includes(second)) {
        first = first.replace(second, '*'.repeat(second.length));
    }
    console.log(first)
}
solve("A small sentence with some words small", "small")