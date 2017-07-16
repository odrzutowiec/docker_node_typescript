const path = require('path');

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: './dist/index.js'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'babel-loader!ts-loader'
			}
		]
	}
}
