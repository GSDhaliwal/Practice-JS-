class Pizza {

  constructor(size, crust) {
    this.size = size,
    this.crust = crust,
    this.toppings = ["cheese"]
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  makeItWellDone() {
    this.wellDone = true;
  }

  set size(size) {
    if (size === "large" || size === "medium" || size === "small") {
      this._size = size;
    }
  }


  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + (this.toppings.length * toppingPrice);
  }
  
}
/*
let pizza1 = new Pizza('large', 'regular');
console.log("base tops ", pizza1);
pizza1.addTopping('bacon')
pizza1.addTopping('mushroom')
pizza1.makeItWellDone();
console.log("final Pizza 1: ", pizza1);

let pizza2 = new Pizza('medium', 'thin');
pizza2.addTopping('bacon')
console.log('Pizza2: ', pizza2)
*/

let pizza = new Pizza('large');
console.log(pizza)
console.log(pizza.price);
pizza.size = 'small'
console.log(pizza)