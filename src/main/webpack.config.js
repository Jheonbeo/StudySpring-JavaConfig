const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'webapp/resources/js'),
  entry: {
    home: './MainController.js',
  },
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: { 
    contentBase: '/resources/bundle/',
    hot: true 
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
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['bundle']
    })
  ],
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