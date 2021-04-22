const chai = require('chai'); // 1
const assert = chai.assert;

const buyCar = require('../buyCar.js'); // 2

describe("#buyCar()", function() { // 3
  it("should return true if color is pink", () => {
    const car = {color: "pink"}
    assert.equal(buyCar(car), true)
    //same test just diff way or writing
    //assert.istrue(buyCar(car))
  })
  it("should return false when there are no details about the car", () => {
    const car = {};
    assert.equal(buyCar(car), false)
  })
  it("should return false if it's a hatchback", function() { // 4
    const car = {type: "hatchback"};
    assert.equal(buyCar(car), false)
    //same test just diff way or writing
    //assert.isFalse(buyCar(car))
  });
  it("should return false when the car is a hatchback and pink", () => {
    const car = 
    {
      color: "pink",
      type: "hatchback"
    }
    assert.equal(buyCar(car), false)
    //same test just diff way or writing
    //assert.isFalse(buyCar(car))
  })
  it("should return true when the car has 6 litres/100km and is under or equal to $5,000", () => {
    const car = 
    {
      color: "black",
      type: "sedan",
      litresPer100km: 6,
      price: 4999
    }
    assert.equal(buyCar(car), true)
    //same test just diff way or writing
    //assert.isTrue(buyCar(car))
  })
  it("should return true when the car has 11 litres/100km and is under or equal to $5,000", () => {
    const car = 
    {
      color: "black",
      type: "sedan",
      litresPer100km: 11,
      price: 4999
    }
    assert.equal(buyCar(car), true)
    //same test just diff way or writing
    //assert.isTrue(buyCar(car))
  })
  it("should return false when the car has 6 litres/100km and is over $5,000", () => {
    const car = 
    {
      color: "black",
      type: "sedan",
      litresPer100km: 6,
      price: 5001
    }
    assert.equal(buyCar(car), false)
    //same test just diff way or writing
    //assert.isFalse(buyCar(car))
  })
  it("should return true when the car has 11 litres/100km and is over $5,000", () => {
    const car = 
    {
      color: "black",
      type: "sedan",
      litresPer100km: 11,
      price: 5001
    }
    assert.equal(buyCar(car), false)
  })
  it("should return false when the car has 5 litres/100km and is under or equal to $5,000", () => {
    const car = 
    {
      color: "black",
      type: "sedan",
      litresPer100km: 5,
      price: 5000
    }
    assert.equal(buyCar(car), false)
  })
  it("should return true when the car has 12 litres/100km and is under or equal to $5,000", () => {
    const car = 
    {
      color: "black",
      type: "sedan",
      litresPer100km: 12,
      price: 5000
    }
    assert.equal(buyCar(car), false)
  })
  it("should return false if there are no details about the car", () => {
    const car = undefined;
    assert.equal(buyCar(car), undefined)
    //same test just diff way or writing
    //assert.isUndefined(buyCar(car))
  })

});