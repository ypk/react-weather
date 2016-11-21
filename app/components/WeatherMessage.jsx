var React = require('react');

var WeatherMessage = ({location, temperature}) => {
  return (
    <h3 className="text-center">It's {temperature}&#8451; in {location}</h3>
  );
};

module.exports = WeatherMessage;
