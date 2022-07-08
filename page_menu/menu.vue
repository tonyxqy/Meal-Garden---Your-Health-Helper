<!-- 项目展示 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">食谱</block>
		</cu-custom>
		<view class="abar topsearch bg-white">
			<view class="frame">
				<input v-model="foodText"></input>
			</view>
			<text @click="getmenu()">搜索</text>
			<u-icon name="camera" color="#999fab" size="28"></u-icon>
		</view>

		<view class='swiper_con' wx:if="foodList">
			<view class='swiper_con_view' v-for="(item,index) of foodArray" :key="index" @click="bindIt(item)">
				<image class="swiper_con_view" v-if="item.pictureUrl" :src="item.pictureUrl" mode="widthFix" lazy-load="true"
					style="width:100%"></image>
				<view class="taText" style="width:90%;display:inline-block;">
					<van-tag color="#4a9bd9" style="padding: 10rpx; vertical-align: middle;">{{item.taste}}</van-tag>
					<text class="meText">{{item.menu}}</text>
				</view>
				<view style="width:90%;display:inline-block;">
					<text style="padding: 20rpx;">{{item.process}}</text>
					<text>{{item.time}}</text>
				</view>
			</view>
		</view>
		<u-popup v-model="showT" mode="center" width="690rpx" @close="popupClose" border-radius="20" style=" border: 10rpx;" >
			<view style="width: 100%;height: 100%;background-color: #fefefe;display: flex;flex-direction:column;">
				<view class="canlass">
					<view class="aasd" style="padding-left: 20rpx;" @click="showT = false"> 取消 </view>
					<view class="titileCenter">菜名： {{menu}} </view>
					<view class="aasd" style="padding-right: 20rpx;text-align: right;" @click="showT = false"> 确定
					</view>
				</view>
