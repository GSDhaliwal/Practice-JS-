const titleCase = (sentence) => {
  return sentence ? sentence.toLowerCase().split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ").trim() : "";
}

console.log(titleCase("this is an example")) //should return "This Is An Example"
console.log(titleCase("test")) //should return "Test"
console.log(titleCase("i r cool")) //should return "I R Cool"
console.log(titleCase("WHAT HAPPENS HERE")) //should return "What Happens Here"
console.log(titleCase("")) //should return ""
console.log(titleCase("A")) //should return "A"