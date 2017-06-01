/**
 * Created by matrix on 2017/4/27.
 */
var webpack = require("webpack");
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');//ExtractTextPlugin：分离CSS和JS文件
var $ = require("jquery");

module.exports = {
    entry: __dirname + "/src/js/release/img-index.js",
    output: {
        path: __dirname + '/build',
        filename: "finally.js"
    },
    module: {
        rules: [

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true //css压缩
                            }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true //css压缩
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                minimize: true //css压缩
                            }
                        }
                    ]
                })
            },
            {
                test : /\.vue$/,
                loader : 'vue-loader',
                options : {
                    postcss : [require('autoprefixer')({browsers : ['last 3 versions']})]
                }
            },
            {
                test : /\.js$/,
                loader : 'babel-loader',
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                loader: 'url-loader',
                query: {
                    /*
                     *  limit=10000 ： 10kb
                     *  图片大小小于10kb 采用内联的形式，否则输出图片
                     * */
                    limit: 10000,
                    name: 'images/[name]-[hash:8].[ext]'
                }

            },
            {
                test: /\.html$/,
                loader: "html-loader?attrs=images:src images:data-src",
                query: {
                    minimize: true
                }
            },
            {
                //文件加载器，处理文件静态资源
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=./fonts/[name]-[hash:8].[ext]'
            }

        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options:{
                postcss: function () {
                    return [precss, autoprefixer];
                },
                devServer: {
                    contentBase: "./build", //本地服务器所加载的页面所在的目录
                    colors: true, //终端中输出结果为彩色
                    historyApiFallback: true, //不跳转
                    inline: true //实时刷新
                }
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("flow.css")
    ]
};