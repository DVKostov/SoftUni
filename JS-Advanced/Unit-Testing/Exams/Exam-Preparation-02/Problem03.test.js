const expect = require('chai').expect
let library = require("./Problem03.js");

describe("Tests …", function () {
    describe("calcPriceOfBook", function () {

        it("valid", function () {
            expect(library.calcPriceOfBook('Book', 2000)).to.be.equal(`Price of Book is 20.00`);
            expect(library.calcPriceOfBook('Book', 1980)).to.be.equal(`Price of Book is 10.00`);
            expect(library.calcPriceOfBook('Book', 1979)).to.be.equal(`Price of Book is 10.00`);
            expect(library.calcPriceOfBook('Book', 1981)).to.be.equal(`Price of Book is 20.00`);
            expect(library.calcPriceOfBook('Book', 0)).to.be.equal(`Price of Book is 10.00`);
            expect(library.calcPriceOfBook('Book', 9999)).to.be.equal(`Price of Book is 20.00`);
            expect(library.calcPriceOfBook('Book', 9999999)).to.be.equal(`Price of Book is 20.00`);
            expect(library.calcPriceOfBook('2000', 2000)).to.be.equal(`Price of 2000 is 20.00`);
            expect(library.calcPriceOfBook('Book', -1)).to.be.equal(`Price of Book is 10.00`);
        });
        it("invalid", function () {
            expect(() => library.calcPriceOfBook()).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Book')).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(2000)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook([])).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook({})).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(true)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(true, 1979)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook([], 1979)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook({}, 1979)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook(1979, 1979)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Book', '1979')).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Book', 'Book')).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Book', true)).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Book', [])).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Book', {})).to.throw(Error, 'Invalid input');
            expect(() => library.calcPriceOfBook('Book', 2000.1)).to.throw(Error, 'Invalid input');
        });
    });
    describe("findBook", function () {

        it("valid", function () {
            expect(library.findBook(['Book','Book1','Book2'], 'Book')).to.be.equal(`We found the book you want.`);
            expect(library.findBook(['Book','Book1','Book2'], 'Book3')).to.be.equal(`The book you are looking for is not here!`);
        });
        it("invalid", function () {
            expect(() => library.findBook([], 'Book')).to.throw(Error, 'No books currently available');
        });
    });
    describe("arrangeTheBooks", function () {

        it("valid", function () {
            expect(library.arrangeTheBooks(0)).to.be.equal(`Great job, the books are arranged.`);
            expect(library.arrangeTheBooks(40)).to.be.equal(`Great job, the books are arranged.`);
            expect(library.arrangeTheBooks(41)).to.be.equal(`Insufficient space, more shelves need to be purchased.`);
        });
        it("invalid", function () {
            expect(() => library.arrangeTheBooks('1')).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks('a')).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks(-1)).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks(true)).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks([])).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks({})).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks(1.5)).to.throw(Error, 'Invalid input');
            expect(() => library.arrangeTheBooks()).to.throw(Error, 'Invalid input');
        });
    });

});
