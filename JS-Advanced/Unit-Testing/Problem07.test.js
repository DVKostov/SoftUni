const createCalculator = require('./Problem07');
const {expect, assert} = require('chai')

describe ('Problem 7', () => {
    it('has props', () => {
        expect(typeof createCalculator()).to.be.equal('object');
        expect(typeof createCalculator().add).to.be.equal('function');
        expect(typeof createCalculator().subtract).to.be.equal('function');
        expect(typeof createCalculator().get).to.be.equal('function');
    });
    it('undefined', () => {
        expect(createCalculator().add('a')).to.be.undefined;
        expect(createCalculator().add([])).to.be.undefined;
        expect(createCalculator().add({})).to.be.undefined;
        expect(createCalculator().add(true)).to.be.undefined;
        expect(createCalculator().subtract('a')).to.be.undefined;
        expect(createCalculator().subtract([])).to.be.undefined;
        expect(createCalculator().subtract({})).to.be.undefined;
        expect(createCalculator().subtract(true)).to.be.undefined;
    })
    it('calculates', () => {
        let a = createCalculator();
        a.add(1);
        expect(a.get()).to.be.equal(1);
        a.add('1');
        expect(a.get()).to.be.equal(2);
        a.subtract(3);
        expect(a.get()).to.be.equal(-1);
        a.add('0');
        a.add(11);
        expect(a.get()).to.be.equal(10);
    })

})