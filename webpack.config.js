var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	], //  Where webpack should start processing the code
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',  //  <---Attempt a bug fix here by reffing 'jquery' not 'jQuery'
			//  Checked out the issue above.  It wasn't the problem but I'm fixing anyway for consistency.
			'jQuery': 'jquery'
		})
	],
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
			openWeatherMap: 'app/api/openWeatherMap.jsx',
			Greeter: 'public/components/Greeter.jsx',
			GreeterMessage: 'public/components/GreeterMessage.jsx',
			GreeterForm: 'public/components/GreeterForm.jsx',
			ErrorModal: 'app/components/ErrorModal.jsx',
			applicationStyles: 'app/styles/app.css'
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
	},
	devtool: 'cheap-module-eval-source-map'  //  Sourcemap for debugging bundled javascript files with 'debugger' copmmand
};
