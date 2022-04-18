<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">舌诊</block>
		</cu-custom>
		<view style="padding-top: 100rpx;padding-bottom: 100rpx;">
			<view class="imgBox box column">
				<image style="border-radius:40rpx;display: flex;margin: auto;" v-if="img" :src="img" mode="aspectFit">
				</image>
			</view>
		</view>

		<view style="display:flex">
			<van-button style="margin :auto" @click="chooseImg()">
				拍照/选取图片
			</van-button>
			<van-button style="margin :auto" @click="foodTap()">
				获取诊断说明书
			</van-button>
		</view>
		<view style="padding-top: 60rpx;">
		</view>
		<view v-show="showT">
			<view class="text-bold text-shadow"
				style="padding-top: 40rpx;font-size: 40rpx;text-align: center;background-color: #FEFEFE;">诊断报告书</view>
			<view class="box column" style="background-color: #FEFEFE;  line-height: 3 ">
				<view class="bg-white column"></view>
				<view class="bg-white margin-top-xs pad column">
					<text class="text-xl text-bold text-blue text-shadow">
						体质：
					</text>
					<text class="height">
						{{tizhi_name}}
					</text>
				</view>
				<view class="bg-white margin-top-xs pad column">
					<text class="text-xl text-bold text-blue text-shadow">
						常见表现：
					</text>
					<text class="height">
						{{changjianbiaoxian}}
					</text>
				</view>
				<view class="bg-white margin-top-xs pad column">
					<text class="text-xl text-bold text-blue text-shadow">
						发病倾向：
					</text>
					<text class="height">
						{{fabingqingxiang}}
					</text>
				</view>
				<view class="bg-white margin-top-xs pad column">
					<text class="text-xl text-bold text-blue text-shadow">
						食疗：
					</text>
					<text class="height">
						{{shiliao}}
					</text>
				</view>
				<view class="bg-white margin-top-xs pad column">
					<text class="text-xl text-bold text-blue text-shadow">
						精神调养：
					</text>
					<text class="height">
						{{jingshentiaoyang}}
					</text>
				</view>
				<view class="bg-white margin-top-xs pad column">
					<text class="text-xl text-bold text-blue text-shadow">
						体育锻炼：
					</text>
					<text class="height">
						{{tiyuduanlian}}
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import md5 from '../../common/md5.js'
	export default {
		data() {
			return {
				img: "https://s1.328888.xyz/2022/04/11/fqyMq.png",
				content: '',
				showT: false,
				imgUrl: '',
				dishName: '',
				calorie: '',
				probability: '',
				tizhi_name: '',
				changjianbiaoxian: '',
				fabingqingxiang: '',
				jingshentiaoyang: '',
				tiyuduanlian: '',
				shiliao: '',
				// zhengxing,
			}
		},
		onLoad() {

		},
		methods: {
			chooseImg() {
				var that = this
				this.ishow = false;
				this.content = '';
				wx.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success(res) {
						const tempFilePaths = res.tempFilePaths[0]
						that.getUrl(tempFilePaths) //应该在这  调取接口  返回你一个网路地址图片的链接    
						that.img = tempFilePaths
					}
				})
			},
			getUrl(url) {
				var that = this
				const FileSystemManager = wx.getFileSystemManager();
				FileSystemManager.readFile({
					filePath: url,
					encoding: 'base64',
					success(res) {
						// console.log(res,"img-------------")
						that.imgUrl = res.data
					}
				})
			},
			foodTap() {
				var that = this
				const imgUrl = that.imgUrl;
				if (!imgUrl) {
					wx.showToast({
						title: '请上传图片',
					})
					return;
				};
				this.postApi(imgUrl)
			},

			generateTimeReqestNumber() {
				var date = new Date();
				return date.getFullYear().toString() + this.pad2(date.getMonth() + 1) + this.pad2(date.getDate()) + this
					.pad2(date.getHours()) + this.pad2(date.getMinutes()) + this.pad2(date.getSeconds());
			},

			pad2(n) {
				return n < 10 ? '0' + n : n
			},
			toUpperCase(str) { //小写字母转大写
				str = str.toUpperCase();
				return str;
			},
			postApi(img) {
				var that = this
				var time = this.generateTimeReqestNumber()
				var timestamp = time.toString()
				console.log(timestamp, "time")
				var timeMd5 = md5(timestamp)
				timeMd5 = this.toUpperCase(timeMd5)
				var key = "6236d8084b854562a20ed13fa272d6a8"
				var sign = md5(timeMd5 + key)
				var sign = this.toUpperCase(sign)
				console.log(time, "md5tim2")
				console.log(sign, "md5tim2")
				uni.request({
					url: 'http://www.aibayes.cn/api/analysis',
					method: 'POST',
					header: {
						// 'content-type': 'multipart/form-data'
						'content-type': ' application/x-www-form-urlencoded'
					},
					data: {
						app_id: "70cd5aa7a6a143d0",
						timestamp: timestamp,
						version: "1.0",
						sign: sign,
						method: "jiuti",
						imgpath: "https://tongue-api.oss-cn-beijing.aliyuncs.com/weixin_20220321174512.jpg",
						// imgpath:img,
						timeout_express: 600
					},
					success: (res) => {
						console.log(res.data.data, "get")
						var value = JSON.parse(res.data.data)
						that.tizhi_name = value.tiaoli.tizhi_name
						that.changjianbiaoxian = value.tiaoli.changjianbiaoxian
						that.jingshentiaoyang = value.tiaoli.jingshentiaoyang
						that.fabingqingxiang = value.tiaoli.fabingqingxiang
						that.tiyuduanlian = value.tiaoli.tiyuduanlian
						that.shiliao = value.tiaoli.shiliao
						that.showT=true
					}
				})
			},


			// 获取当前时间
			getNowTime() {
				let dateTime
				let yy = new Date().getFullYear()
				let mm = new Date().getMonth() + 1
				if (mm < 10) {
					mm = "0" + mm.toString()
				}
				let dd = new Date().getDate()
				let hh = new Date().getHours()
				let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() :
					new Date().getMinutes()
				let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() :
					new Date().getSeconds()
				dateTime = yy + "" + mm + dd + hh + mf + ss
				dateTime = dateTime.toString()
				console.log(dateTime)
				return dateTime
			},
			goMenu(dishName) {
				console.log(dishName)
				uni.redirectTo({
					url: '../page_menu/breakfast?dishName=' + dishName
				})
			}
		}
	}
</script>

<style>
	.imgBox {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		text-align: center;
		width: 700rpx;
		height: 570rpx;
	}

	.box {
		background-color: #f3f6f6;
		border-radius: 40rpx;
		margin: auto;
	}

	.column {
		display: flex;
		flex-direction: column
	}

	.height {
		line-height: 2
	}

	.pad {
		padding-left: 30rpx;
		padding-right: 30rpx;
	}
</style>
