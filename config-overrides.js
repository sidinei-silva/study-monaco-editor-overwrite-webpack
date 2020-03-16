const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
// Specify separate paths
const path = require('path');
const APP_DIR = path.resolve(__dirname, './src');
const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');


module.exports = function override(config, env) {
  config.plugins.push(new MonacoWebpackPlugin());
  config.module.rules.push = (
    {
      test: /\.css$/,
      include: APP_DIR,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          namedExport: true,
        },
      }],
    }, 
    {
      test: /\.css$/,
      include: MONACO_DIR,
      use: ['style-loader', 'css-loader'],
    }
  )
  config.plugins.push(
    new MonacoWebpackPlugin({
      languages: ['javascript','typescript','css','html','json']
    })
  )
  return config;
}