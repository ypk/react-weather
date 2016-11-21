var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    this.setState({isLoading: true, errorMessage: undefined});
    openWeatherMap.getTemp(location).then((temp) => {
       this.setState({
        location: location,
        temperature: temp,
        isLoading: false
      })
    },(e) => {
      this.setState({isLoading: false, errorMessage: e.message});
    });

  },
  render: function(){
    var {isLoading, location, temperature, errorMessage} = this.state;
    function renderMessage(){
      if(isLoading){
        return "Fetching Weather Data...";
      }else if(location && temperature){
        return  <WeatherMessage location={location} temperature={temperature }></WeatherMessage>;
      }
    }
    function renderErrorMessage(){
      if(typeof errorMessage === 'string'){
        <ErrorModal message={errorMessage} />
      }
    }
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}></WeatherForm>
        <div className="text-center">
          {renderMessage()}
          {renderErrorMessage()}
        </div>
      </div>
    );
  }
});

module.exports = Weather;
