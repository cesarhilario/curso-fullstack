const path = require('path');

module.exports = {
  devServer: {
    port: 9000,
    contentBase: './public'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-react-jsx', 
            'babel-plugin-transform-react-jsx']
          },
          
        }
      }
    ]
  }
}