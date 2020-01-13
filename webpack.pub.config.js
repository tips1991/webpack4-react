const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 创建一个插件的实例化对象
const htmlPlugin = new HtmlWebpackPlugin({
	template:path.join(__dirname,'./src/index.html'),//源文件
	filename:'index.html'
});
// 向外暴露一个打包的配置对象，因为webpack是基于node构建的，所以webpack支持所有node api和语法
module.exports = {
	mode:'development',// 在webpack4中，约定大于配置，约定入口为src/index.js
	plugins:[
		htmlPlugin
	]
}