// import React,{components} from 'react'; ①
import React from 'react';
import ReactDom from 'react-dom';


// import UserList from './components/UserList'
import UserListModoule from '@/components/UserListModoule'
// class Person extends components{ ①
//使用class定义组件，必须让自己的组件，继承React.Component
import 'bootstrap/dist/css/bootstrap.css'
import BindClick from '@/components/bindclick'

const user = {
	name:'Leo',
	age:3,
	sex:'男'
}
ReactDom.render(<div><button className='btn btn-primary'>ddd</button>
	<BindClick></BindClick>
	<UserListModoule {...user}></UserListModoule>
	</div>,document.getElementById('app')
)