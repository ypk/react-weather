var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then((temp) => {
       this.setState({
        location: location,
        temperature: temp,
        isLoading: false
      })
    },(err) => {
      this.setState({isLoading: false});
      alert(err);
    });

  },
  render: function(){
    var {isLoading, location, temperature} = this.state;
    function renderMessage(){
      if(isLoading){
        return "Fetching Weather Data...";
      }else if(location && temperature){
        return  <WeatherMessage location={location} temperature={temperature }></WeatherMessage>;
      }
    }
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        <div className="text-center">
          {renderMessage()}
        </div>
      </div>
    );
  }
});

module.exports = Weather;
