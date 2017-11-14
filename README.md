webpack-config.js����: http://blog.csdn.net/u011649976/article/details/76736173


npm:
cnpm install webpack --save-dev		ֻд��������������  	  �൱�� -D
cnpm install webpack --save			д����������,���������߶�������
cnpm install webpack-dev-server --save-dev	  ��һ������,��д����������


package.json:
����:npm init
����:npm run dev
"dev":"webpack-dev-server --host localhost --port 8088 --open --config webpack.config.js"
����:npm run build
"build":"webpack --progress --hide-modules --config webpack.prod.config.js"

����loader:
css-loader:
cnpm i style-loader css-loader -D 	
�ϲ�css���:
cnpm i extract-text-webpack-plugin -D
vue:	(vue����Ҳ��Ҫ)
cnpm i vue --save		
vue-loader:(����vue)
cnpm i vue-loader -D
vue-style-loader:(����vue�����css)
cnpm i vue-style-loader -D
vue-template-compiler:(����template)
cnpm i vue-template-compiler -D
vue-hot-reload-api:(�ȼ���)
cnpm i vue-hot-reload-api -D

ES6ת��ES5
babel:
cnpm i babel -D
babel-loader:
cnpm i babel-loader -D
babel-core:
cnpm i babel-corel -D
babel-plugin-transform-runtime:
cnpm i babel-plugin-transform-runtime -D
babel-preset-es2015:
cnpm i babel-preset-es2015 -D
babel-runtime:
cnpm i babel-runtime -D

babel����:
cnpm install babel babel-loader babel-core babel-preset-es2015 babel-plugin-transform-runtime babel-runtime -D


���ؾ�̬��Դ:
file-loader:
cnpm i file-loader
url-loader:
cnpm i url-loader

��װwebpack��webpack-dev-server
cnpm i webpack -D
cnpm i webpack-dev-server -D

webpack-merge:(���������ļ��ϲ�Ϊһ��)
cnpm i webpack-merge -D

html-webpack-plugin:(����htmlģ��)
cnpm i html-webpack-plugin -D

scss:(ֻ�谲װscssģ�飬����Ҫ��webpack.config�����ã���Vuejs�õ�ʱ��ֱ�� ��styles�ϼ�һ��lang="scss")
cnpm i node-sass -D
cnpm i sass-loader -D

����loader:

css-loader:
 module:{
		loaders:[
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			}
		]
	}

css-loader(�ò���ϲ��ļ�):
var ExtractTextPlugin=require('extract-text-webpack-plugin');
module:{
		loaders:[
			{
				test:/\.css$/,
				use:ExtractTextPlugin.extract({
					use:'css-loader',
					fallback:'style-loader'
				})
			}
		]
	},
plugins:[
new ExtractTextPlugin('bundle.css')
]

���plugins:
plugins:[
new ExtractTextPlugin('bundle.css')
]


.babelrc�ļ�����:
{
"presets":["es2015"],
"plugins":["transform-runtime"],
"comments":false
}



�������:
webpack --progress --hide-modules

����:
1). 
      var config={
	entry:"./entry.js",
	output:{
		path:__dirname,
		filename:'bundle.js'
	}
}	
module.exports=config;


2).(���·��Ϊdist�ļ�)
      var path=require('path');
var config={
	entry:"./entry.js",
	output:{
		path:path.join(__dirname,'./dist'),
		publicPath:'/dist',
		filename:'bundle.js'
	}
}
module.exports=config;