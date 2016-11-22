var React = require('react');
var geolocated = require('react-geolocated');


var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');


var Weather = React.createClass({
    getInitialState: function() {
        return {isLoading: false}
    },
    getGeoData: function(){
      return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <table>
            <tbody>
              <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
              <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
              <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
              <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
              <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
            </tbody>
          </table>
          : <div>Getting the location data&hellip; </div>;
    },
    handleSearch: function(location) {
        this.setState({location: undefined, temp: undefined, isLoading: true, errorMessage: undefined});
        openWeatherMap.getTemp(location).then((temp) => {
            this.setState({location: location, temperature: temp, isLoading: false})
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
                {this.getGeoData()}
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
