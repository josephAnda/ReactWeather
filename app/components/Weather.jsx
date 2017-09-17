var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

//  Note that the onSearch prop of WeatherForm is passed to it through the handleSearch property in the
//  Weather container component (this component).  This design pattern keeps complexity of functions inside
//  of the container components and outside of the presentational ones.
var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false,
			errorMessage: undefined
		}
	},
	handleSearch: function(location) {
		var that = this;


		this.setState({
			isLoading: true,
			errorMessage: undefined,
			location: undefined,
			temp: undefined
		});

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				isLoading: false,
				temp: temp,
				location: location
			});
		}, function(e) {

			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
		});
	},
	componentDidMount: function() {
		var location = this.props.location.query.location;

		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}
	},
	componentWillReceiveProps: function(newProps) {
		var location = this.props.location.query.location;

		if (location && location.length > 0) {
			this.handleSearch(location);
			window.location.hash = '#/';
		}

	},
	render: function() {

		//  ES6 destructuring
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage() {
			if(isLoading) {
				return <h3 className="text-center">Fetching weather . . . </h3>;
			} else if (temp && location) {
				return <WeatherMessage location={location} temp={temp} />;
			}
		}

		function renderError () {
			if (typeof errorMessage === 'string') {
				return (
					<ErrorModal message={errorMessage} />
				)
			}
		}

		return (
			<div>
				<h1 className="text-center page-title">Get Weather</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
				{renderError()}
			</div>
		)
	}
});

module.exports = Weather;
