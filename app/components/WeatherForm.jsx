var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length > 0){
      this.refs.location.value='';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return (
      <div>
        <h1 className="page-title text-center">Get Weather</h1>
        <form onSubmit={this.onFormSubmit}>
          <p>Enter a city or an IATA Airline Code</p>
          <input type="search" placeholder="(e.g.: London)" ref="location"/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
