const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: __dirname+"/main.js",
    output:{
        path:__dirname+"/dist",
        filename:'script/[name].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: 'raw-loader',
            }
        ]
    },
    plugins:[
        new CopyPlugin({
            patterns: [
                {from: __dirname+"/public/img",to: __dirname+"/dist/img"},
                {from: __dirname+"/public/css",to: __dirname+"/dist/css"},
                {from: __dirname+"/public/img/favicon.ico",to: __dirname+"/dist/favicon.ico"}
            ]
        }),
        new HtmlWebpackPlugin({
                template: __dirname+"/public/index.html",
                chunks: "all",
                hash: true,
                favicon: './public/img/favicon.ico',
                inject: "head",
                filename: "index.html"
            })
    ],
    devServer: {
        compress: true,
        port: 9090
    },
    watchOptions: {
        aggregateTimeout: 200,
        ignored: "/node_modules"
    }
}