const chai = require('chai'); // 1
const assert = chai.assert;

const nameInverter = require('../nameInvert'); // 2

describe("nameInverter", () => {
  it('should return an empty string when passed an empty string', function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a single name when passed a single name', function() {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a single name when passed a single name with extra spaces', function() {
    const inputName = " name ";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a last-name, first-name when passed a first and last-name', function() {
    const inputName = "firstName lastName";
    const expectedOutput = "lastName, firstName";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a last-name, first-name when passed a first and last-name with extra spaces', function() {
    const inputName = " firstName lastName ";
    const expectedOutput = "lastName, firstName";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return an empty string when passed a single honorific', function() {
    const inputName = "Dr. ";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return honorific first-name when passed honorific first-name', function() {
    const inputName = "Dr. first";
    const expectedOutput = "Dr. first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a honorific last-name, first-name when passed honorific first-name last-name', function() {
    const inputName = "Dr. first-name last-name";
    const expectedOutput = "Dr. last-name, first-name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words', function() {
    const inputName = " Dr. first-name last-name ";
    const expectedOutput = "Dr. last-name, first-name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return an error when name is undefined', function() {
    const inputName = undefined;
    const expectedOutput = "Error";
    assert.equal(nameInverter(inputName), expectedOutput);
  }); 
});