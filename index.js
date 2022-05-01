require('@babel/register')({
    "plugins": [
        [
            "file-loader",
            {
                "name": "[name]-[md4:hash:20].[ext]",
                "extensions": ["png", "jpg", "jpeg", "gif", "svg"],
                "publicPath": "/static/img/",
                "outputPath": null,
                "context": "",
                "limit": 0
            }
        ]
    ]
});
const path = require('path');
const express = require('express');
const webpack = require('webpack');
// const webpackMiddleware = require('webpack-dev-middleware');
const { ChunkExtractor } = require('@loadable/server');
const webpackMerge = require('webpack-merge').merge;
const webpackConfig = require('./webpack.config');
var { render } = require('./src/server.jsx');

var compiler = webpack(webpackMerge(webpackConfig, {
    mode: 'development'
}));

var app = express();

// app.use(webpackMiddleware(compiler, {

// }));

app.use('/static', express.static('dist'));

app.get('*', (req, res) => {
    var webExtractor = new ChunkExtractor({
        statsFile: path.resolve(__dirname, './dist/stats.json')
    })
    var rendered_string = render(req.url);
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
        ${webExtractor.getLinkTags()}
        ${webExtractor.getStyleTags()}
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Server render react app</title>
    </head>
    <body>
        <div id="app_root">${rendered_string}</div>
        ${webExtractor.getScriptTags()}
    </body>
    </html>
    `);
});

app.listen(8000, () => {
    console.log('Listenning at port 8000');
});


