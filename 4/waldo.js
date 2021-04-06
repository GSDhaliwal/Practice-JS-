// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach((name, i) =>{
    if (name === "Waldo") {
      found(i);
    }
  })
}

findWaldo(["Waldo", "Winston"], (index) => console.log(`Found Waldo at index ${index}!`));