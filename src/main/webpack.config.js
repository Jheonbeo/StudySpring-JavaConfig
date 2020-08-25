const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'webapp/resources/js'),
  entry: {
    home: './app.js',
  },
  output: {
    path: path.resolve(__dirname, 'webapp/resources/bundle'),
    publicPath: '/resources/bundle/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
      rules: [
          {
              test: /\.jsp$/,
              use: {loader: 'html-loader'}
          },
	  {
	      test: /\.css$/,
	      use: ['style-loader', 'css-loader']
    	  }
      ]
  },
  externals: {
    moment: 'moment'
  }
};