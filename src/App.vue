<template>
	<div class="app">
		<router-view :key="fullPath" />
	</div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
const $route = useRoute()
const fullPath: string = $route.fullPath
</script>
<style lang="scss" scoped>
.app {
}
</style>
