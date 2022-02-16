const rgbToHexColor = require('./Problem06');
const {expect, assert} = require('chai')

describe ('Problem 6', () => {
    it('undefined', () => {
        expect(rgbToHexColor(1)).to.be.undefined
        expect(rgbToHexColor(1,0)).to.be.undefined
        expect(rgbToHexColor(256,0,0)).to.be.undefined
        expect(rgbToHexColor(0,256,0)).to.be.undefined
        expect(rgbToHexColor(0,0,256)).to.be.undefined
        expect(rgbToHexColor(0,0,-1)).to.be.undefined
        expect(rgbToHexColor(0,-1,0)).to.be.undefined
        expect(rgbToHexColor(-1,0,0)).to.be.undefined
    });
    it('undefined 2', () => {
        expect(rgbToHexColor('0',0,0)).to.be.undefined
        expect(rgbToHexColor(0,'0',0)).to.be.undefined
        expect(rgbToHexColor(0,0,'0')).to.be.undefined
        expect(rgbToHexColor([],0,0)).to.be.undefined
        expect(rgbToHexColor(0,{},0)).to.be.undefined
        expect(rgbToHexColor(0,0,true)).to.be.undefined
        expect(rgbToHexColor(true)).to.be.undefined
        expect(rgbToHexColor([])).to.be.undefined
        expect(rgbToHexColor({})).to.be.undefined
        expect(rgbToHexColor('asd')).to.be.undefined
    });
    it ('good case', () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000')
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF')
    })
})