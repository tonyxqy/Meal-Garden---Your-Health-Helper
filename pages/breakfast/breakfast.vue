<template>
	<view>
		<cu-custom bgColor="bg-green" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">早餐</block>
		</cu-custom>
		<view class="abar topsearch bg-white">
			<view class="frame">
				<input v-model="foodText"></input>
			</view>
			<text @click="getmenu()">搜索</text>
			<u-icon name="camera" color="#999fab" size="28"></u-icon>
		</view>

		<view class='swiper_con' wx:if="foodList">
			<view class='swiper_con_view' v-for="(item,index) of foodArray" :key="index" @click="showT = true,setIdx()">
				<image v-if="item.pictureUrl" :src="item.pictureUrl" mode="widthFix" style="width:100%"></image>
				<view style="width:100%;margin:3%;display:flex;justify-content:space-between;">
					<text style="font-size:28rpx">{{item.menu}}</text>
					<text style="font-size:28rpx">{{item.taste}}</text>
					<u-icon @click="postmenu" name="plus-circle" color="#999fab" size="28"></u-icon>
					<view class="swiper_con_view_view">
					</view>
				</view>
			</view>
		</view>
		<u-popup v-model="showT" mode="center" height="950rpx" width="690rpx" @close="popupClose" border-radius="10">
			<view class="" style="width: 100%;height: 100%;background-color: #F0F0F0;">
				<view class="canlass">
					<view class="aasd" style="padding-left: 20rpx;" @click="showT = false"> 取消 </view>
					<view class="aasd" style="text-align: center;"> {{foodArray[idx].menu}} </view>
					<view class="aasd" style="padding-right: 20rpx;text-align: right;" @click="showT = false"> 确定
					</view>
				</view>
				<image v-if="foodArray[0].pictureUrl" :src="foodArray[0].pictureUrl" mode="aspectFit"
					style="width:75%;display: block;margin: auto;"></image>
				<view class="centser" style="width:100%;display:block;margin: auto;">
					{{foodArray[idx].process}}
					{{foodArray[idx].time}}
				</view>
				<view class="good">
					早餐
				</view>
				<input type="text" class="wenben" value="" placeholder="请输入" />

				<button @click="submitMenu()">
					提交
				</button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				idx: 0,
				foodText: "",
				history: false, //显示历史记录
				noView: false, //显示未找到提示
				foodList: false, //显示商品列表
				showT: false,
				historyArray: [], //历史记录数组,
				newArray: [], //添加历史记录数组
				foodArray: []
			}
		},

		methods: {
			getBreakfast() {
				var that = this
				uni.request({
					url: 'http://47.102.203.108:3306/dish/breakfast',
					success: (res) => {
						console.log(res.data[1])
						this.foodArray = res.data
						console.log(this.foodArray[0].pictureUrl)
					}
				})
			},
			onLoad() {
				this.getBreakfast()
			},
			setIdx() {
				this.idx = this.index
			},
			getmenu() {
				var that = this
				uni.request({
					url: 'http://47.102.203.108:3306/dish/dish?menu=' + this.foodText,
					success: (res) => {
						console.log(res.data[1])
						this.foodArray = res.data
						console.log(this.foodArray[0].pictureUrl)
					}
				})
			},
			submitMenu() {
				var that = this
				var menu=this.foodArray[0].menu
				console.log(menu)
				uni.request({
					url: 'http://47.102.203.108:3306/user/addTodayMenubreakfast',
					method: 'POST',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					data: {
						user_id:8,
						menu:menu,
					},
					success: (res) => {
						console.log(200)
					}
				})

			}
		}
	}
</script>

<style>
	.anniu {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		width: 300rpx;
		height: 70rpx;
		border-radius: 40rpx;
		background-color: #007AFF;
		color: #FFFFFF;
		margin-top: 40rpx;
	}

	.ggood {
		margin-left: 25rpx;
	}

	.fired {
		width: 650rpx;
		height: 88rpx;
		background-color: #FFFFFF;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.good {
		width: 650rpx;
		margin: 0 auto;
		margin-top: 20rpx;
	}

	.wenben {
		width: 100%;
		height: 88rpx;
		background-color: #FFFFFF;
		margin-top: 25rpx;
		padding-left: 20rpx;
	}

	.centser {
		width: 100%;
		text-align: center;
		line-height: 50rpx;
	}

	.aasd {
		width: 33.33%;
		height: 88rpx;
		line-height: 88rpx;
	}

	.canlass {
		height: 88rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.top {
		width: 100%;
		background-color: #f7f7f7;
	}

	.sbar {
		position: fixed;
		top: 0;
	}

	.topsearch {
		width: 100%;
		display: flex;
		padding: 2% 0;
		align-items: center;
	}

	.frame {
		background-color: white;
		width: 75%;
		border-radius: 20rpx;
		padding: 0 3%;
	}

	.frame>input {
		font-size: 24rpx;
		margin: 6rpx 0;
	}

	.topsearch>text {
		width: 10%;
		margin-left: 5%;
		color: #a8a7a7fa;
	}

	.history {
		background-color: white;
		padding: 4%;
	}

	.history_title {
		font-size: 30rpx;
		display: flex;
		justify-content: space-between;
		color: #a8a7a7fa;
		align-items: center;
	}

	.history_text {
		padding: 4% 0;
		display: flex;
		flex-wrap: wrap;
	}

	.history_text>text {
		background-color: #f7f7f7;
		padding: 1% 3%;
		margin: 2%;
		border-radius: 40rpx;
		font-size: 30rpx;
	}

	.history_text>text:first-child {
		margin-left: 0;
	}

	.none {
		margin-top: 10%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.swiper_con {
		width: 96%;
		margin-left: 2%;
		display: flex;
		flex-wrap: wrap;
	}

	.swiper_con_view {
		width: 48%;
		height: 530rpx;
		background-color: white;
		margin: 10rpx 0;
	}

	.swiper_con_view:nth-child(even) {
		margin-left: 4%;
	}

	.swiper_con_view_view {
		margin-top: 5%;
		display: flex;
		align-items: center;
	}
</style>
