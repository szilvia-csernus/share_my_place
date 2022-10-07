const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/SharePlace.js',
	// entry:
	// {
	// 	SharePlace: './src/SharePlace.js',
	// 	MyPlace: './src/MyPlace.js',
	// },
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		// filename: '[name].js',
		// path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
		// publicPath: 'assets/scripts/',
	},
	devtool: 'source-map',

	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{ useBuiltIns: 'usage', corejs: { version: 3 } },
							],
						],
					},
				},
			},
		],
	},
	plugins: [new CleanPlugin.CleanWebpackPlugin()],
};