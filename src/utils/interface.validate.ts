/**
 * vue 的 props 的验证的类型约束
 */
export interface PropsV {
	/**
	 * 属性的类型，比较灵活，可以是 String、Number 等，也可以是数组、class等
	 */
	type: Array<any> | any
	/**
	 * 是否必须传递属性
	 */
	required?: boolean
	/**
	 * 自定义类型校验函数（箭头函数），value：属性值
	 */
	validator?: (value: any) => boolean
	/**
	 * 默认值，可以是值，也可以是函数（箭头函数）
	 */
	default?: any
}
