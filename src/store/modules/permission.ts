import { defineStore } from 'pinia'
const useDictStore = defineStore({
	id: 'permission',
	state: () => ({
		// yesOrNo: <object>{
		// 	'0': '否',
		// 	'1': '是'
		// }
	}),
	actions: {
		getDict() {
			return new Promise<void>((resolve, reject) => {
				// 拉取信息
				// this.yesOrNo = {
				// 	'0': '否',
				// 	'1': '是',
				// 	'2': '无'
				// }
				resolve()
			})
		}
	}
})
// 导出
export default useDictStore
