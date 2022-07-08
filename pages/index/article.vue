<template>
	<view>
	<!-- <web-view src="https://mp.weixin.qq.com/s/DnDP74mptDsNw7R8i_0gtQ"></web-view> -->
	<web-view :src="articleSrc" update-title="true" title="公众号"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				articleSrc: null
			}
		},
		mounted() {
	
		
		},
		onLoad(options) {
		            this.articleSrc = options.index; // 字符串转对象
		            console.log(this.articleSrc)
					uni.setNavigationBarTitle({
										title: '相关公众号'
					})
		},
		methods: {
			
		}
	}
</script>

<style>
</style>
