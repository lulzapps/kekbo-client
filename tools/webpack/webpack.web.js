const path = require('path');

module.exports = 
{
  entry: ['./src/web.tsx'], // Entry point for the web app
  output: 
  {
    filename: 'web.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // Ensure resources are served correctly
  },
  module: 
  {
    rules: require('./webpack.rules'), // Reuse rules
  },
  resolve: 
  {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
    alias: require('./webpack.aliases'), // Reuse aliases
  },
  devServer: 
  {
    static: path.resolve(__dirname, 'dist'),
    port: 4000, // Adjust as needed
    open: true,
    historyApiFallback: true, // Ensures single-page app routing works
  },
  stats: 'minimal',
};
