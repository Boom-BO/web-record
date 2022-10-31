const modulesFiles: any = import.meta.globEager('./modules/*.ts')
console.log('🚀 ~ file: index.ts ~ line 2 ~ modulesFiles', modulesFiles)

const useStore = () =>
	Object.keys(modulesFiles).reduce((modules: any, modulePath: string) => {
		const moduleName: any = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
		modules[moduleName] = modulesFiles[modulePath].default()
		return modules
	}, {})
export default useStore
