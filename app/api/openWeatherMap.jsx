var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=6d39b21788e11f781e167e92e280f716&units=imperial';

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		//  Template strings like the following one are ES6 features
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;


		return axios.get(requestUrl).then(function(res) {
		
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function(res) {
			throw new Error(res.data.message);
		});

	}
}