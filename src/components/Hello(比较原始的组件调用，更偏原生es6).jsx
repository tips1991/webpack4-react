import React from 'react'; //创建组件，虚拟DOM元素，声明周期
import ReactDOM from 'react-dom'; //把创建好的组件和虚拟DOM放到页面上展示
//第一种创建组件的方式
function Hello(props){
	console.log(props) //组件中的props是只读的，不能赋值
	//返回一个合法的jsx虚拟dom元素
	return <div>ddddddd --{props.name} ==={props.age}</div>
}

export default Hello