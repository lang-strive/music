const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const merge=require('webpack-merge');
const webpackBastConfig=require('./webpack.config');

/*清空webpack插件*/
webpackBastConfig.plugins=[];

module.exports=merge(webpackBastConfig,{	/*merge合并为一个js*/
	output:{
		publicPath:'dist/',	/*指定资源文件引用的目录*/
		filename:'[name].[hash].js'	/*hash 20位的hx值*/
	},
	plugins:[
		new ExtractTextPlugin({
			filename:'[name].[hash].css',
			allChunks:true 	/*所有分支都提取出来*/
		}),
		new webpack.DefinePlugin({
			'process.env':{
				NOOE_ENV:'"production"'
			}
		}),
		// new webpack.optimize.UglifyJsPlugin({	
		// 	compress:{
		// 		warnings:false
		// 	}
		// }),
		new HtmlWebpackPlugin({
			filename:'../index_prod.html',
			template:'./index.ejs',
			inject:false
		})
	]
});



