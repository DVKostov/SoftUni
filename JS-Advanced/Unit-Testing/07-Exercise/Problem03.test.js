const expect = require('chai').expect
const lookupChar = require('./Problem03')

describe('Problem 3', () => {
  it('undefined', () => {
    expect(lookupChar(1, 1)).to.be.undefined;
    expect(lookupChar('1', '1')).to.be.undefined;
    expect(lookupChar()).to.be.undefined;
    expect(lookupChar('asd', 1.5)).to.be.undefined;
})
  it('Incorrect index', () => {
    expect(lookupChar('asd', -1)).to.be.equal('Incorrect index');
    expect(lookupChar('asd', 4)).to.be.equal('Incorrect index');
  })
  it('correct', () => {
    expect(lookupChar('asd', 0)).to.be.equal('a');
    expect(lookupChar('asd', 1)).to.be.equal('s');
    expect(lookupChar('asd', 2)).to.be.equal('d');
  })
 
})