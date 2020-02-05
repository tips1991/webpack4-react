// import React,{components} from 'react'; ①
import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom'; //引入路由
import App from '@/components/App/app'; //引入组件

ReactDom.render(<div>
	<App></App>
	</div>,document.getElementById('app')
)