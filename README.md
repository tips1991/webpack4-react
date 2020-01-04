# webpack4-react
===
webpack4/react
github地址：https://github.com/tips1991/webpack4-react.git
webpack4配置 我装的都是2020.1.4号最新的
新进目录（名字自己起）
顺序执行以下代码(window和mac命令有略微出入，请注意)
npm init -y
cnpm i webpack webpack-cli -D // 针对webpack4的安装
mkdir src && cd src && touch index.html index.js    //webpack4约定大于配置，创建默认的入口文件src/index.js
cd ../ && mkdir dist && mkdir static
touch webpack.config.js               //webpack配置文件
npm i webpack-dev-server --save-dev   //热更新server，但是要手动刷新浏览器。请安装下面依赖，自动更新
cnpm i html-webpack-plugin@latest -D  //生成内存html的插件  --自动热更新反应到浏览器

配置 package.json文件
//package.json
{
  "name": "webpack4",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack-dev-server --open --hot"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.10.1"
  }
}

配置webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//个人理解：生成临时html文件到根目录的内存中。代码编辑保存后重新渲染一份静态的临时文件到根目录内存
// 创建一个插件的实例化对象
const htmlPlugin = new HtmlWebpackPlugin({
	template:path.join(__dirname,'./src/index.html'),//源文件，对此文件生成临时文件到内存中
	filename:'index.html' //生成的临时文件目录和文件名称。（目录：根目录。文件名称：index.html）
});
// 向外暴露一个打包的配置对象，因为webpack是基于node构建的，所以webpack支持所有node api和语法
module.exports = {
	mode:'development',// 在webpack4中，约定大于配置，约定入口为src/index.js
	plugins:[
		htmlPlugin 
	]
}

我是小尾巴…………
react配置
react：用于创建组件和虚拟DOM，同时组件的生命周期都在这个包中
react-dom：进行dom操作，主要场景：ReactDOM.render()
安装react和react-dom
cnpm i react react-dom -S  //-S开发环境和生产环境安装  -D只在开发环境安装

对对对
对对对
顶顶顶顶
顶顶顶顶
