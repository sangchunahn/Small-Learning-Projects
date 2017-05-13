const chai = require('chai');
const should = require('chai').should();
const expect = require('chai').expect;

// mocha init test

describe('testing create an array', () => {
    it('when input is 5 array should have length of 5', () => {
        expect(arrLength(5).length).to.eql(5)
    });

    it('when input is 10 array should have length of 10', () => {
        expect(arrLength(10).length).to.eql(10)
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
        expect(response[response.length - 1]).to.eql(input);
    });

});

function arrLength(num) {
  var arr = []
  for (var i = 1; i <= num; i++ ) {
      arr.push(i)
  }
  return arr
}

// write a function called isPrime that takes one input and return true or false whether the input is prime, one is not a prime number false, 0 should return false, all positives, if you input an obj or arr or string return false

// isPrime(3) => true
// isPrime(7) => true
// isPrime(13) => true
// isPrime(1) => false
// isPrime(0) => false
// isPrime({}) => false
// isPrime([]) => false
// isPrime('') => false


describe('testing isPrime function', () => {
    it('if the input is 3 it should return true', () => {
        expect(isPrime(3)).to.be.true;
    })    
    it('if the input is 7 it should return true', () => {
        expect(isPrime(7)).to.be.true;
    })
    it('if the input is 13 it should return true', () => {
        expect(isPrime(13)).to.be.true;
    })
    it('if the input is 1 it should return false', () => {
        expect(isPrime(1)).to.be.false;
    })
    it('if the input is an object it should return false', () => {
        expect(isPrime({})).to.be.false;
    })
    it('if the input is an [] it should return false', () => {
        expect(isPrime([])).to.be.false;
    })
    it('if the input is a string it should return false', () => {
        expect(isPrime('')).to.be.false;
    })
})