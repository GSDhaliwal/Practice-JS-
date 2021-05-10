const request = require("request");
let myArgs = process.argv.slice(2);
let shortenedBreedName = myArgs[0].split('').slice(0, 4).join('');
let breed = 'https://api.thecatapi.com/v1/images/search?breed_ids=' + shortenedBreedName;

request(breed, (error, response, body) => {
  console.log('error:', error);
  if (error) {
    console.log("Request Failed");
  } else {
    let JSONParse = JSON.parse(body); //parse body from string to an object
    if (JSONParse[0] === undefined) {
      console.log('Breed Not Found');
    } else {
      let breeds = JSONParse[0].breeds; //go into first element of array of parsed object, and look for key 'breeds'
      let breedDescription = breeds[0].description; //go into first element of array of 'breeds' object, and look for key 'description'
      console.log(breedDescription);
    }
  }
});