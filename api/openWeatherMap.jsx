var axios = require('axios');

const OPEN_WEATHER_MAP_API_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric';
const OPEN_WEATHER_MAP_API_KEY =  '61fa75a7a0141cfd41fb245da6b4b341';

const APIXU_WEATHER_MAP_API_URL = 'http://api.apixu.com/v1/current.json?key=';
const APIXU_WEATHER_MAP_API_KEY = '2b31aebdb6eb4c1e8ae123158162211';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    //var api_url = `${OPEN_WEATHER_MAP_API_URL}&appid=${OPEN_WEATHER_MAP_API_KEY}&q=${encodedLocation}`;
    var api_url = `${APIXU_WEATHER_MAP_API_URL}${APIXU_WEATHER_MAP_API_KEY  }&q=${encodedLocation}`;
    return axios.get(api_url).then(function(response){
      if(response.data.error && response.data.error.message){
        throw new Error(response.data.error.message);
      }else{
        return response.data.current.temp_c;
      }
    },function(response){
      throw new Error(response.data.message);
    })
  }
}
