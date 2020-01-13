import React from 'react'
import styles from '@/components/style'
import cssmodoule from '@/css/userlist.scss'
export default function UserList(props){
	return <div>
	<h1 style={styles.redColor} className='test'>我是大标题</h1>
	<p className = 'fontsize'>{props.user}</p>
	<p className = {cssmodoule.fontsize}>----我是class模块样式例子</p>
	<p id = {cssmodoule.fontstyle}>----我是id模块样式例子</p>
	</div>
}