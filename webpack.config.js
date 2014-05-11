var bowerRoot, webpack;
webpack = require('webpack');

module.exports = {
  cache: true,
  debug: true,
  entry: 'ng-tether.coffee',
  output: {
    libraryTarget: 'umd',
    filename: 'ng-tether.js'
  },
  module: {
    loaders: [
      {
        test: /\.coffee$/,
        loader: 'coffee'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['', 'web_modules', 'node_modules', 'bower_components'],
    extensions: ['', '.coffee', '.js']
  },
  plugins: [new webpack.ResolverPlugin([new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])], ['normal', 'loader']), new webpack.ContextReplacementPlugin(/.*$/, /a^/)],
  devtool: 'eval'
};
