const webpack = require('webpack');

module.exports = {
	entry: {
		app: './src/main.js',
	},
	output: {
		filename: 'bundle.js',
		path: `${__dirname}/public/build`,
		publicPath: 'build/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: [/node_modules/, /public/]
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				exclude: [/node_modules/, /public/]
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{ 
				test: /\.(css|sass|scss|less)$/,
				loader: 'style-loader!css-loader!sass-loader!less-loader!autoprefixer-loader',
			  	exclude: [/node_modules/, /public/] 
			},
			   // start font-awesome
			{ 
				test: /\.css$/,
				loader: 'style-loader!css-loader?sourceMap'
			}, 
			{
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			}, 
			{
				test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			}, 
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader?limit=10000&mimetype=application/octet-stream"
			}, 
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file-loader"
			}, 
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader?limit=10000&mimetype=image/svg+xml"
			},
			   // end font-awesome
			{
				test: /\.jpg$/,
				loader: 'url-loader?limit=1000&mimetype=image/jpg'
			},
			{
				test: /\.png$/,
				loader: 'url-loader?limit=1000&mimetype=image/png'
			}
		]
	}
}