
//FUNCTIONS BEST PRACTICES - REFACTOR I
const joinList = function(array) {
  let finalString = "";
  if (!array) {
    finalString += "";
  } else {
    for (let i = 0; i < array.length; i++) {
      i === (array.length - 1) ? finalString += array[i] : finalString += (array[i] + ", ")
    } 
  }
  return finalString;
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
const concept = joinList("");
console.log(`Today I learned about ${concept}.`)