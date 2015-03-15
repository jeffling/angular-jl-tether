var bowerRoot, webpack;
webpack = require('webpack');

module.exports = {
  cache: true,
  entry: 'jl-tether.coffee',
  output: {
    libraryTarget: 'umd',
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
  plugins: [new webpack.ResolverPlugin([new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])], ['normal', 'loader'])]
};
