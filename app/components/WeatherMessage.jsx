var React = require('react');

//  We can use destructuring syntax within the argument to reference attributes of 'props'
var WeatherMessage = ({temp, location}) => {
		// var {temp, location} = props;
		return (
			<p>It is {temp} in {location}.</p>
		)
	};

module.exports = WeatherMessage;