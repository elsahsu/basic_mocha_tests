var assert = require('assert');
var fb = require('../fizzbuzz.js');

describe('FizzBuzz', function () {
  it('Zero should return FizzBuzz', function() {
    assert.equal(fb.fizzBuzz(0), "FizzBuzz");
  });
  it('One should return "1"', function() {
    assert.equal(fb.fizzBuzz(1), 1);
  });
  it('Three should return "Fizz"', function() {
    assert.equal(fb.fizzBuzz(3), 'Fizz');
  });
  it('Five should return "Buzz"', function() {
    assert.equal(fb.fizzBuzz(5), 'Buzz');
  });
  it('Fifteen should return "FizzBuzz"', function() {
    assert.equal(fb.fizzBuzz(15), 'FizzBuzz');
  });
  it('Sixteen should return "16"', function() {
    assert.equal(fb.fizzBuzz(16), 16);
  });
  it('1337 should return "1337"', function() {
    assert.equal(fb.fizzBuzz(1337), 1337);
  });
  it('Negative 1 should return "-1"', function() {
    assert.equal(fb.fizzBuzz(-1), -1);
  });
  it('Negative 15 should return "FizzBuzz"', function() {
    assert.equal(fb.fizzBuzz(-15), "FizzBuzz");
  });
});
