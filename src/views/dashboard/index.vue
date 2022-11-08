<template>
	<div class="dashboard">
		<canvas class="bg"></canvas>
		<div class="content">
			<p class="author">{{ author }}</p>
			<p class="maxim">
				{{ maxim }}
			</p>
			<a
				href="https://boom-bo.github.io/web_accumulation"
				target="_self"
				class="link-text"
				@click.stop=""
				>博客</a
			>
			<br />
			<router-link tag="span" to="htmls" class="link-text" @click.stop=""
				>作品</router-link
			>
			<br />
			<a
				href="https://github.com/Boom-BO"
				target="_self"
				class="link-text"
				@click.stop=""
				>GitHub</a
			>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { reactive, toRefs, onMounted } from 'vue'
const state = reactive({
	author: 'BommMax - Wu Bo',
	maxim: '少年与爱永不老去，即便披荆斩棘，丢失怒马鲜衣。——莫峻',
	circleUrl:
		'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
	squareUrl:
		'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
	sizeList: ['small', '', 'large'] as const
})
function bgInit() {
	document.addEventListener('touchmove', function (e) {
		e.preventDefault()
	})
	let c = document.getElementsByTagName('canvas')[0],
		x: any = c.getContext('2d'),
		pr = window.devicePixelRatio || 1,
		w = window.innerWidth,
		h = window.innerHeight,
		f = 90,
		q: any,
		m = Math,
		r = 0,
		u = m.PI * 2,
		v = m.cos,
		z = m.random
	c.width = w * pr
	c.height = h * pr
	x.scale(pr, pr)
	x.globalAlpha = 0.6
	function i() {
		x.clearRect(0, 0, w, h)
		q = [
			{ x: 0, y: h * 0.7 + f },
			{ x: 0, y: h * 0.7 - f }
		]
		while (q[1].x < w + f) d(q[0], q[1])
	}
	function d(i: any, j: any) {
		x.beginPath()
		x.moveTo(i.x, i.y)
		x.lineTo(j.x, j.y)
		var k = j.x + (z() * 2 - 0.25) * f,
			n = y(j.y)
		x.lineTo(k, n)
		x.closePath()
		r -= u / -50
		x.fillStyle =
			'#' +
			(
				((v(r) * 127 + 128) << 16) |
				((v(r + u / 3) * 127 + 128) << 8) |
				(v(r + (u / 3) * 2) * 127 + 128)
			).toString(16)
		x.fill()
		q[0] = q[1]
		q[1] = { x: k, y: n }
	}
	function y(p: any): any {
		var t = p + (z() * 2 - 1.1) * f
		return t > h || t < 0 ? y(p) : t
	}
	document.onclick = i
	document.ontouchstart = i
	i()
}
onMounted(() => {
	bgInit()
})
const { author, maxim, circleUrl, squareUrl, sizeList } = toRefs(state)
</script>

<style scoped lang="scss">
.dashboard {
	font-size: 20px;
	letter-spacing: 1px;
	font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	line-height: 46px;

	.bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.content {
		position: fixed;
		bottom: 20vh;
		width: 100%;
		text-align: center;
		.author {
			font-weight: 500;
			font-size: 30px;
		}
		.maxim {
			font-size: 14px;
			color: #121314;
		}
		.link-text {
			text-decoration: none;
			transition: all 0.3s;
			cursor: pointer;
			&:hover {
				color: #934bf2;
			}
		}
	}
}
</style>
