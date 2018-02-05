module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // loads our es6 into vanilla javascript
        loader: 'babel-loader',
        // this would catch all the javascript files
        test: /\/.js$/,
        // excludes building node modules
        exclude: /node_modules/
      }
    ]
  },
  // creates a developement server to see our results
  devServer: {
    port: 3000,
    contentBase: './build',
    inline: true
  }
}