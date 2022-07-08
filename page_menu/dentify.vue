<template>
	<view>
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">菜品识别</block>
		</cu-custom>
		<view style="padding-top: 100rpx;padding-bottom: 100rpx;">
			<view class="imgBox">
				<image style="border-radius:40rpx;display: flex;margin: auto;" v-if="img" :src="img" mode="aspectFit">
				</image>
			</view>
		</view>

		<view style="display:flex">
			<van-button style="margin :auto" @click="chooseImg()">
				拍照/选取图片
			</van-button>
			<van-button style="margin :auto" @click="foodTap()">
				识别菜品
			</van-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: "https://s1.328888.xyz/2022/04/11/fqyMq.png",
				content: '',
				ishow: false,
				imgUrl: '',
				dishName:'',
				calorie:'',
				probability:'',
				num:0,
			}
		},
		methods: {
			onload(defi){
				let de = JSON.stringify(defi);
				de = de.trim().replace(/\"|\{|\}/g, "");
				var key = de.split(":");
				de = key[1]
				this.num = de;
				console.log(de, this.num, "ceshi")
			},
			chooseImg() {
				var that = this
					this.ishow=false;
					this.content='';
				wx.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success(res) {
						const tempFilePaths = res.tempFilePaths[0]
						that.getUrl(tempFilePaths)
						that.img=tempFilePaths
					}
				})
			},
			getUrl(url) {
				var that =this
				const FileSystemManager = wx.getFileSystemManager();
				FileSystemManager.readFile({
					filePath: url,
					encoding: 'base64',
					success(res) {
						that.imgUrl=res.data
					}
				})
			},
			foodTap() {
				var that =this
				const imgUrl = that.imgUrl;
				if (!imgUrl) {
					wx.showToast({
						title: '请上传图片',
					})
					return;
				};
				this.getToken(function(token) {
					that.getResult(token);
				});
			},
			getToken(callback) {
				uni.request({
					url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=4uICksD30g7kyKIq05gWmy7i&client_secret=zFlQ5a6P9Pr486sVTrhYaassFCCB5M9Y',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success(res) {
						console.log(res.data)
						var token = res.data.access_token;
						return callback(token);
					}
				});
			},
			getResult(token) {
				var that = this
				uni.request({
					url: 'https://aip.baidubce.com/rest/2.0/image-classify/v2/dish?access_token=' + token,
					method: "post",
					data: {
						image: that.imgUrl,
						baike_num: 1,
						top_num: 1
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded' // 默认值
					},
					success(res) {
						console.log(res)
						that.dishName= res.data.result[0].name
						that.calorie= res.data.result[0].calorie
						that.probability= res.data.result[0].probability

						wx.showModal({
							title: '菜品为' + that.dishName,
							content: '置信度' + that.probability + ' ' + '热量为' + that.calorie +
								'\n是否添加到今日菜品',
							success(res) {
								if (res.confirm) {
										that.goMenu(that.dishName)
								} else {
									return
								}
							}
						})
					}
				});
			},
			goMenu(dishName){
				uni.redirectTo({
					url:'../page_menu/breakfast?dishName='+dishName
				})
			},
		}
	}
</script>

<style>
	.imgBox{
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		text-align: center;
		width: 600rpx; height: 470rpx;
		background-color: #f3f6f6;
		border-radius: 40rpx;
		display: flex;margin: auto;
	}
</style>
