import React from 'react';
import UserList from '@/components/UserList'
export default class Movie extends React.Component{
	constructor(){
		super()
		//只有调用了super()以后，才能使用this关键字
		this.state = {
			msg:'我是msg',
			userItem : [
				{id:1,user:'张三',content:'哈哈，沙发'},
				{id:2,user:'李四',content:'板凳'},
				{id:3,user:'王五',content:'凉席'},
				{id:4,user:'赵六',content:'楼下三炮'}
			]
		} //this.state = {} 相当于Vue 中 data(){retrun {}}
	}
	//在组件内部，必须有render函数，作用：渲染当前组件对应的虚拟DOM
	render(props){
		return<div>我是组件 --- {this.props.name}
		<h1>{this.state.msg}</h1>
		{this.state.userItem.map(item => <div key={item.id}><UserList {...item}></UserList></div>)}
		</div>
			
	}
}