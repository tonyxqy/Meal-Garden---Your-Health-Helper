<template>
	<view>
		<view class='bgimg'>
			<image style="width: 100%;height: 100%;opacity: 0.9;z-index: -1;" v-if="img" :src="img"></image>
		</view>
		<view class="titleword">
			膳食花园
		</view>
		<view class="login">
			<button hover-class="animated rubberBand" class="loginbutton" @click="getUserInfo"> 立即登录 </button>
		</view>
		<view class="explain">
			<view @click="goExplain">
				<u-icon name="question-circle-fill" size="30"></u-icon>
				程序介绍与权限使用说明
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		// onLoad() {
		// 	console.log("测试")
		// },
		mounted() {
			console.log(222)
			var that = this
			var nowDate = new Date();
			var year = nowDate.getFullYear();
			var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
			var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
			var timer = year + month + day
			console.log(timer, "timer")
			let beforedate = uni.getStorageSync('before')
			let sec = uni.getStorageSync('itemlogin')
			console.log(sec,beforedate,"ceshi")
			console.log(timer>beforedate)
			if (sec != "" && timer<=beforedate) {
				console.log("调整")
				console.log(sec)
				uni.reLaunch({
					url: "tabbar",
					fail(fail) {
						console.log(fail)
					}
				})
				// uni.reLaunch({
				// 	url:"pages/index/tabbar"
				// })
			} else {
				console.log("不调整")
				// uni.reLaunch({
				// 	url: "tabbar"
				// })
				// console.log("logintrue")
			}
		},
		
		data() {
			var that = this
			var nowDate = new Date();
			var year = nowDate.getFullYear();
			var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
			var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
			var before = year + month + day
			console.log(before, "before dateStrdateStrdateStr")
			return {
				img: "https://s1.ax1x.com/2022/06/25/jkaTWn.png",
				logion: true,
				before,
			}
		},
		methods: {
			goExplain() {
				uni.navigateTo({
					url: './explain'
				});
			},
			mounted(flag) {
				console.log(flag)
				var that = this
				let sec = uni.getStorageSync('itemlogin')
				console.log(sec)
				if (sec != null) {
					console.log(sec)
					if(flag){
						uni.reLaunch({
							url: "guide",
							fail(fail) {
								console.log(fail)
							}
						})
					}
					else{
						uni.reLaunch({
							url: "tabbar",
							fail(fail) {
								console.log(fail)
							}
						})
					}
					// uni.reLaunch({
					// 	url:"pages/index/tabbar"
					// })
				} else {
					if(flag){
						uni.reLaunch({
							url: "guide",
							fail(fail) {
								console.log(fail)
							}
						})
					}
					else{
						uni.reLaunch({
							url: "tabbar",
							fail(fail) {
								console.log(fail)
							}
						})
					}
				}
			},

			getUserInfo() {
				this.logion = false
				wx.getUserProfile({
					desc: '用于完善会员资料',
					success: (resinfo) => {
						// console.log(resinfo, "resinfo");
						wx.login({
							success: (res) => {
								// console.log(resinfo, "code");
								// console.log(resinfo.userInfo.avatarUrl,resinfo.userInfo.nickName)
								uni.setStorageSync('avatarUrl', resinfo.userInfo.avatarUrl);
								uni.setStorageSync('nickName', resinfo.userInfo.nickName);
								var nickName = uni.getStorageSync('nickName')
								var avatarUrl = uni.getStorageSync('avatarUrl')
								// console.log(nickName,avatarUrl,"name")
								if (res.code) {
									// console.log(res.code, "getProfile");
									this.setCode(res.code, resinfo);
								} else {
									// console.log(res.errMsg);
								}
							},
							fail: (err) => {
								console.log(err);
							}
						})
					},
					fail: (errinfo) => {
						//console.log(errinfo);
					}
				})
			},
			// 传code
			setCode(code, resinfo) {
				wx.request({
					// url: 'http://localhost:8088/user/wx/login',
					url: 'https://xuyq.xyz:3306/user/wx/login',
					method: "POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					data: {
						code: code, //临时登录凭证
						rawData: resinfo.rawData, //用户非敏感信息
						// signature: resinfo.signature, //签名
						encrypteData: resinfo.encryptedData, //用户敏感信息
						iv: resinfo.iv //解密算法的向量
					},
					success: (loginRes) => {
						// console.log(loginRes, "loginRes");
						if (loginRes.data.status == 200) {
							uni.setStorageSync('itemlogin', loginRes.data.data);
							this.getUserid(loginRes.data.data)
							console.log(loginRes)
							this.mounted(loginRes.data.flag)
							// console.log(loginRes.data.data)
						} else {
							uni.showToast({
								title: '登录失败',
								icon: 'none'
							});
						}
					},
					fail: (loginErr) => {}
				})
			},
			getUserid(id) {
				var that = this
				uni.request({
					// url: 'http://localhost:8088/user/findUserId',
					url: 'https://xuyq.xyz:3306/user/findUserId',
					method: 'GET',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					data: {
						skey: id
					},
					success: (res) => {
						console.log(res)
						uni.setStorageSync('before', this.before);
						console.log(this.before,"settimer")
						uni.setStorage({
							key: 'userId',
							data: res.data,
							success: function() {

							},
							fail: function(fail) {
								// console.log(fail)
							}
						});
					}
				})
			},

		}
	}
</script>

<style>
	.explain {
		width: 750rpx;
		// position: absolute;
		bottom: 40rpx;
		font-size: 24rpx;
		margin: 10rpx auto;
		text-align: center;
		color: #999999;
		}
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
