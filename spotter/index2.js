const { flyOverForMyLocation } = require('./iss2')

const printPassTimes = (passTimes) => {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

flyOverForMyLocation()
  .then(body => printPassTimes(body))
  .catch(error => console.log("It didn't work: ", error.message))