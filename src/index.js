console.log('okssd')
//webpack-dev-server 打包好的main.js 托管到内存中；所以项目根目录看不到。在内存中
import React from 'react'; //创建组件，虚拟DOM元素，声明周期
import ReactDom from 'react-dom'; //把创建好的组件和虚拟DOM放到页面上展示

// 创建虚拟DOM元素
//参数1：创建元素的类型，字符串，表示元素名称
//参数2：是一个对象或者null，表示当前dom属性
//参数3：子节点（包括其它虚拟DOM获取文本子节点）
//参数n：其它子节点
const myh1 = React.createElement('h1',null,'zhesdddd');