<view class="displayRow">
					<view>
						<view>
							<image :src="popArray.pictureUrl" mode="aspectFill"
								style="padding-left:0rpx ;width:170px;height: 250px;text-align: center;left:30rpx;border-radius: 10px;">
							</image>
						</view>

						<view
							style="display: flex;flex-direction:row; padding-top:25rpx ;padding-left:30rpx ;padding-bottom: 20rpx;border:10rpx;border-color: #007AFF;">
							<text class="text-lg text-black text-blue">分量</text>
							<van-stepper style="padding-left: 40rpx;" value="volume" step="0.5" :decimal-length="1"
								button-size="20px" bind:change="onChange" />
						</view>
					</view>
					<view style="padding-left: 30rpx">
						<view style="padding-left: 20rpx;padding: 10rpx;display:inline-block;" slot="desc"
							v-for="(item,index) in popArray.classifiction">
							<van-tag color="#0BCCD2" style="padding: 10rpx; vertical-align: middle;" size="large"
								v-if="index<4">
								{{item}}
							</van-tag>
						</view>

						<view class="displayCol " style="padding-left:30rpx;color: #304156; ">
							<view style="display:inline-block; text-align: left; padding-top: 10rpx;">
								<text class="text-black text-blue">{{popArray.process}} </text>
								<text style="color: #304156;padding-left:10rpx ;">{{popArray.time}}</text>
							</view>
						</view>
						<view class="text-lg text-black text-blue" style="padding:30rpx; padding-bottom: 20rpx;">所需食材：
						</view>
						<view class="displayRow">
							<view class="detailsTop">
								<view slot="desc" v-for="(item, index) in popArray.ingredients">
									<text style="padding-right: 15rpx;display: flex;justify-content: flex-start;"
										v-if="index<6">
										{{item}}
									</text>
								</view>
							</view>
							<view class="detailsTop">
								<view slot="desc" v-for="(item, index) in popArray.ingredients2">
									<text style="padding-right: 15rpx;display: flex;justify-content:flex-start;"
										v-if="index<6">
										{{item}}
									</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="details">
						<text class="text-xl text-bold text-shadow">步骤：</text>
					<view slot="desc" v-for="(item, index) in popArray.practice">
						<text style="line-height: 30rpx;"v-if="index<6">
							({{index+1}}){{item}}
						</text>
					</view>
				</view>
				<view class="displayCol"
					style="padding: 15rpx;padding-left: 30rpx;line-height: 35px;letter-spacing: 2rpx;">
					<text class="text-lg text-black">您想将其添加至</text>
					<van-radio-group value="radio" @change="onChange()" direction="horizontal">
						<van-radio name="1">早餐</van-radio>
						<van-radio name="2">中餐</van-radio>
						<van-radio name="3">晚餐</van-radio>
					</van-radio-group>
				</view>
				<van-button type="default" block @click="submitMenu()">提交</van-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import request from '@/common/request.js'
	export default {
		data() {
			var user_id = uni.getStorageSync('userId')
			console.log(user_id,"userId")
			var nowDate = new Date();
			var year = nowDate.getFullYear();
			var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
			var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
			var timer = year + "-" + month + "-" + day
			console.log(timer, "dateStrdateStrdateStr")
			const array = [1, 2, 3]
			const mea = ["碗", "个"]
			return {
				title: 'picker-view',
				array,
				index: 0,
				visible: true,
				indicatorStyle: `height: 50px;`,
				idx: 0,
				foodText: "",
				history: false, //显示历史记录
				noView: false, //显示未找到提示
				foodList: false, //显示商品列表
				showT: false,
				historyArray: [], //历史记录数组,
				popArray: [], //弹出框
				foodArray: [],
				img: "",
				menu: "",
				volume: 2,
				radio:1,
				user_id,
				timer,
			}
		},

		methods: {
			bindIt(e) {
				this.showT = true
				this.popArray = e
				this.img = e.pictureUrl
				this.menu = e.menu
				this.help(this.popArray)
				console.log(this.popArray, "popArray")
			},
			help(self) {
				if (self.ingredients != null) {
					let sep = /\,|\:/
					let ingredients = self.ingredients.slice(1, -1).split(sep)
					let list2 = []
					let list1 = []
					let ingredients2 = []
					ingredients.forEach((self, index) => {
						let change = self.trim().replace(/\'/g, "");
						if (index % 2 == 0) list1.push(change)
						else list2.push(change)
					})
					self.ingredients = list1
					self.ingredients2 = list2
					console.log(list2, "list")
				}
				if (self.classifiction != null) {
					let classifiction = self.classifiction.slice(1, -1).split(',')
					let list = []
					classifiction.forEach((self, index) => {
						let change = self.trim().replace(/\'/g, "");
						list.push(change)
					})
					self.classifiction = list
				}
				if (self.practice != null) {
					let practice = self.practice.slice(1, -1).split(',')
					let list = []
					practice.forEach((self, index) => {
						let change = self.trim().replace(/\'|\\n|\d|\\t/g, "");
						list.push(change)
					})
					self.practice = list
				}
			},
			onLoad(tag) {
				this.getMenu(tag)
			},
			setIdx() {
				this.idx = this.index
			},
			getMenu(tag){
				var that = this
				this.showT=false
				let id = JSON.stringify(tag);
				id=id.trim().replace(/\^[A-Za-z]|\"|\{|\}/g, "");
				var key=id.split(":");
				key[1]=parseInt(key[1])
				console.log(key[1],"tag")
				uni.request({
					url: 'https://xuyq.xyz:3306/dish/classification',
					method: 'GET',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					data: {
						classification:key[1]
					},
					success: (res) => {
						uni.hideLoading();
						console.log(200,"get")
						console.log(res.data,"getmenu")
						this.foodArray = res.data
						console.log(this.foodArray[0])
					}
				})
			},
			onChange(event) {
				this.radio = parseInt(event.detail)
				console.log(this.radio, "onchange早中晚餐的绑定")
			},
			submitMenu() {
				var that = this
				this.showT = false
				console.log(this.radio,this.menu, this.user_id, this.timer, this.volume)
				uni.showLoading({
					title: '上传中'
				})
				if (this.radio == 1) {
					var opt = {
						url: 'user/addTodayMenubreakfast',
						method: 'POST'
					}
				};
				if (this.radio == 2) {
					var opt = {
						url: 'user/addTodayMenulunch',
						method: 'POST'
					}
				};
				if (this.radio == 3) {
					var opt = {
						url: 'user/addTodayMenudinner',
						method: 'POST'
					}
				};
				let data = {
					user_id: this.user_id,
					menu: this.menu,
					foodnumber: this.volume,
					createTime: this.timer,
				};
				request.httpRequest(opt, data).then(res => {
					uni.hideLoading();
					if (res.statusCode == 200) {
						uni.hideLoading();
						console.log(200, "addsuccess")
						wx.showToast({
							title: '提交成功',
							icon: 'success',
							duration: 2000 //持续的时间
						})
					} else {
						console.log(data)
					}
				});
			},
			popupClose(){
				this.showT=false
			}
		}
	}
</script>

<style>
	/* 展示框第一行 超出截断 */
	.taText {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	/* 展示框菜品文字 上下居中 */
	.meText {
		font-size: 28rpx;
		font-weight: bold;
		padding: 10rpx;
		vertical-align: middle;
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
	.displayRow {
		display: flex;
		flex-direction: row;
	}
	.detailsTop {
		padding: 30rpx;
		overflow: scroll;
		line-height: 20px;
		max-height: 140px;
		color: #304156;
		letter-spacing:2rpx;
	
		display: flex;
		flex-direction:row;
		flex-wrap: wrap;
	}

	.details {
		display: flex;
		flex-direction: column;
		width: 100%;
		text-align: left;
		padding: 20rpx;
		padding-left:30rpx ;
		line-height: 20px;
		color: #304156;
		letter-spacing:2rpx;
	}

	.titileCenter {
		width: 70%;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		font-size: 30rpx;
		overflow: hidden;
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
		background-color: #fefefe;
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
/* 		height: 580rpx; */
		background-color: white;
		border-radius: 5px;
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

	/* picker样式 */
	.picker-view {
		width: 750rpx;
		height: 600rpx;
		margin-top: 20rpx;
	}

	.item {
		height: 50px;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
</style>
