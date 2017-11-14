const webpack=require('webpack');
const path=require('path');
const ExtractTextPlugin=require('extract-text-webpack-plugin');

var config={
	entry:{
		main:"./main.js"
	},
	output:{
		path:path.join(__dirname,'./dist'),
		publicPath:'/dist/',	/*指定资源文件引用的目录*/
		filename:'main.js'
	},
	module:{
		loaders:[
			{
				test:/\.vue$/,
				loader:'vue-loader',
				options:{
					loaders:{
						css:ExtractTextPlugin.extract({
							use:'css-loader',
							fallback:'vue-style-loader'
						}),
						sass:ExtractTextPlugin.extract({
							use:['css-loader','sass-loader'],
							fallback:'vue-style-loader'
						})
					}
				}
			},
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:/node_modules/,
				query:{
					"presets":["es2015"],
					"plugins":["transform-runtime"],
					"comments":false
				}
			},
			{
				test:/\.css$/,
				use:ExtractTextPlugin.extract({
					use:'css-loader',
					fallback:'style-loader'
				})
				
			},
			{
				test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				loader:'url-loader?limit=1024'
			}
		]
	},
	plugins:[
		new ExtractTextPlugin('main.css')
	]
}
module.exports=config;