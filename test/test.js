// test/test.js
const chai = require('chai');
const expect = chai.expect;

const helloWorld = require('../src/index');

describe('HelloWorld Function', function() {
  it('should return Hello, world!', function() {
    expect(helloWorld()).to.equal('Hello, world!');
  });
});
