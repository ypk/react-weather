var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var WeatherMapAPI = require('WeatherMapAPI');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function() {
        return {isLoading: false}
    },
    handleSearch: function(location) {
        this.setState({location: undefined, temp: undefined, isLoading: true, errorMessage: undefined});
        WeatherMapAPI.getTemperatureByLocation(location).then((data) => {
          if(data){
            var temp = data.current.temp_c;
            var location = data.location.name+", "+data.location.country;
            this.setState({location: location, temperature: temp, isLoading: false});            
          }
        }, (e) => {
            this.setState({isLoading: false, errorMessage: e.message});
        });
    },
    componentDidMount: function(){
      var query = this.props.location.query;
      var location = query.location;
      if(location && location.length > 0){
        this.handleSearch(location);
        window.location.hash = '#/';
      }
    },
    render: function() {
        var {isLoading, location, temperature, errorMessage} = this.state;
        function renderMessage() {
            if (isLoading) {
                return "Fetching Weather Data...";
            } else if (location && temperature) {
                return (
                    <WeatherMessage location={location} temperature={temperature}></WeatherMessage>
                );
            }
        }
        function renderErrorMessage() {
            if (typeof errorMessage === 'string') {
                return (<ErrorModal message={errorMessage}/>);
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
