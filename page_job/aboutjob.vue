<!-- 关于本程序 -->
<template>
	<view class="about">
		<canvas canvas-id="bubble" :style="'width:' + width + 'px;height:' + height + 'px'" class="like-fx"></canvas>
		<like-fx ref="likeFx" :width="width" :height="height"></like-fx>

		<view class="titleZ text-center align-center">
			<text class="text-bold">{{bodydata.occupation_name}}</text>
			<view class="contentZ">
					<van-grid column-num="2" border="false" direction="horizontal" :custom-style="{background:'rgba(255,255,255,0)'}">
						<van-grid-item use-slot border="false" :content-class="insidebox" v-for="(item,index) in bodydata.menuclassification_set">
							<text class="gridtext1">{{bodydata.menuclassification_set[index]}}</text>
						</van-grid-item>
						</van-grid>
			</view>
		</view>

		<view class="titleZ text-center align-center margin-top-xl">
			<text class="text-bold">所需元素</text>
			<view class="contentZ margin-top-lg">
				<text class="text-xl text-bold"></text>
				<!-- <text class="text-xl"> -->
					<van-grid column-num="3" border="false" direction="horizontal" >
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">钙</text>
							<text class="gridtext1">:{{bodydata.element.ca}}</text>
						</van-grid-item>
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">糖水化合物</text>
							<text class="gridtext1">:{{bodydata.element.carbohydrate}}</text>
						</van-grid-item>
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">铜</text>
							<text class="gridtext1">:{{bodydata.element.cu}}</text>
						</van-grid-item>
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">能量</text>
							<text class="gridtext1">:{{bodydata.element.energy}}</text>
						</van-grid-item>
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">铁</text>
							<text class="gridtext1">:{{bodydata.element.fe}}</text>
						</van-grid-item>
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">钾</text>
							<text class="gridtext1">:{{bodydata.element.k}}</text>
						</van-grid-item>
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">镁</text>
							<text class="gridtext1">:{{bodydata.element.mg}}</text>
						</van-grid-item>
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">锰</text>
							<text class="gridtext1">:{{bodydata.element.mn}}</text>
						</van-grid-item>
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">钠</text>
							<text class="gridtext1">:{{bodydata.element.na}}</text>
						</van-grid-item>
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">磷</text>
							<text class="gridtext1">:{{bodydata.element.p}}</text>
						</van-grid-item>
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">蛋白质</text>
							<text class="gridtext1">:{{bodydata.element.protein}}</text>
						</van-grid-item>
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">硒</text>
							<text class="gridtext1">:{{bodydata.element.se}}</text>
						</van-grid-item>
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">维生素B1</text>
							<text class="gridtext1">:{{bodydata.element.vitamin_B1}}</text>
						</van-grid-item>
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">维生素B2</text>
							<text class="gridtext1">:{{bodydata.element.vitamin_B2}}</text>
						</van-grid-item>
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">维生素B6</text>
							<text class="gridtext1">:{{bodydata.element.vitamin_B6}}</text>
						</van-grid-item>
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">维生素C</text>
							<text class="gridtext1">:{{bodydata.element.vitamin_C}}</text>
						</van-grid-item>
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">维生素E</text>
							<text class="gridtext1">:{{bodydata.element.vitamin_E}}</text>
						</van-grid-item>
						<van-grid-item use-slot border="false" :content-class="insidebox">
							<text class="gridtext">锌</text>
							<text class="gridtext1">:{{bodydata.element.zn}}</text>
						</van-grid-item>						
					</van-grid>
					<!-- </text> -->
			</view>
		</view>

		<button class='' open-type="contact">
			<image src='/static/logo.png' class='share-img png round shadow-lg bg-white' mode='aspectFit'>
			</image>
		</button>
	</view>
</template>

<script>
	import LikeFx from '@/components/likeFx/likeFx.vue'
	export default {
		components: {
			LikeFx
		},
		data() {
			return {
				animation_timer: null, // 动画定时器
				width: 375,
				height: 1920,
				bodydata:null,
			}
		},
		mounted() {
				this.bodydata = uni.getStorageSync('job')
				console.log(this.bodydata)
				console.log(this.bodydata.menuclassification_set)
				
		},
		onLoad() {
			this._startLikeAnimation();
		},
		onShareAppMessage() {
			return {
				title: '快来和我们一起管理自己的身体健康吧',
			}
		},
		methods: {
			_startLikeAnimation() {
				this.animation_timer = setInterval(() => {
					this.$refs.likeFx.likeClick()
				}, 300)
			}
		}
	}
</script>

<style scoped>
	.gridtext {
		color: #888;
		font-size: 26rpx;
		line-height: 26rpx;
	}
	
	.ingrid {
		float: left;
	}
	
	.gridtext1 {
		float: left;
		color: #888;
		font-size: 26rpx;
		line-height: 26rpx;
	}
	.titleZ {
		width: 750rpx;
		font-size: 52rpx;
		margin-top: 60rpx;
	}

	.contentZ {
		width: 650rpx;
		margin: 10rpx auto 0;
		text-align: left;
	}
	
	.insidebox{
		background:rgba(255,255,255,0);
	}
	
	.about-bg {
		background-size: cover;
		width: 100vw;
		height: 100vh;
		justify-content: center;
		flex-direction: column;
		color: #fff;
	}

	.edit-fixed {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0.1);
	}

	.detail-imgs image {
		width: 100%;
		float: left;
		/* height:400rpx; 不定高了*/
		border: 0;
		padding: 0;
		margin: 0
	}

	.share-img {
		position: fixed;
		padding: 10rpx;
		width: 100rpx;
		height: 100rpx;
		/* top: 680rpx; */
		bottom: 200rpx;
		right: 20rpx;
		z-index: 1024;
		opacity: 0.8;
		box-shadow: 0rpx 8rpx 30rpx 0rpx rgba(0, 0, 0, 0.3);
		border: none;
	}

	.about {
		margin: 0;
		width: 100%;
		height: 100vh;
		padding-top: 20%;
		color: #fff;
		background: linear-gradient(-120deg, #F15BB5, #9A5CE5, #01BEFF, #00F5D4);
		/* background: linear-gradient(-120deg, #0976ea, #c471f5, #f956b6, #ea7e0a); */
		background-size: 500% 500%;
		animation: gradientBG 15s ease infinite;
	}

	@keyframes gradientBG {
		0% {
			background-position: 0% 50%;
		}

		50% {
			background-position: 100% 50%;
		}

		100% {
			background-position: 0% 50%;
		}
	}

	.container {
		width: 100%;
		position: absolute;
		text-align: center;
	}

	.like-fx {
		position: fixed;
		right: 0;
		z-index: 1024;
		pointer-events: none;
		/* background-color: red; */
	}
</style>
