// 获取assets静态资源
export const getAssetsFile = (url: string) => {
	return new URL(`../assets/${url}`, import.meta.url).href
}

// export const getAssetsFile = (dir: string, name: string) => {
// 	const path = `../assets/htmls/${name}`
// 	const modules = import.meta.globEager(`../assets/htmls/*`)
// 	return modules[path].default
// 	// return new URL(`../assets/${url}`, import.meta.url).href
// }
