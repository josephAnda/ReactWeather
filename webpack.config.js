module.exports = {
	entry: './public/app.jsx', //  Where webpack should start processing the code
	output: {
		path: __dirname,  //  Node.js syntax for path to current folder
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			Greeter: 'public/components/Greeter.jsx',
			GreeterMessage: 'public/components/GreeterMessage.jsx',
			GreeterForm: 'public/components/GreeterForm.jsx'
		},
		extensions: [ "", '.js', '.jsx']  //  This array tells webpack what extensions to process 
	},
	module: {
		loaders: [  //  loaders are for file types that webpack can't read by default
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				},
				test: /\.jsx?$/,  //  'test' needs a RegEx to tell what files should be parsed
				exclude: /(node_modules|bower_components)/
			}
		]
	}
};