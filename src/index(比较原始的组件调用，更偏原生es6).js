//webpack-dev-server 打包好的main.js 托管到内存中；所以项目根目录看不到。在内存中
import React from 'react'; //创建组件，虚拟DOM元素，声明周期
import ReactDOM from 'react-dom'; //把创建好的组件和虚拟DOM放到页面上展示


import Hello from '@/components/Hello' //导入组件
// 创建虚拟DOM元素
//参数1：创建元素的类型，字符串，表示元素名称
//参数2：是一个对象或者null，表示当前dom属性
//参数3：子节点（包括其它虚拟DOM获取文本子节点）
//参数n：其它子节点
// const myh1 = React.createElement('h1',{id:'myh1',title:'this is a h1'},'zhesdddd');

// const mydiv = <div id="mydiv" title="this is a divs">这是一个divdddds元素</div>;

//这种js中，混合写入类似于html的语法，叫做jsx语法 符合 XML 规范的js 
//这个 jsx 语法必须装以下几个依赖 start，并且配置.babelrc
//cnpm i babel-core@latest babel-loader@latest babel-plugin-transform-runtime@latest -D
//cnpm i babel-preset-env babel-preset-stage-0 -D
//cnpm i babel-preset-react -D  	      
//这个语法必须装以下几个依赖 end，并且配置.babelrc


//function 和class 创建组件的区别：
// function 创建组件，只有props，没有私有数据和生命周期函数；无状态组件
// class 创建组件，有自己的私有数据（this.state）和生命周期函数；有状态组件

const arrStr = ['1','2','3']

const dog = {
	name:'大黄',
	age:'3'
}
//使用 ReactDom 把虚拟dom渲染到页面
//参数1：要渲染的那个虚拟dom元素
//参数2：指定页面上一个容器
ReactDOM.render(
	<div>
		{arrStr.map((item,index) =>
			<h1 key={index} className = 'dd'>{item}</h1>
		)}
		<Hello { ...dog }></Hello>
	</div>,document.getElementById('app'))