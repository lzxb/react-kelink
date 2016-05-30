var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/app', //编译的入口文件
    },
    output: {
        publicPath: '/build/', //服务器根路径
        path: './static/build', //编译到当前目录
        filename: '[name].js' //编译后的文件名字
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /^node_modules$/,
            loader: 'babel?presets=es2015'
        }, {
            test: /\.css$/,
            exclude: /^node_modules$/,
            loaders: ['style', 'css', 'autoprefixer']
        }, {
            test: /\.less/,
            exclude: /^node_modules$/,
            loaders: ['style', 'css', 'autoprefixer', 'less'],
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=[name].[ext]'
        }, {
            test: /\.(png|jpg)$/,
            exclude: /^node_modules$/,
            loader: 'url?limit=20000&name=[name].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
        }, {
            test: /\.jsx$/,
            exclude: /^node_modules$/,
            loaders: ['jsx', 'babel?presets[]=es2015,presets[]=react']
        }]
    },
    plugins: [
<<<<<<< HEAD
        //        new webpack.DefinePlugin({ //编译成生产版本
        //            'process.env': {
        //                NODE_ENV: JSON.stringify('production')
        //            }
        //        })
=======
//        new webpack.DefinePlugin({ //编译成生产版本
//            'process.env': {
//                NODE_ENV: JSON.stringify('production')
//            }
//        })
>>>>>>> 4d1067ce1956f9b98d861e3bcb9198ca8fc326e9
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'], //后缀名自动补全
    }
};