<!--  -->
<template>
	<div class="login">{{ yesOrNo }}</div>
	<el-button type="primary" @click="handlerClick">获取字典</el-button>
	<el-button type="warning" @click="toggleDark()">主题更换</el-button>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted, computed } from 'vue'
import { toggleDark } from '@/composables'
import useStore from '@/store'
import { ElMessage } from 'element-plus'
export default {
	name: 'Login',
	setup() {
		const { dict, user } = useStore()
		const yesOrNo = computed(() => dict.yesOrNo)
		const data = reactive({})
		onMounted(() => {})
		function handlerClick() {
			dict.getDict()
			ElMessage({
				message: 'Congrats, this is a success message.',
				type: 'success'
			})
		}
		return {
			...toRefs(data),
			yesOrNo,
			handlerClick,
			toggleDark
		}
	}
}
</script>
<style lang="scss" scoped>
.login {
	width: 50px;
}
</style>
