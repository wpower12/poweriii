const path = require('path');

module.exports = {
  entry: {
    index:    './src/terminal.js',
    blog:     './src/blog.js',
    post:     './src/post.js',
    forces:   './src/projects/forces.js',
    traffic:  './src/projects/traffic.js',
    tribes:   './src/projects/tribes.js',
    antbrain: './src/projects/antbrain.js'
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