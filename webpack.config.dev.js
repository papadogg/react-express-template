import path from 'path';
import webpack from 'webpack';

export default {
    entry: [
        "webpack-hot-middleware/client",
        path.join(__dirname, "/client/index.js")
        ],
    output: {
        filename: "bundle.js",
        path: "/",
        publicPath: "/"
    },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
      loaders: [
          {
              test: /\.js?/,
              include: path.join(__dirname, "client"),
              loaders: ["react-hot-loader","babel-loader"]
          }
      ]  
    },
    resolve: {
        extensions: ['.js']
    }
};