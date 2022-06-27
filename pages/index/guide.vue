<template>
	<view class="">
		<view class='bgimg animated bounceInRight'>
			<image style="width: 95%;height: 100%;opacity: 0.9;z-index: -1;" :src="pagelist[index]"></image>
		</view>
		<view class="login" v-show="index!=2">
			<button hover-class="animated rubberBand" class="loginbutton" @click="next"> 下一步 </button>
		</view>
		<view class="login" v-show="index==2">
			<button hover-class="animated rubberBand" class="loginbutton" @click="start"> 开始使用 </button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index:0,
				pagelist:['https://s1.ax1x.com/2022/06/27/jVPZUH.png','https://s1.ax1x.com/2022/06/27/jVPVVe.png','https://s1.ax1x.com/2022/06/27/jVPAbD.png']
			}
		},
		methods: {
			next(){
				this.index++;
			},
			start(){
				uni.navigateTo({
					url: '/pages/index/tabbar'
				})
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
		margin: 230px auto;
	}
	
	.bgimg {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		/* 		background: #f367c7; */
		z-index: -1;
	}

	.login {
		display: relative;
		width: 100%;
		padding: 10px;
	}

	.loginfont {
		height: 50rpx;
		font-size: 36rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 50rpx;
		justify-content: center;
		width: 100%;
		text-align: center;
		margin-top: 940rpx;
	}

	.loginbutton {
		margin-top: 190%;
		width: 250rpx;
		height: 80rpx;
		background: #027D7A;
		box-shadow: 0rpx 4rpx 10rpx -4rpx #027D7A;
		border-radius: 40rpx;
		font-size: 28rpx;
		text-align: center;
		justify-content: center;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 80rpx;
		/* margin-left: 140rpx; */
	}
</style>