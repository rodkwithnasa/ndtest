// webpack.config.js

const path = require('path');;


module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
//    clean: true,
	filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        type: 'asset/resource',
        generator: {
          // Emits the file as 'index.html' in the dist root
          filename: '[name][ext]',
		  emit: true,
        },
      },
      {
        test: /\.css$/,
        type: 'asset/resource',
		sideEffects: true,
        generator: {
          // Moves files to 'dist/css/style.css' (or whatever they were named)
          filename: 'css/[name][ext]',
		  emit: true,
        },
      },
    ],
  },

};
