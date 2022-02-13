const expect = require('chai').expect
const sum = require('./Problem04')

describe('Problem 4', () => {
   it('Test 1', () => {
      expect(sum([1, 3])).to.be.equal(4);
   });
   it('Test 2', () => {
      expect(sum([1, 'a'])).to.be.NaN;
   });
   it('Test 3', () => {
      expect(sum('a')).to.be.NaN;
   });
});

