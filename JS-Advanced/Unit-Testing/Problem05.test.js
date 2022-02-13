const isSymmetric = require('./Problem05');
const expect = require('chai').expect

describe('Problem 5', () => {
    it('Not array', () => {
        expect(isSymmetric(1)).to.be.equal(false);
        expect(isSymmetric('a')).to.be.equal(false);
        expect(isSymmetric({})).to.be.equal(false);
        expect(isSymmetric(true)).to.be.equal(false);
    });
    it('Symmetric', () => {
        expect(isSymmetric([1,1])).to.be.equal(true);
        expect(isSymmetric([1,1,1])).to.be.equal(true);
        expect(isSymmetric([[],1,[]])).to.be.equal(true);
        expect(isSymmetric([{},1,{}])).to.be.equal(true);
        expect(isSymmetric(['a',1,'a'])).to.be.equal(true);
    });
    it('Not array', () => {
        expect(isSymmetric([1,2])).to.be.equal(false);
        expect(isSymmetric([1,1,'1'])).to.be.equal(false);
        expect(isSymmetric([[1],1,['a']])).to.be.equal(false);
        expect(isSymmetric(true)).to.be.equal(false);
    })
})