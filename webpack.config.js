const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, "src", "app.js"),
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
              "babel-loader"
            ],
          },
          {
            test: /\.css$/,
            include: path.join(__dirname, './src/'),
            use: [
              "style-loader", 
              "css-loader",
            ]
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
          },
        },
      ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
        publicPath: "/"
    }, 
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true,
        historyApiFallback: true
    }
};