module.exports = {
	entry: './app/app.jsx', //  Where webpack should start processing the code
	output: {
		path: __dirname,  //  Node.js syntax for path to current folder
		filename: './public/bundle.js'
	},
	resolve: {  //  This helps us simplify the pathnames whenever we 'require' files in our js or jsx
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			Navigation: 'app/components/Navigation.jsx',
			Weather: 'app/components/Weather.jsx',
			About: 'app/components/About.jsx',
			Examples: 'app/components/Examples.jsx',
			WeatherMessage: 'app/components/WeatherMessage.jsx',
			WeatherForm: 'app/components/WeatherForm',
			openWeatherMap: 'app/api/openWeatherMap.jsx'
		},
		extensions: [ "", '.js', '.jsx']  //  This array tells webpack what extensions to process 
	},
	module: {
		loaders: [  //  loaders are for file types that webpack can't read by default
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,  //  'test' needs a RegEx to tell what files should be parsed
				exclude: /(node_modules|bower_components)/
			}
		]
	}
};