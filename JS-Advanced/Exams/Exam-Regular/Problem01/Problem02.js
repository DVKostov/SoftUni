class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.capacity === this.books.length) {
            throw new Error("Not enough space in the collection.");
        }
        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName) {
        let book = this.books.filter(e => e.bookName === bookName)[0];

        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (book.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;
        return `${bookName} has been successfully paid.`

    }
    removeBook(bookName) {
        let book = this.books.filter(e => e.bookName === bookName)[0];

        if (!book) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if (!book.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        let i = this.books.indexOf(book);
        this.books.splice(i, 1);
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor) {
        if (bookAuthor) {
            let book = this.books.filter(e => e.bookAuthor === bookAuthor)[0];
            if (!book) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            let paid = `Not Paid`;
            if (book.payed) {
                paid = `Has Paid`;
            }
            return `${book.bookName} == ${book.bookAuthor} - ${paid}.`;
        } else {
            let result = `The book collection has ${this.capacity - this.books.length} empty spots left.`;
            let array = this.books.sort((a, b) => (a.bookName.localeCompare(b.bookName)));
            for (let index = 0; index < array.length; index++) {
                let paid = `Not Paid`;
                if (array[index].payed) {
                    paid = `Has Paid`;
                }
                result += `\n${array[index].bookName} == ${array[index].bookAuthor} - ${paid}.`
            }
            return result;
        }
    }

}


const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());


//The book collection has 2 empty spots left.
//Don Quixote == Miguel de Cervantes - Has Paid.
//In Search of Lost Time == Marcel Proust - Not Paid.
//Ulysses == James Joyce - Not Paid.

