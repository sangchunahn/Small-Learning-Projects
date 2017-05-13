const chai = require('chai');
const should = require('chai').should();
const expect = require('chai').expect;

describe('testing create an array', () => {
    it('when input is 5 array should have length of 5', () => {
        expect(arrLength(5)).to.equal([1, 2, 3, 4, 5])
    });

    it('when input is 10 array should have length of 10', () => {
        expect(arrLength(10)).to.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    });

    it('the first index of the array should be a num', () => {
        expect(arrLength(5) [0]).to.be.a('number')
    });

    it('the first index of should be 1', () => {
        expect(arrLength(5) [0]).to.eql(1)
    });

    it('the last index of the array should be the input number', () => {
        let input = 5;
        let response = arrLength(input);
        expect(response[response.length - 1].to.eql(input));
    });

});

// function arrLength(num) {
//   var arr = []
//   for (var i = 1; i <= num; i++ ) {
//       arr.push(i)
//   }
//   return arr
// }