/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    
  if (error) {
      callback(error, null);
    }

    if (response.statusCode === 200) {
      callback(null, JSON.parse(body).ip);
    } else {
      callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`), null);
    }

  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    
  if (error) {
      callback(error, null);
    }

    if (response.statusCode === 200) {
      const coordsObject = 
        { 
          latitude: JSON.parse(body).latitude,
          longitude: JSON.parse(body).longitude
        }
      callback(null, coordsObject);
    } else {
      callback(Error(`Status Code ${response.statusCode} when fetching Coords by IP. Response: ${body}`), null);
    }

  });
};

const fetchISSFlyOverTimes = (coordsObj, callback) => {
  request(`http://api.open-notify.org/iss/v1/?lat=${coordsObj.latitude}&lon=${coordsObj.longitude}`,(error, response, body) => {

    if (error) {
      callback(error, null);
    }

    if (response.statusCode === 200) {
      callback(null, JSON.parse(body).response)
    } else {
      callback(Error(`Status Code ${response.statusCode} when fetching fly over times. Response: ${body}`), null);
    }
  })
}

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };