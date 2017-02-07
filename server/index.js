import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();

const compiler = webpack(webpackConfig);

app.use(webpackHotMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    onInfo:true
}));

app.use(webpackMiddleware(compiler));

app.get("/*", (req, res)=>{
   res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(process.env.PORT, ()=>{
    console.log("Server is running");
});