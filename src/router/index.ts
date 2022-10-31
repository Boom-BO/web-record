import {
	createRouter,
	createWebHashHistory,
	createWebHistory
} from 'vue-router'
const router = createRouter({
	history: createWebHistory('/web-record/'),
	// history: createWebHashHistory(),
	routes: [
		{
			path: '',
			redirect: '/dashboard'
		},
		{
			name: 'login',
			path: '/login',
			component: () => import('@/views/login/index.vue'),
			meta: {
				title: '登录'
			}
		},
		{
			name: 'dashboard',
			path: '/dashboard',
			component: () => import('@/views/dashboard/index.vue'),
			meta: {
				title: '首页'
			}
		},
		{
			name: 'htmls',
			path: '/htmls',
			component: () => import('@/views/htmls/index.vue'),
			meta: {
				title: '作品'
			}
		}
	]
})

export { router }
