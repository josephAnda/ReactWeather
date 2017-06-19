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
			isLoading: false,
			error: false

		}
	},
	handleSearch: function(location) {
		var that = this;

		
		this.setState({isLoading: true});
		
		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				isLoading: false,
				temp: temp,
				location: location	
			});
		}, function (errorMessage) {
			alert(errorMessage);
			that.setState({
				isLoading: false,
				location: false,
				error: true
			});
		});

	},
	render: function() {

		//  ES6 destructuring
		var {isLoading, temp, location, error} = this.state;

		function renderMessage() {
			if(isLoading) {
				return <h3>Fetching weather . . . </h3>;
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp} />;
			} else if (error) {
				return <h3>There was an error</h3>;
			} else {
				return <h3>Enter a city to get the weather</h3>
			}
		}

		return (
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		)
	}
});

module.exports = Weather;