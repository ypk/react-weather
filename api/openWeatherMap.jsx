var axios = require('axios');

const OPEN_WEATHER_MAP_API_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric';
const OPEN_WEATHER_MAP_API_KEY =  '61fa75a7a0141cfd41fb245da6b4b341';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var api_url = `${OPEN_WEATHER_MAP_API_URL}&appid=${OPEN_WEATHER_MAP_API_KEY}&q=${encodedLocation}`;

    return axios.get(api_url).then(function(response){
      if(response.data.cod && response.data.message){
        throw new Error(response.data.message);
      }else{
        return response.data.main.temp;
      }
    },function(response){
      throw new Error(response.data.message);
    })
  }
}
