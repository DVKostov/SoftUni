const expect = require('chai').expect
const isOddOrEven = require('./Problem02')

describe('Problem 2', () => {
  it('undefined', () => {
    expect(isOddOrEven(1)).to.be.undefined;
    expect(isOddOrEven(true)).to.be.undefined;
    expect(isOddOrEven({})).to.be.undefined;
    expect(isOddOrEven([1, 2, 3])).to.be.undefined;
    expect(isOddOrEven()).to.be.undefined;
})
  it('even', () => {
    expect(isOddOrEven('as')).to.be.equal('even');
    expect(isOddOrEven('----')).to.be.equal('even');
    expect(isOddOrEven('')).to.be.equal('even');
  })
  it('odd', () => {
    expect(isOddOrEven('asd')).to.be.equal('odd');
    expect(isOddOrEven('12345')).to.be.equal('odd');
    expect(isOddOrEven('!')).to.be.equal('odd');
  })
 
})