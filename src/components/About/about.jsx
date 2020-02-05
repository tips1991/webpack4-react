import React from 'react'
export default class About extends React.Component{
	constructor(){
		super()
		this.state = {
			msg:'我是Home',
			content:'Home'
		}
	}
	render(){
		return <div>
            <h1>我是about</h1>
			<button onClick = {() => this.show()}>点击</button>
			<div>{this.state.msg}</div>
			<input type="text" value={this.state.msg} onChange = { (e) => this.exchangeInput(e) } />
		</div>
	}
	exchangeInput = (e) => {
		console.log(e)
		this.setState({
			msg:e.target.value
		})
	}
	show = ()=>{
		this.setState({ //setState方法是异步的,要想及时拿到更新后的值，需要用回调函数打印
			msg:'hahah'
		},function(){//回调函数
			console.log(this.state.msg) 
		})
	}
}