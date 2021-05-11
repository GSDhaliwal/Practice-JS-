const request = require("request");

const fetchBreedDescription = (breedname, callback) => {
  request(breedname, (error, response, body) => {
    if (error) {
      callback(error, null);
    }

    let JSONParse = JSON.parse(body); //parse body from string to an object
    
    if (JSONParse[0]) {
      let breeds = JSONParse[0].breeds; //go into first element of array of parsed object, and look for key 'breeds'
      let breedDescription = breeds[0].description; //go into first element of array of 'breeds' object, and look for key 'description'
      callback(null, breedDescription);
    } else {
      const notFound = 'Breed Not Found';
      callback(null, notFound);
    }
    }
  );
};

module.exports = { fetchBreedDescription };