const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")
module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    module: {
        rules: [{
            test: /\.(jsx|js)$/, exclude: /node_modules/, use: [{
                loader: "babel-loader", options: {
                    presets: [
                        ['@babel/preset-env', {
                            "targets": "defaults"
                        }],
                        '@babel/preset-react'
                    ]
                }
            }]
        },
        {    
            test: /\.css$/, 
            use: [
               'style-loader', 'css-loader' 
            ]
        }]
    },
    plugins: [new HtmlWebpackPlugin()],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true,
    },
}


