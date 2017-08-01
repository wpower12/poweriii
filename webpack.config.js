const path = require('path');

module.exports = {
  entry: './src/terminal.js',
  output: {
    filename: './js/bundle_front.js',
    path: path.resolve(__dirname, 'dist')
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