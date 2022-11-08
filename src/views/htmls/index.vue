<template>
	<div class="htmls" id="html">
		<!-- <el-row :gutter="30"> -->
		<div class="app-card" v-for="(item, index) in htmlData" :key="index">
			<el-card :body-style="{ padding: '0px' }" @click="jump(item.url)">
				<div class="image">
					<img :src="getAssetsFile(`htmls/${item.name || 'default'}.png`)" />
					<div v-if="item.tag" class="tag">{{ item.tag }}</div>
				</div>
				<div class="bottom">
					<p class="title" :title="item.name">{{ item.name }}</p>
					<p class="description" :title="item.description">
						介绍：{{ item.description }}
					</p>
					<p class="description" :title="item.description">
						技术栈：{{ item.description }}
					</p>
				</div>
			</el-card>
		</div>
		<!-- </el-row> -->
	</div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onMounted, onUnmounted, watch } from 'vue'
import { debounce } from 'lodash'
import { ElLoading } from 'element-plus'
import { waterfallsFlow } from '@/utils/waterfalls'
import { getAssetsFile } from '@/utils/tools'
const preloadCount = ref(0)
let loading: any = null
const state = reactive({
	htmlData: [
		{
			url: 'https://pan.baidu.com/s/1HduWB7DKNJO2MJ0khO1oyQ',
			name: '其它无线上链接作品或设计图',
			img: '@/assets/htmls/其它无线上链接作品或设计图.png',
			description: '其它无线上链接作品和设计图展示（百度云盘）',
			tag: '云盘'
		},
		{
			url: 'https://events.schneider-electric.cn/innovationsummit',
			name: '施耐德电气创新峰会',
			img: '@/assets/htmls/施耐德电气创新峰会.png',
			description:
				'2020年世界五百强企业“施耐德”举办电气创新峰会，并邀请各界大咖参加。该网站提供施耐德电气创新峰会与大会日程介绍、大咖介绍、参会报名、创新云展厅入口、巡展日程介绍、线上直播，直播互动、会议重播等功能',
			tag: 'PC + H5'
		},
		{
			url: 'http://jd2021.slideabc.com/web',
			name: '2021京东JDD大会展区魔力电磁场',
			img: '@/assets/htmls/2021京东JDD大会展区魔力电磁场.png',
			description:
				'京东JDD大会活动《魔力电磁场》，活动会场互动H5页面，可查看会场不同展台介绍，展台外场打卡互动，盖章获得积分可兑换礼物奖品，活动日程与嘉宾介绍等'
		},
		{
			url: 'http://2021jd-digit.viewcenter.cn/web/',
			name: '2021京东数字化员工体验服务节',
			img: '@/assets/htmls/2021京东数字化员工体验服务节.png',
			description:
				'京东员工福利、健康管理、保险等数字化解决方案文字和视频介绍，服务节视频精彩回放，企业业务也少与会议日程展示等'
		},
		{
			url: 'http://2021dml.viewcenter.cn/h5/',
			name: 'DAIMLER',
			img: '@/assets/htmls/DAIMLER.png',
			description: '2021戴姆勒中国交易项目年会介绍并登记报名活动页'
		},
		{
			url: 'http://183.95.237.39:8090/html/2%E4%B8%AD%E9%87%91%E6%95%B0%E8%B0%B7%E5%85%A8%E5%9B%BD%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E5%B8%83%E5%B1%80.html',
			name: '中金数据全国数据中心',
			img: '@/assets/htmls/中金武汉数谷多媒体展厅.png',
			description: '”中金武汉数谷多媒体展厅“-中金数据全国数据中心',
			tag: '大屏'
		},
		{
			url: 'http://183.95.237.39:8090/html/3%E4%B8%AD%E9%87%91%E6%95%B0%E8%B0%B7%E5%8C%BA%E4%BD%8D%E4%BC%98%E5%8A%BF.html',
			name: '中金数谷区位优势',
			img: '@/assets/htmls/中金武汉数谷多媒体展厅.png',
			description: '”中金武汉数谷多媒体展厅“-中金数谷区位优势',
			tag: '大屏'
		},
		{
			url: 'http://183.95.237.39:8090/html/4%E4%B8%AD%E9%87%91%E6%95%B0%E8%B0%B7%E5%BA%94%E7%94%A8%E4%B8%9A%E5%8A%A1.html',
			name: '中金数谷应用业务',
			img: '@/assets/htmls/中金武汉数谷多媒体展厅.png',
			description: '”中金武汉数谷多媒体展厅“-中金数谷应用业务',
			tag: '大屏'
		},
		{
			url: 'http://183.95.237.39:8090/html/6%E6%AD%A6%E6%B1%89%E8%B6%85%E7%AE%97%E4%BA%91.html',
			name: '武汉超算云',
			img: '@/assets/htmls/中金武汉数谷多媒体展厅.png',
			description: '”中金武汉数谷多媒体展厅“-武汉超算云',
			tag: '大屏'
		},
		{
			url: 'http://183.95.237.39:8090/html/7.1%E6%AD%A6%E6%B1%89%E7%94%B5%E5%AD%90%E6%94%BF%E5%8A%A1%E4%BA%91.html',
			name: '武汉电子政务云',
			img: '@/assets/htmls/中金武汉数谷多媒体展厅.png',
			description: '”中金武汉数谷多媒体展厅“-武汉电子政务云',
			tag: '大屏'
		},
		{
			url: 'http://183.95.237.39:8090/html/8%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html',
			name: '智慧城市解决方案',
			img: '@/assets/htmls/中金武汉数谷多媒体展厅.png',
			description: '”中金武汉数谷多媒体展厅“-智慧城市解决方案',
			tag: '大屏'
		},
		{
			url: 'https://future.feishu.cn/exhibition',
			name: '飞书 未来无限展厅',
			img: '@/assets/htmls/飞书 未来无限展厅.png',
			description:
				'将「 2021 春季飞书未来无限大会」线下展区复制到线上，使用户体验「飞书未来无限公司」如何高效愉悦运转。飞书已展厅形式介绍飞书产品的多样化与行业实践'
		},
		{
			url: 'http://2021aoyunintel.viewcenter.cn',
			name: '英特尔(Intel) 智IN奥运',
			img: '@/assets/htmls/英特尔(Intel) 智IN奥运.png',
			description:
				'Intel北京2022年冬奥会体验中心活动H5入口页面、白名单登录、修改个人信息头像，canvas七巧板点击进入Intel2022奥运相关活动展示'
		},
		{
			url: 'https://h5.lc-site.com/lincoln',
			name: '林肯SUV家族',
			img: '@/assets/htmls/林肯SUV家族.png',
			description: '林肯SUV家族'
		},
		{
			url: 'http://endo.slideabc.com/h5/?userid=1',
			name: '爱惜康内部APP教程H5',
			img: '@/assets/htmls/爱惜康内部APP教程H5.png',
			description: '爱惜康内部APP教程H5'
		},
		{
			url: 'https://boom-bo.github.io/web_accumulation/code/visualize/XXX%E5%A4%A7%E5%B1%8F/index.html',
			name: '项目主题驾驶舱',
			img: '@/assets/htmls/项目主题驾驶舱.png',
			description:
				'项目主题驾驶舱可视化大屏，包含地图数据动态展示，各种图表类型数据展示',
			tag: '大屏'
		},
		{
			url: 'https://boom-bo.github.io/web_accumulation/code/visualize/%E5%B8%A6threejs%E7%9A%84%E5%A4%A7%E5%B1%8F/index.html',
			name: '数据资源链',
			img: '@/assets/htmls/数据资源链.png',
			description:
				'结合Echarts与Threejs做了动画效果展示部门数据，包含各种图表类型数据展示'
		},
		{
			url: 'https://boom-bo.github.io/web_accumulation/code/visualize/%E5%A4%A7%E6%95%B0%E6%8D%AE%E5%A4%A7%E5%B1%8F/directory_chain.html',
			name: '大数据资源服务平台',
			img: '@/assets/htmls/大数据资源服务平台.png',
			description: '纯css做的3D动画效果展示相关数据',
			tag: '大屏'
		},
		{
			url: 'http://ework.qdu.edu.cn',
			name: '青岛大学线上服务大厅',
			img: '@/assets/htmls/青岛大学线上服务大厅.png',
			description:
				'青岛大学线上服务大厅，为大学生、研究生、老师等提供流程发起与审批平台'
		},
		{
			url: 'http://172.50.1.200/catalog-portal',
			name: '中国邮政数据中台',
			img: '@/assets/htmls/中国邮政数据中台.png',
			description:
				'(内网)维护中国邮政相关单位机构设置人员、角色、维护本单位数据源、开通本单位网络端口、服务发布审批、服务授权，开通访问账号密码'
		}
	]
})
function jump(url: string) {
	window.open(url, '_blank')
}
const preload = (arr: string[]) => {
	arr.map(img => {
		let image = new Image()
		image.src = img
		image.onload = () => {
			preloadCount.value++
		}
	})
}
// 预加载
preload(
	state.htmlData.map(item =>
		getAssetsFile(`htmls/${item.name || 'default'}.png`)
	)
)
watch(preloadCount, val => {
	const htmls: HTMLElement | null = document.getElementById('html')
	if (htmls && val === state.htmlData.length) {
		// 图片预加载完毕
		console.log('**************************')
		waterfallsFlowStart()
		htmls.style.opacity = '1'
		loading.close()
	}
})
// 瀑布流绘制
const waterfallsFlowStart = () => {
	const htmls: HTMLElement | null = document.getElementById('html')
	if (htmls) {
		// 增加防抖
		waterfallsFlow(
			htmls,
			'app-card',
			Math.round(document.documentElement.clientWidth / 316)
		)
	}
}
onMounted(() => {
	loading = ElLoading.service({
		lock: true,
		text: '正在努力加载作品..',
		background: 'rgba(0, 0, 0, 0.8)'
	})
	const htmls: HTMLElement | null = document.getElementById('html')
	if (htmls) {
		htmls.style.opacity = '0'
	}
	// 增加窗口变化监听
	window.addEventListener('resize', () => {
		debounce(() => {
			// 增加防抖
			waterfallsFlowStart()
		}, 500)()
	})
})
onUnmounted(() => {
	window.removeEventListener('resize', () => {
		waterfallsFlowStart()
	})
})
const { htmlData } = toRefs(state)
</script>

<style lang="scss">
.htmls {
	position: relative;
	width: 100%;
	height: 100%;
	.app-card {
		padding: 0 10px;
		box-sizing: border-box;
	}
	.el-card {
		width: 100%;
		cursor: pointer;
		&:hover {
			.image img {
				transform: scale(1);
			}
		}
	}
	.image {
		position: relative;
		width: 100%;
		height: auto;
		overflow: hidden;
		img {
			display: block;
			width: 100%;
			height: 100%;
			transform: scale(1.1);
			transition: all 0.5s;
		}
		.tag {
			position: absolute;
			top: 5px;
			right: 5px;
			padding: 3px 10px;
			font-size: 12px;
			font-weight: 500;
			color: #fff;
			background-color: #3fcc5b;
		}
	}
	.bottom {
		padding: 10px;
		.title {
			font-size: 16px;
			font-weight: 500;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.description {
			margin: 5px 0 0;
			height: 36px;
			font-size: 12px;
			display: -webkit-box;
			overflow: hidden;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			line-height: 1.5;
		}
	}
}
</style>
