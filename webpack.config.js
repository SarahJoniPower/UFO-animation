const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")

module.exports = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    module: {
        rules: [{
            test: /\.[jt]sx?$/, exclude: /node_modules/, use: [{
                loader: "babel-loader", options: {
                    presets: [
                        ['@babel/preset-env', {
                            "targets": "defaults"
                        }],
                        '@babel/preset-react',
                        ['@babel/preset-typescript', {
                            "isTSX": true,
                            "allExtensions": true
                        }],
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
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true,
    },
}


