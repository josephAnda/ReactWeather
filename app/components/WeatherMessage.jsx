var React = require('react');

//  We can use destructuring syntax within the argument to reference attributes of 'props'
var WeatherMessage = ({temp, location}) => {
		// var {temp, location} = props;
		return (
			<h3 className="text-center">It is {temp} in {location}.</h3>
		)
	};

module.exports = WeatherMessage;
