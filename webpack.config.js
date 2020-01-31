const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    dashboard: './src/app/index.js',
    popup: './src/popup/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      { test: /\.scss/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: (url, resourcePath, context) => {
            console.log('url', url)
            console.log('resourcePath', resourcePath)
            console.log('context', context)
            return `images/${path.relative(context, resourcePath)}`
          },
          name: '[path][name].[ext]'
        }
      },
      { test: /\.jsx$/, loader: 'babel-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['dashboard'],
      filename: 'index.html',
      template: "!!html-webpack-plugin/lib/loader.js!./src/index.html"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['popup'],
      filename: 'popup.html',
      template: "!!html-webpack-plugin/lib/loader.js!./src/popup.html"
    })
  ]
}
