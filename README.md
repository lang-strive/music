
 ### create-react-app

>  React.js 

## Build Setup

``` bash
# install dependencies
cnpm install

# serve with hot reload at localhost:8080
cnpm start

# build for production with minification
npm run build
```
# webpack-config.js讲解: http://blog.csdn.net/u011649976/article/details/76736173


## npm:
``` bash
cnpm install webpack --save-dev		只写进开发依赖里面  	  相当于 -D
cnpm install webpack --save			写进依赖里面,开发和上线都可以用
cnpm install webpack-dev-server --save-dev	  开一个服务,并写进开发依赖
```

## package.json:
``` bash
生成:npm init
运行:npm run dev
"dev":"webpack-dev-server --host localhost --port 8088 --open --config webpack.config.js"
运行:npm run build
"build":"webpack --progress --hide-modules --config webpack.prod.config.js"
```

## 下载loader:
``` bash
css-loader:
cnpm i style-loader css-loader -D 	
合并css插件:
cnpm i extract-text-webpack-plugin -D
vue:	(vue上线也需要)
cnpm i vue --save		
vue-loader:(解析vue)
cnpm i vue-loader -D
vue-style-loader:(解析vue里面的css)
cnpm i vue-style-loader -D
vue-template-compiler:(编译template)
cnpm i vue-template-compiler -D
vue-hot-reload-api:(热加载)
cnpm i vue-hot-reload-api -D
```

## ES6转换ES5
> babel:
``` bash
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
```

## babel下载:
``` bash 
cnpm install babel babel-loader babel-core babel-preset-es2015 babel-plugin-transform-runtime babel-runtime -D
```

## 加载静态资源:
> file-loader:
``` bash
cnpm i file-loader
url-loader:
cnpm i url-loader
```

## 安装webpack和webpack-dev-server
``` bash
cnpm i webpack -D
cnpm i webpack-dev-server -D
```

## webpack-merge:(两个配置文件合并为一个)
``` bash
cnpm i webpack-merge -D
```

## html-webpack-plugin:(生成html模板)
``` bash
cnpm i html-webpack-plugin -D
```

## sass:(先安装sass模块，需要在webpack.config里配置，在Vuejs用的时候直接 在styles上加一个lang="sass")
``` bash
cnpm i node-sass -D
cnpm i sass-loader -D
```

## 配置loader:
``` bash
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
```

## css-loader (用插件合并文件):
``` bash
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
```

## vue中css-loader/sass-loader (用插件合并文件):
``` bash
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
}
```

## 加载静态资源(小于1024用base64加载):
``` bash
{
	test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
	loader:'url-loader?limit=1024'
}
```

## 插件plugins:
``` bash
plugins:[
	new ExtractTextPlugin('bundle.css')
]
```


## .babelrc文件配置:
``` bash
{
"presets":["es2015"],
"plugins":["transform-runtime"],
"comments":false
}
```



## 打包上线:
``` bash
webpack --progress --hide-modules
```

## 配置:
``` bash
> 1). 
      var config={
	entry:"./entry.js",
	output:{
		path:__dirname,
		filename:'bundle.js'
	}
}	
module.exports=config;


2).(打包路径为dist文件)
      var path=require('path');
var config={
	entry:{
		main:"./main.js"
	},
	output:{
		path:path.join(__dirname,'./dist'),
		publicPath:'/dist/',
		filename:'main.js'
	}
}
module.exports=config;
```
