import { defineStore } from 'pinia'
const useUserStore = defineStore({
	id: 'user',
	state: () => ({
		name: 'admin',
		userId: <string>'111111',
		avatar: '',
		roles: <any>[],
		user: <object>{}
	}),
	actions: {
		// 退出
		logOut() {
			// 使用 state 通过this
			return new Promise((resolve, reject) => {})
		},

		// 获取用户信息
		getInfo() {
			return new Promise<void>((resolve, reject) => {
				// 拉取信息
				this.user = { username: 'admin', userid: 'admin' }
				this.roles = ['ROLE_DEFAULT']
				resolve()
			})
		}
	}
})
// 导出
export default useUserStore
