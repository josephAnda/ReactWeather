var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

//  Note that the onSearch prop of WeatherForm is passed to it through the handleSearch property in the 
//  Weather container component (this component).  This design pattern keeps complexity of functions inside
//  of the container components and outside of the presentational ones.  
var Weather = React.createClass({
	getInitialState: function() {
		return {
			location: 'Miami',
			temp: 88
		}
	},
	handleSearch: function(location) {
		var that = this;
		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location, 
				temp: temp
			});
		}, function (errorMessage) {
			alert(errorMessage);
		});

	},
	render: function() {

		//  ES6 destructuring
		var {temp, location} = this.state;

		return (
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch}/>
				<WeatherMessage location={location} temp={temp} />
			</div>
		)
	}
});

module.exports = Weather;