<!-- 关于本程序 -->
<template>
	<view class="about">

		<canvas canvas-id="bubble" :style="'width:' + width + 'px;height:' + height + 'px'" class="like-fx"></canvas>
		<like-fx ref="likeFx" :width="width" :height="height"></like-fx>

<!-- 		<view class="picgif">
			<image src="https://img1.imgtp.com/2022/06/27/Tm7zLcmd.gif" mode=""></image>
		</view>
		
		<view class="titleword animated bounceInUp">
			膳食花园
		</view> -->
		<view class="titleZ text-center align-center">
			<text class="text-bold">关于本程序</text>
			<view class="contentZ">
				<text class="text-xl">     本项目旨在利用数据挖掘技术的思想，利用建立知识图谱和nlp技术建立智能医疗膳食回答系统,基于协同过滤算法，结合中医中的望闻问切，引入舌诊和基于知识图谱的智能问答系统，融合用户爱好和BMI基本信息智能化定制化一日三餐和新型打卡机制鼓励大家健康饮食。</text>
			</view>
		</view>

		<view class="titleZ text-center align-center margin-top-xl">
			<text class="text-bold">权限信息</text>
			<view class="contentZ margin-top-lg">
				<text class="text-xl text-bold"></text>
				<text
					class="text-xl">  本项目承诺，仅通过微信获取您的用户名与头像信息，绝不以任何方式收集用户的隐私信息并应用于任何商业目的，程序内所有信息自愿填写，安全，值得信赖是本程序恪守的准则    </text>
			</view>
		</view>

		<button class='' open-type="contact">
			<image src='../../static/logo.png' class='share-img png round shadow-lg bg-white' mode='aspectFit'>
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
				timer: null
			}
		},
		mounted() {

			clearInterval(this.timer)
			this.timer = null
			if (this.timer == null) {
				this.timer = setInterval(() => {
					console.log('12412312')
					this.nav()
					
				}, 4000)
			}
		},
		destroyed: function() {
			// 每次离开当前界面时，清除定时器
			clearInterval(this.timer)
			this.timer = null
		},
		data() {
			return {
				animation_timer: null, // 动画定时器
				width: 375,
				height: 1920
			}
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
			nav(){
				uni.navigateTo({
					url: '/pages/index/login'
				})
				clearInterval(this.timer)
				this.timer = null
			},
			_startLikeAnimation() {
				this.animation_timer = setInterval(() => {
					this.$refs.likeFx.likeClick()
				}, 300)
			}
		}
	}
</script>

<style lang="scss" scoped>

	.titleword{
		width: 200px;
		height: 67px;
		font-size: 50px;
		font-family: TsangerFeiBai W01-Regular, TsangerFeiBai W01;
		font-weight: 400;
		color: #009594;
		line-height: 0px;
		text-stroke: 3px #009594;
		margin: 430px auto;
	}
	.picgif{
		position: absolute;
		width: 460px;
		height: 256px;
		top: 30%;
		left: 50%;
		transform: translate(-50%);
		image{
			width: 100%;
			height: 100%;
		}
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

	.about-bg {
		background-size: cover;
		width: 100vw;
		height: 100vh;
		justify-content: center;
		flex-direction: column;
		color: #2E8987;
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
		margin: 0;
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
		color: #2E8987;
		background: linear-gradient(-120deg, #F8FCFC, #83e8cf, #d5f2f5);
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
l
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
