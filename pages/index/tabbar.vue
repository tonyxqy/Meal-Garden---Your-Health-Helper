<template>
	<view>
		<index v-if="PageCur=='index'" ref="index"></index>
		<search v-if="PageCur=='search'"></search>
		<cases v-if="PageCur=='cases'"></cases>
		<news v-if="PageCur=='news'"></news>
		<me v-if="PageCur=='me'"></me>
		<xiaobing />
		
		<view class="box">
			<view class="cu-bar tabbar bg-white shadow foot">
				<view class="action" @click="NavChange" data-cur="index">
					<view class='cuIcon-cu-image'>
						<image v-if="PageCur=='index'" src="../../static/tabBar/index_cur.png"></image>
						<image v-if="PageCur != 'index'" src="../../static/tabBar/index.png"></image>
					</view>
					<view :class="PageCur=='index'?'color_main':'text-gray'">首页</view>
				</view>

				<view class="action" @click="NavChange" data-cur="search">
					<view class='cuIcon-cu-image'>
						<image v-if="PageCur=='search'" src="../../static/tabBar/shop_cur.png"></image>
						<image v-if="PageCur != 'search'" src="../../static/tabBar/shop.png"></image>
					</view>
					<view :class="PageCur=='search'?'color_main':'text-gray'">分类食谱</view>
				</view>

				<view @click="NavChange" class="action text-gray add-action" data-cur="cases">
					<image class="logo_btn" mode="widthFix" src="../../static/logo.png"></image>
					<view :class="PageCur=='cases'?'color_main':'text-gray'">我的营养花园</view>
				</view>

				<view class="action" @click="NavChange" data-cur="news">
					<view class='cuIcon-cu-image'>
						<view class="cu-tag badge">{{message}}</view>
						<image v-if="PageCur=='news'" src="../../static/tabBar/order_cur.png"></image>
						<image v-if="PageCur != 'news'" src="../../static/tabBar/order.png"></image>
					</view>
					<view :class="PageCur=='news'?'color_main':'text-gray'">动态</view>
				</view>

				<view class="action" @click="NavChange" data-cur="me">
					<view class='cuIcon-cu-image'>
						<view class="cu-tag badge">
							<!-- 红点 -->
						</view>
						<image v-if="PageCur=='me'" src="../../static/tabBar/me_cur.png"></image>
						<image v-if="PageCur != 'me'" src="../../static/tabBar/me.png"></image>
					</view>
					<view :class="PageCur=='me'?'color_main':'text-gray'">个人中心</view>
				</view>

			</view>
		</view>

	</view>
</template>

<script>
	import index from "./inedx.vue"; //首页
	import search from "./search.vue"; //技术视频
	import cases from "./main.vue"; //宅家学
	import news from "./news.vue"; //动态
	import me from "./me.vue"; //个人中心
	import xiaobing from "./xiaobing.vue"; //个人中心
	export default {
		components: {
			xiaobing,
			index,
			search,
			cases,
			news,
			me
		},
		data() {
			return {
				PageCur: 'index',

				message: '2',
				openId: '',
				access_token: '',

				tip: "我是提示",
				duration: 1,
			};
		},

		created() {

		},
		// 分享小程序
		onShareAppMessage(res) {
			return {
				title: '你的健康助手，欢迎来使用吖',
			};
		},
		onShow() {
			this.$refs.index.getData();
			this.$refs.index.getMenuData()
			uni.$emit('bodyhelper')
			console.log('12e3214214')
		},
		methods: {
			NavChange: function(e) {
				console.log(e.currentTarget.dataset.cur)

				this.PageCur = e.currentTarget.dataset.cur;

				if (this.PageCur == 'index') {
					// document.title = '首页'
				} else if (this.PageCur == 'component') {
					// document.title = '积分商城'
				} else if (this.PageCur == 'cases') {
					// document.title = '宅家学'
				} else if (this.PageCur == 'news') {
					// document.title = '动态'
				} else if (this.PageCur == 'me') {
					// document.title = '个人中心'
				}

				// uni.setStorage({
				// 	key: 'PageCur',
				// 	data: this.PageCur,
				// 	success: function() {
				// 		console.log('保存成功！');
				// 	}
				// });
			},
			NavChange_xd: function() {
				uni.navigateTo({
					url: 'publish',
					animationType: 'slide-in-bottom',
					animationDuration: 200
				});
			}
		}
	}
</script>

<style lang="scss">
	.box {
		margin: 20upx 0;
	}

	.box view.cu-bar {
		margin-top: 20upx;
	}

	.logo_btn {
		width: 38*2rpx;
		height: 38*2rpx;
		position: absolute;
		z-index: 2;
		border-radius: 50%;
		top: -40rpx;
		left: 0rpx;
		right: 0;
		margin: auto;
		padding: 0;
	}

	.cu-bar.tabbar .action.add-action {
		padding-top: 56rpx !important;
	}
</style>
