const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, flyOverForMyLocation } = require('./iss');

/*
fetchMyIP((error, ip) => {

  if (error) {
    console.log('There was an error in the request:\n', error);
  }

  if (ip) {
    console.log('It worked! Return IP:',ip);
  }
})
*/

/*
fetchCoordsByIP('pp', (error, coords) => {

  if (error) {
    console.log('There was an error in the request:\n', error);
  }

  if (coords) {
    console.log(coords);
  }
})*/

/*
fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, flyOverTimes) => {

  if (error) {
    console.log('There was an error in the request:\n', error);
  }

  if (flyOverTimes) {
    console.log(flyOverTimes);
  }
})
*/

const printPassTimes = (passTimes) => {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

flyOverForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});