const path = require('path');

module.exports = {
  entry: {
    index: './src/terminal.js',
    forces: './src/projects/forces.js'
  },
  output: {
    filename: '[name]_bundle.js',
    path: __dirname + '/dist/js'
  },
  module: {
  	rules: [
  		{
	  		test: /\.css$/,
	  		use: [
	  			'style-loader',
	  			'css-loader'
	  		]	
  		}
	]
  }
};