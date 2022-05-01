const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
module.exports = {
  mode: isDevelopment ? 'development' : 'production', //set to production for production mode or development for development mode
  devtool: isDevelopment ? 'eval-source-map' : 'source-map', //source map for debugging

  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  // override the default output path / to avoid conflicts with the dist folder
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], //can read files with .js , .jsx , ts, tsx extensions
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'app'),
    },
    hot: true,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      //this is the template file that will be used to generate the index.html file
    }),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/, // is this a js or jsx file? Ends with .js or .jsx? or tsx
        exclude: /node_modules/, // exclude the node_modules folder due the fact that it contains all the packages
        use: {
          loader: 'babel-loader', // use the babel-loader to transpile the jsx and js files. 
          // Babel loader can't to read tsx files, so we need to use the ts-loader to transpile the tsx files
          //so we add the comprehension to the babel-loader using yarn add @babel/preset-typescript -D
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
}
