const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
}

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip
  return request(`https://freegeoip.app/json/${ip}`);
} 

const fetchISSFlyOverTimes = (body) => {
  const { latitude, longitude } = JSON.parse(body)
  return request(`http://api.open-notify.org/iss/v1/?lat=${latitude}&lon=${longitude}`)
}

const flyOverForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(body => JSON.parse(body).response)
}


module.exports = { flyOverForMyLocation };