import { router } from './index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import { getToken } from '@/utils/auth'
import useUserStore from '@/store/modules/user'
import usePermissionStore from '@/store/modules/permission'

NProgress.configure({ showSpinner: false })
// 白名单
// const whiteList = ['/login', '/auth-redirect', '/bind', '/register']

// 路由守卫
router.beforeEach((to, from, next) => {
	// 进度条
	NProgress.start()
	// if (getToken()) {
	// if (true) {
	// 已登录且要跳转的页面是登录页
	if (to.path === '/login') {
		next({ path: '/' })
		NProgress.done()
	} else {
		// 是否存在token
		if (useUserStore().roles.length === 0) {
			// 没有拉取用户信息
			useUserStore()
				.getInfo()
				.then(() => {
					// 获取菜单列表
					// usePermissionStore()
					// 	.generateRoutes()
					// 	.then(accessRoutes => {
					// 		// 根据roles权限生成可访问的路由表
					// 		accessRoutes.forEach(route => {
					// 			if (!isHttp(route.path)) {
					// 				router.addRoute(route) // 动态添加可访问路由表
					// 			}
					// 		})
					// 		next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
					// 	})
				})
				.catch(error => {
					// 获取用户信息失败 登出并重定向/
					useUserStore()
						.logOut()
						.then(() => {
							next({ path: '/' })
						})
				})
		} else {
			//路由、菜单加载ok
			next()
		}
	}
	// } else {
	// 	// 没有token
	// 	if (whiteList.indexOf(to.path !== -1)) {
	// 		//白名单直接跳转
	// 		next()
	// 	} else {
	// 		// 其他菜单跳转值登录界面
	// 		next(`/login?redirect=${to.fullPath}`)
	// 		NProgress.done()
	// 	}
	// }
})

router.afterEach(() => {
	NProgress.done()
})
