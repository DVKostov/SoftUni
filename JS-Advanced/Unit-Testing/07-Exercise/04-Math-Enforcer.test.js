const expect = require('chai').expect
const mathEnforcer = require('./04-Math-Enforcer')

describe('04-Math-Enforcer', () => {
    it('addFive', () => {
        expect(mathEnforcer.addFive('asd')).to.be.undefined;
        expect(mathEnforcer.addFive(true)).to.be.undefined;
        expect(mathEnforcer.addFive([])).to.be.undefined;
        expect(mathEnforcer.addFive()).to.be.undefined;
        expect(mathEnforcer.addFive(0)).to.be.equal(5);
        expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        expect(mathEnforcer.addFive(0.5)).to.be.closeTo(5.5, 0.0001);
        expect(mathEnforcer.addFive(-5.5)).to.be.closeTo(-0.5, 0.0001);
    })
    it('subtractTen', () => {
        expect(mathEnforcer.subtractTen('asd')).to.be.undefined;
        expect(mathEnforcer.subtractTen(true)).to.be.undefined;
        expect(mathEnforcer.subtractTen([])).to.be.undefined;
        expect(mathEnforcer.subtractTen()).to.be.undefined;
        expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
        expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        expect(mathEnforcer.subtractTen(10.2)).to.be.closeTo(0.2, 0.0001);
        expect(mathEnforcer.subtractTen(-10.2)).to.be.closeTo(-20.2, 0.0001);
    })
    it('sum', () => {
        expect(mathEnforcer.sum('10', 1)).to.be.undefined;
        expect(mathEnforcer.sum(10, true)).to.be.undefined;
        expect(mathEnforcer.sum(1)).to.be.undefined;
        expect(mathEnforcer.sum({})).to.be.undefined;
        expect(mathEnforcer.sum([])).to.be.undefined;
        expect(mathEnforcer.sum()).to.be.undefined;
        expect(mathEnforcer.sum(0, 0)).to.be.equal(0);
        expect(mathEnforcer.sum(-1, -1)).to.be.equal(-2);
        expect(mathEnforcer.sum(-1, 1)).to.be.equal(0);
        expect(mathEnforcer.sum(1, -1)).to.be.equal(0);
        expect(mathEnforcer.sum(1.1, 1.1)).to.be.closeTo(2.2, 0.0001);
        expect(mathEnforcer.sum(-1.1, -1.1)).to.be.closeTo(-2.2, 0.0001);
    })

})