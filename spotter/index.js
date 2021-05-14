const { fetchMyIP, fetchCoordsByIP } = require('./iss');

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

fetchCoordsByIP('pp', (error, coords) => {

  if (error) {
    console.log('There was an error in the request:\n', error);
  }

  if (coords) {
    console.log(coords);
  }
})