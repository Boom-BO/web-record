import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'
export function waterfallsFlow(
	pDom: HTMLElement | null,
	itemClass: string,
	cols: number | string,
	top = 20
) {
	const _isMobile = computed(() => {
		return navigator.userAgent.match(
			/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
		)
	})
	const getMinY = (arr: any[]) => {
		const yArr = arr.map(o => o.y)
		const minY: number = Math.min(...yArr)
		return yArr.findIndex(y => y === minY)
	}
	if (!pDom) {
		return
	}
	const items: NodeListOf<HTMLElement> = document.querySelectorAll(
		`.${itemClass}`
	)
	if (!(items.length > 0)) {
		return
	}
	const c = Number(cols)
	const pWdith = pDom.offsetWidth
	const colWidth = Math.floor((pWdith - c) / c)
	const gutter = (pWdith - colWidth * c) / (c + 1)
	const arr: any[] = []
	// 设置第一行坐标
	Array.from({ length: c }, (v, i) => {
		arr.push({
			x: Math.floor(colWidth * i + (i + 1) * gutter),
			y: top
		})
	})
	// 查找最小高度
	Array.from({ length: items.length }, (v, i) => {
		const index = getMinY(arr)
		items[i].style.position = 'absolute'
		items[i].style.width = colWidth + 'px'
		items[i].style.left = arr[index].x + 'px'
		items[i].style.top = arr[index].y + 'px'
		arr[index].y += items[i].clientHeight + top
	})
}
