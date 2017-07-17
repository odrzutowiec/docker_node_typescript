const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

module.exports = {
	entry: './src/index.ts',
	target: 'node',
	output: {
		path: __dirname + '/dist',
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'babel-loader!ts-loader'
			}
		]
	}
}
