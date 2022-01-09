function Problem1() {
    let theBook = input.shift();
    let totalBooks = number(input.shift());
    let currentBook = '';
    let count = 0
    let found = false

    while(count !== totalBooks) {
        currentBook = input.shift()
        count ++
        if (theBook === currentBook){
            found = true
            break;
        }
    }

    if(found){
        console.log(`You checked ${count} books and found it.`)
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${count} books.`)
    }


}
Problem1([
    "Troy",
    "8",
    "Stronger",
    "Life Style",
    "Troy"
    ])