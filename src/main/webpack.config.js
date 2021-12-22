const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'webapp/resources/js'),
  entry: {
    home: './MainController.js',
  },
  cache: false,
  devtool: 'inline-source-map',
  mode: 'development',
/*
  devServer: { 
	static: path.resolve(__dirname, 'webapp/resources/bundle'),
	port: 3000,
    hot: true 
  },
*/
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
	      	test: /\.css$/,
	      	use: ['style-loader', 'css-loader']
    	}
	]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  externals: {
    moment: 'moment'
  }
};