const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
        //...
        {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: [
            {
                loader: 'file-loader',
                options: {
                name: 'images/[hash]-[name].[ext]',
                },
            },
            ],
        },
        ],
    },
    plugins:[
        new CleanWebpackPlugin()
    ],
    devServer:{
        static: path.join(__dirname, 'dist'),
        compress:true,
        port:5000
    }   
  //...
};