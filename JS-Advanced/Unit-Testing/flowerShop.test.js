const expect = require('chai').expect
let flowerShop = require("./flowerShop");


describe("flowerShop", function() {
    describe("calcPriceOfFlowers", function() {
        it("invalid", function() {
            expect(() => flowerShop.calcPriceOfFlowers()).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(true)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers([])).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(1, 2, 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(true, 2, 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers([], 2, 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', '2', 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 2.2, 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', true, 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', [], 2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 2, `2`)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 2, 2.2)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 2, true)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('rose', 2, {})).to.throw(Error, 'Invalid input!');
        });
        it("valid", function() {
            expect(flowerShop.calcPriceOfFlowers('rose', 2, 2)).to.be.equal(`You need $4.00 to buy rose!`);
            expect(flowerShop.calcPriceOfFlowers('rose', -2, 2)).to.be.equal(`You need $-4.00 to buy rose!`);
            expect(flowerShop.calcPriceOfFlowers('rose', 2, -2)).to.be.equal(`You need $-4.00 to buy rose!`);
            expect(flowerShop.calcPriceOfFlowers('rose', 0, 0)).to.be.equal(`You need $0.00 to buy rose!`);
            expect(flowerShop.calcPriceOfFlowers('rose', 2, 0)).to.be.equal(`You need $0.00 to buy rose!`);
            expect(flowerShop.calcPriceOfFlowers('rose', 0, 2)).to.be.equal(`You need $0.00 to buy rose!`);
            expect(flowerShop.calcPriceOfFlowers('rose', -1, 0)).to.be.equal(`You need $0.00 to buy rose!`);
            expect(flowerShop.calcPriceOfFlowers('rose', 0, -1)).to.be.equal(`You need $0.00 to buy rose!`);
        });
     });
     describe("checkFlowersAvailable", function() {
        it("invalid", function() {
            expect(flowerShop.checkFlowersAvailable('rose4', ['rose1', 'rose2', 'rose3'])).to.be.equal(`The rose4 are sold! You need to purchase more!`);
            expect(flowerShop.checkFlowersAvailable('rose4', [])).to.be.equal(`The rose4 are sold! You need to purchase more!`);
        });
        it("valid", function() {
            expect(flowerShop.checkFlowersAvailable('rose2', ['rose1', 'rose2', 'rose3'])).to.be.equal(`The rose2 are available!`);
        });
     });
     describe("sellFlowers", function() {
        it("invalid", function() {
            expect(() => flowerShop.sellFlowers()).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers([])).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers([], 0)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers([], 10)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(['rose1', 'rose2', 'rose3'], 10)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(['rose1', 'rose2', 'rose3'], 1.1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(['rose1', 'rose2', 'rose3'], -1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(['rose1', 'rose2', 'rose3'], '0')).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(['rose1', 'rose2', 'rose3'], 'a')).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers(['rose1', 'rose2', 'rose3'], true)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers('asd', 0)).to.throw(Error, 'Invalid input!');
        });
        it("valid", function() {
            expect(flowerShop.sellFlowers(['rose1', 'rose2', 'rose3'], 0)).to.be.equal(`rose2 / rose3`);
            expect(flowerShop.sellFlowers(['rose1', 'rose2', 'rose3'], 1)).to.be.equal(`rose1 / rose3`);
            expect(flowerShop.sellFlowers(['rose1', 'rose2', 'rose3'], 2)).to.be.equal(`rose1 / rose2`);
            expect(flowerShop.sellFlowers(['rose1', 'rose2'], 0)).to.be.equal(`rose2`);
            expect(flowerShop.sellFlowers(['rose1'], 0)).to.be.equal(``);
        });
     });
});
