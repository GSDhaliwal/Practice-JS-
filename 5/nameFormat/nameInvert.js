const nameInverter = function(name) {
  if (name === undefined) {
    return "Error";
  }

  name = name.trim()
  if (name === "" || name === "Dr." || name === "Mr." || name === "Ms." || name === "Mrs.") return "";

  let nameArray = name.split(" ");

  if (nameArray[0] === "Dr." || nameArray[0] === "Mr." || nameArray[0] === "Ms." || nameArray[0] === "Mrs.") {
    if (nameArray.length === 2) {
      return nameArray.join(" ")
    } else {
      return `${nameArray[0]} ${nameArray[2]}, ${nameArray[1]}`
    }
  }

  if (nameArray.length === 1) {
    return name.trim()
  } else  if (nameArray.length === 2 && nameArray[0]) {
    return nameArray.reverse().join(", ").trim()
  }
}

console.log(nameInverter("   Dr."))


module.exports = nameInverter;