import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login.vue'
import NotFound from '@/components/404.vue'
import Home from '@/components/Home.vue'
import Main from '@/components/Main.vue'
import Table from '@/components/nav1/Table.vue'
import Form from '@/components/nav1/Form.vue'
import User from '@/components/nav1/user.vue'
import Page4 from '@/components/nav2/Page4.vue'
import Page5 from '@/components/nav2/Page5.vue'
import Page6 from '@/components/nav3/Page6.vue'
import echarts from '@/components/charts/echarts.vue'


// Vue.use(Router)


let routes22 = [
	{
		path: '/login',
		component: Login,
		name: '',
		hidden: true
	},
	{
		path: '/404',
		component: NotFound,
		name: '',
		hidden: true 
	},
	{
		path: '/',
		component: Home,
		name: '导航一',
		iconCls: 'el-icon-message',
		children: [
			{
				path: '/main',
				component: Main,
				name: '主页',
				hidden: true
			},
			{
				path: '/table',
				component: Table,
				name: 'Table',
			},
			{
				path: '/form',
				component: Form,
				name: 'Form'
			},
			{
				path: '/user',
				component: User,
				name: '列表'
			}
		]
	},
	{
		path: '/',
		component: Home,
		name: '导航二',
		iconCls: 'fa fa-id-card-o',
		childer: [
			{
				path: '/page4',
				component: Page4,
				name: '页面4'
			},
			{
				path: '/page5',
				component: Page5,
				name: '页面5'
			}
		]
	},
	{
		path: '/',
		component: Home,
		name: '',
		iconCls: 'fa fa-address-card',
		leaf: true,
		children: [
			{
				path: '/Page6',
				component: Page6,
				name: '导航三'
			}
		]
	},
	{
		path: '/',
		component: Home,
		name: 'charts',
		iconCls: 'fa fa-bar-chart',
		children: [
			{
				path: '/echarts',
				component: echarts,
				name: 'echarts'
			}
		]
	},
	{
		path: '*',
		hidden: true,
		redirect: {
			path: '/404'
		}
	}
];
export default routes22;
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
