const webpack = require('webpack');

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
    devServer:{
        static: path.join(__dirname, 'dist'),
        compress:true,
        port:5000
    }   
  //...
};