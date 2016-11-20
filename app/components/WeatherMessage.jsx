var React = require('react');

var WeatherMessage = ({location, temperature}) => {
  return (
    <h4>It's {temperature} in {location}</h4>
  );
};

module.exports = WeatherMessage;
