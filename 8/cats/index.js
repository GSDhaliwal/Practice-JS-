const { fetchBreedDescription } = require("./breeds");
let myArgs = process.argv.slice(2);
let shortenedBreedName = myArgs[0].split('').slice(0, 4).join('');
let breed = 'https://api.thecatapi.com/v1/images/search?breed_ids=' + shortenedBreedName;

fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});