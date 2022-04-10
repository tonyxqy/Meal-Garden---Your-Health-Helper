<!-- 首页 -->
<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">首页</block>
		</cu-custom>
		<!-- bodyhelper -->
		<bodyhelper style="z-index: 5;"></bodyhelper>


		<add-tip :tip="tip" :duration="duration" />
		<view id="container">
			<!-- banner图 -->
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" circular="true" indicator-dots="true" autoplay="true" interval="3500"
							duration="600">
							<swiper-item class="swiper-list" v-for="(item, index) in bannerList" :key="index">
								<view class="swiper-item uni-bg-red">
									<image class="swiper-img" :src="item.imageUrl" mode=""></image>
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
			<!-- 导航栏 -->
			<view class="cu-list grid solids-bottom col-4 no-border">
				<view class="cu-item" v-for="(item,index) in categories" :key="index"
					:style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" @click="goCategorieslist"
					:data-mid="item.mid">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
						<view class="cu-tag badge" v-if="item.count!=0">
							<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
						</view>
					</view>
					<text>{{item.name}}</text>
				</view>
			</view>
			<van-sticky offset-top="80 ">
				<view class="cu-bar bg-white margin-top-xs">
					<view class="action sub-title">
						<text class="text-xl text-bold text-blue text-shadow">今日能量</text>
						<text class="text-ABC text-blue">energy</text>
					</view>
				</view>
				<van-grid column-num="3" border="false" direction="horizontal">
					<van-grid-item use-slot text="糖分" border="false">
						<span class="iconfont">&#xe62d;</span>
						<text class="gridtext">糖分</text>
						<text class="gridtext1">:{{target.targetSugar}}g</text>
					</van-grid-item>
					<van-grid-item use-slot text="能量" border="false">
						<span class="iconfont">&#xe61b;</span>
						<text class="gridtext">能量</text>
						<text class="gridtext1">:{{target.targetEnergy}}cal</text>
					</van-grid-item>
					<van-grid-item use-slot text="脂肪" border="false">
						<span class="iconfont">&#xe725;</span>
						<text class="gridtext">脂肪</text>
						<text class="gridtext1">:{{target.targetFat}}g</text>
					</van-grid-item>
				</van-grid>
				<van-grid column-num="3" border="false">
					<van-grid-item use-slot text="糖分" style="text-align: center;">
						<view style="height: 160px">
							<van-circle style="display: block;margin: 5px 0;"
								:value="current.currentSugar/target.targetSugar*100" size="60"
								:text="current.currentSugar" :color="gradientColor[0]" />
							<text class="gridtext">糖分</text>
						</view>
					</van-grid-item>
					<van-grid-item use-slot text="热量">
						<view style="height: 180px;z-index: 1;margin-top: -20px;">
							<view class="charts-box">
								<qiun-data-charts type="gauge" :chartData="chartData" :loadingType="4"
									:errorShow="false" background="none" />
							</view>
						</view>
					</van-grid-item>
					<van-grid-item use-slot text="脂肪" style="text-align: center;">
						<view style="height: 160px">
							<van-circle style="display: block;margin: 5px 0;"
								:value="current.currentFat/target.targetFat*100" size="60" :text="current.currentFat"
								:color="gradientColor[2]" />
							<text class="gridtext">脂肪</text>
						</view>
					</van-grid-item>
				</van-grid>
			</van-sticky>

			<view class="cu-bar bg-white margin-top-xs">
				<view class="action sub-title">
					<text class="text-xl text-bold text-blue text-shadow">每日推荐</text>
					<text class="text-ABC text-blue">recommendation</text>
				</view>
				<view class="action" @click="goVideo">
					<text class="text-lg text-grey text-shadow">更多</text>
				</view>
			</view>

			<view class="skill-sequence-panel-content-wrapper">
				<!--左边虚化-->
				<view class="hide-content-box hide-content-box-left"></view>
				<!--右边虚化-->
				<view class="hide-content-box hide-content-box-right"></view>
				<scroll-view scroll-x="true" class="kite-classify-scroll">
					<div class="loader" v-if="show">
						<div class="dot"></div>
						<div class="dot"></div>
						<div class="dot"></div>
						<div class="dot"></div>
						<div class="dot"></div>
					</div>
					<view class="kite-classify-cell shadow" v-for="(item, index) in curriculum" :key="index">
						<view :class="'nav-li bg-index' + ((index%6)+1)">
							<view class="nav-name">{{item.menu}}</view>
						</view>
						<view class="nav-content" style="height: 100%;">
							<van-grid column-num="1" :border="false">
								<van-grid-item use-slot>
									<image style="width: 100%; height: 90px;border-radius: 10%;"
										:src="item.pictureUrl" />
								</van-grid-item>
							</van-grid>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="cu-bar bg-white margin-top-xs">
				<view class="action sub-title">
					<text class="text-xl text-bold text-blue text-shadow">我的今日食谱</text>
					<text class="text-ABC text-blue">Daily recipe</text>
				</view>
				<view class="action" @click="goBreakfast">
					<text class="text-lg text-grey text-shadow">早餐</text>
				</view>
				<view class="action" @click="goLunch">
					<text class="text-lg text-grey text-shadow">中餐</text>
				</view>
				<view class="action" @click="goDinner">
					<text class="text-lg text-grey text-shadow">晚餐</text>
				</view>
			</view>
			<!-- <view style="height: 1000px;"> -->
		</view>

		<view class="cu-card case no-card">
			<view @click="bind(item)" class="cu-item shadow" v-for="(item, index) in breakfastList" :key="index">
				<van-card :price="item.taste" currency=" " lazy-load="true" :title="item.menu" :thumb="item.pictureUrl">
					<view slot="desc" v-for="(item, index1) in item.classifiction" v-if="index1<3">
						<van-tag :type="mystylelist[3-index1]" style="float: left;margin: 2rpx;" v-if="index1<2">
							{{item}}
						</van-tag>
						<van-tag :type="mystylelist[3-index1]" style="display: block;margin: 2rpx;" v-if="index1==2">
							{{item}}
						</van-tag>
					</view>
					<view slot="tags" v-for="(item, index1) in item.ingredients" v-if="index1<3">
						<van-tag plain :type="mystylelist[index1]" style="float: left;margin: 2rpx;">{{item}}</van-tag>
					</view>
					<view slot="bottom" style="float: right;">
						糖:{{item.sugar}} 脂肪{{item.fat}} 能量{{item.energy}}
					</view>
					<view slot="footer">
						<van-button size="mini" type="danger" @click="deleteMenuBreakfast(item)">删除</van-button>
					</view>
				</van-card>
			</view>
			<view @click="bind(item)" class="cu-item shadow" v-for="(item, index) in lunchList" :key="index">
				<van-card :price="item.taste" currency=" " lazy-load="true" :title="item.menu" :thumb="item.pictureUrl">
					<view slot="desc" v-for="(item, index1) in item.classifiction" v-if="index1<3">
						<van-tag :type="mystylelist[3-index1]" style="float: left;margin: 2rpx;" v-if="index1<2">
							{{item}}
						</van-tag>
						<van-tag :type="mystylelist[3-index1]" style="display: block;margin: 2rpx;" v-if="index1==2">
							{{item}}
						</van-tag>
					</view>
					<view slot="tags" v-for="(item, index1) in item.ingredients" v-if="index1<3">
						<van-tag plain :type="mystylelist[index1]" style="float: left;margin: 2rpx;">{{item}}</van-tag>
					</view>
					<view slot="bottom" style="float: right;">
						糖:{{item.sugar}} 脂肪{{item.fat}} 能量{{item.energy}}
					</view>
					<view slot="footer">
						<van-button size="mini" type="danger" @click="deleteMenuLunch(item)">删除</van-button>
					</view>
				</van-card>
			</view>
			<view @click="bind(item)" class="cu-item shadow" v-for="(item, index) in dinnerList" :key="index">
				<van-card :price="item.taste" currency=" " lazy-load="true" :title="item.menu" :thumb="item.pictureUrl">
					<view slot="desc" v-for="(item, index1) in item.classifiction" v-if="index1<3">
						<van-tag :type="mystylelist[3-index1]" style="float: left;margin: 2rpx;" v-if="index1<2">
							{{item}}
						</van-tag>
						<van-tag :type="mystylelist[3-index1]" style="display: block;margin: 2rpx;" v-if="index1==2">
							{{item}}
						</van-tag>
					</view>
					<view slot="tags" v-for="(item, index1) in item.ingredients" v-if="index1<3">
						<van-tag plain :type="mystylelist[index1]" style="float: left;margin: 2rpx;">{{item}}</van-tag>
					</view>
					<view slot="bottom" style="float: right;">
						糖:{{item.sugar}} 脂肪{{item.fat}} 能量{{item.energy}}
					</view>
					<view slot="footer">
						<van-button size="mini" type="danger" @click="deleteMenuDinner(item)">删除</van-button>
					</view>
				</van-card>
			</view>
		</view>
<!-- 		<u-popup v-model="showT" mode="center" width="690rpx" @close="popupClose" border-radius="20"
			style=" border: 10rpx;">
			<view style="width: 100%;height: 100%;background-color: #fefefe;display: flex;flex-direction:column;">
				<view class="canlass">
					<view class="aasd" style="padding-left: 20rpx;" @click="showT = false"> 取消 </view>
					<view class="titileCenter">菜名： {{popArray.menu}} </view>
					<view class="aasd" style="padding-right: 20rpx;text-align: right;" @click="showT = false"> 确定
					</view>
				</view>
				<view style="display: flex;flex-direction:row;">
					<image :src="popArray.pictureUrl" mode="aspectFill"
						style="padding-left:20rpx ;width:560rpx;height: 500rpx;text-align: left;"></image>
					<view>
						<view>
							<view style="padding-left: 20rpx;padding: 10rpx;display:inline-block;" slot="desc"
								v-for="(item,index) in popArray.classifiction">
								<van-tag color="#D99F3E" style="padding: 10rpx; vertical-align: middle;" v-if="index<4">
									{{item}}
								</van-tag>
							</view>
						</view>
						<view style="display: flex;flex-direction:column;padding-left:30rpx;color: #304156; ">
							<view style="display: flex;flex-direction:row; padding-top:15rpx ;">
								分量
								<van-stepper style="padding-left: 40rpx;" value="volume" step="0.5" :decimal-length="1"
									button-size="20px" bind:change="onChange" />
							</view>
							<view style="display:inline-block; text-align: left; padding-top: 10rpx;">
								<text style="color: #304156;">{{popArray.process}} </text>
								<text style="color: #304156;padding-left:10rpx ;">{{popArray.time}}</text>
							</view>
						</view>
						<view class="detailsTop">
							<view slot="desc" v-for="(item, index) in popArray.ingredients">
								<text>
									{{item}}
								</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</u-popup> -->
		<view style="height: 140rpx;width: 1rpx;"></view>
		<u-popup v-model="logion" mode="center" height="320rpx" :mask-close-able="false" width="530rpx"
			border-radius="10">
			<view class="sdsfsdfd"> 请登录 </view>
			<button class="anniudddfd" @click="getUserInfo"> 立即登录 </button>
		</u-popup>
	</view>
</template>

<script>
	import uCharts from "@/components/u-charts/u-charts.js";
	import request from '@/common/request.js';
	import addTip from "../../components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip.vue"
	import bodyhelper from "./bodyhelper.vue"
	export default {
		components: {
			addTip,
			bodyhelper
		},
		data() {
			var user_id = uni.getStorageSync('userId')
			console.log(user_id, "userId")
			var nowDate = new Date();
			var year = nowDate.getFullYear();
			var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
			var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
			var timer = year + "-" + month + "-" + day
			console.log(timer, "dateStrdateStrdateStr")
			return {
				//登录测试
				showT: false,
				logion: false,
				hasUserInfo: false,
				userInfo: null,
				//
				mystylelist: ['primary', 'success', 'danger', 'warning'],
				show: true,
				// 仪表盘
				gaugeWidth: 10,
				chartData: {
					categories: [{
							"value": 0.2,
							"color": "#1890ff"
						},
						{
							"value": 0.8,
							"color": "#2fc25b"
						},
						{
							"value": 1,
							"color": "#f04864"
						}
					],
					"series": []
				},
				current: {
					userId: 8,
					currentWeight: 155,
					currentHeight: 46,
					currentSugar: 16.2,
					currentEnergy: 311.6,
					currentFat: 16.2
				},
				target: {
					userId: 6,
					targetWeight: 0,
					targetHeight: 0,
					targetSugar: 50,
					targetEnergy: 2000,
					targetFat: 55
				},

				gradientColor: [{
					'0%': '#ffd01e',
					'100%': '#ee0a24',
				}, {
					'0%': '#0081ff',
					'100%': '#1cbbb4',
				}, {
					'0%': '#e03997',
					'100%': '#6739b6',
				}],
				container: null,
				tip: "点击「添加小程序」，下次访问更便捷",
				duration: 1,
				dishshow: true,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},

				bannerList: [{
						imageUrl: 'https://tse1-mm.cn.bing.net/th/id/R-C.5e11fda5b177f51290733a0a5e56599b?rik=gijEoQ%2faNE%2fdzA&riu=http%3a%2f%2fimg.99.com.cn%2fuploads%2f202012%2f449_111438_1.jpg&ehk=7vZcg2qvqq7OS2NbEXdlP5HA%2f6%2bLaHh5840UAARMLLI%3d&risl=&pid=ImgRaw&r=0',
					},
					{
						imageUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.jpmOoKasCkpfRddDBjGaGQHaDP?w=310&h=153&c=7&r=0&o=5&pid=1.7',
					},
					{
						imageUrl: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.SHuggeGyxVoCr06u5ZpwAwHaDf?w=298&h=165&c=7&r=0&o=5&pid=1.7',
					},
					{
						imageUrl: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.RKZRJBeeJtnyUYG7V4e1FAHaDe?w=299&h=164&c=7&r=0&o=5&pid=1.7',
					}
				],
				categories: [{
					cuIcon: 'appreciatefill',
					color: 'red',
					badge: '推荐',
					mid: '1',
					name: '餐谱推荐'
				}, {
					cuIcon: 'selection',
					color: 'orange',
					badge: 1,
					mid: '2',
					name: '体质测试'
				}, {
					cuIcon: 'videofill',
					color: 'yellow',
					badge: 12,
					mid: '3',
					name: '分享视频'
				}, {
					cuIcon: 'group',
					color: 'cyan',
					badge: 22,
					mid: '4',
					name: '分享动态'
				}],
				curriculum: [],
				projectList: [],
				lunchList:[],
				breakfastList:[],
				dinnerList:[],
				popArray: [],
				timer,
				user_id
			}
		},
		mounted() {
			this.getData();
			this.$nextTick(function() {
				console.log(uni.createSelectorQuery().in(this))
				const query = uni.createSelectorQuery().in(this)
				query.select('#container').boundingClientRect(data => {
					console.log(data)
					this.container = data
				}).exec();
			})
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(420);
			if (uni.getStorageSync('itemlogin') == '') {
				this.logion = true
			} else {
				this.logion = false
			}
		},
		onShow() {
			console.log("shauxinlem")
		},
		methods: {
			getUserInfo() {
				this.logion = false
				wx.getUserProfile({
					desc: '用于完善会员资料',
					success: (resinfo) => {
						console.log(resinfo, "resinfo");
						wx.login({
							success: (res) => {
								console.log(resinfo, "code");
								if (res.code) {
									console.log(res.code, "getProfile");
									this.setCode(res.code, resinfo);
								} else {
									console.log(res.errMsg);
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
					url: 'http://47.102.203.108:3306/user/wx/login',
					method: "POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded',
					},
					data: {
						code: code, //临时登录凭证
						rawData: resinfo.rawData, //用户非敏感信息
						signature: resinfo.signature, //签名
						encrypteData: resinfo.encryptedData, //用户敏感信息
						iv: resinfo.iv //解密算法的向量
					},
					success: (loginRes) => {
						console.log(loginRes, "loginRes");
						if (loginRes.data.status == 200) {
							uni.setStorageSync('itemlogin', loginRes.data.data);
							this.getUserid(loginRes.data.data)
							console.log(loginRes.data.data)
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
					url: 'http://47.102.203.108:3306/user/findUserId',
					method: 'GET',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					data: {
						skey: id
					},
					success: (res) => {
						console.log(res, "getUserid")
						uni.setStorageSync('userId', res.data)
					}
				})
			},

			//测试登录
			getData() {
				var user_id = uni.getStorageSync('userId')
				console.log(user_id, "userId")
				let user = {
					user_id
				}

				// 获取目标身体状态
				let optstar = {
					url: 'user/getUserTarget',
					method: 'get',
				};
				uni.showLoading({
					title: '加载中'
				})
				request.httpRequest(optstar, user).then(res => {
					console.log(res);
					uni.hideLoading();
					if (res.statusCode == 200) {
						this.target = res.data;
						console.log(this.target)
					} else {}
				});

				// 获取当前身体状态
				let optscur = {
					url: 'user/getUserCurrent',
					method: 'get',
				};
				request.httpRequest(optscur, user).then(res => {
					console.log(res);
					uni.hideLoading();
					if (res.statusCode == 200) {
						this.current = res.data;
						console.log(this.current)
						let ans = {
							name: "完成率",
							data: this.current.currentFat / this.target.targetFat
						}

						this.chartData.series.push(ans)
					} else {}
				});

				// 获取推荐食谱
				let optsbreak = {
					url: 'recommend/recommendByUserbreakfast',
					method: 'get',
				};
				let optslunch = {
					url: 'recommend/recommendByUserlunch',
					method: 'get',
				};
				let optsdinner = {
					url: 'recommend/recommendByUserdinner',
					method: 'get',
				};
				request.httpRequest(optsbreak, user).then(res => {
					uni.hideLoading();
					this.show = true
					if (res.statusCode == 200) {
						this.curriculum = this.curriculum.concat(res.data)
						this.show = false
					} else {}
				});
				request.httpRequest(optslunch, user).then(res => {
					uni.hideLoading();
					this.show = true
					if (res.statusCode == 200) {
						this.curriculum = this.curriculum.concat(res.data)
						this.show = false
					} else {}
				});
				request.httpRequest(optsdinner, user).then(res => {
					uni.hideLoading();
					this.show = true
					if (res.statusCode == 200) {
						this.curriculum = this.curriculum.concat(res.data)
						this.show = false
					} else {}
				});
				this.getMenuData()
			},
			getMenuData(){
				//获取今日食谱
				let optsBreakfastMenu = {
					url: 'user/dayMeunBreakfast',
					method: 'get',
				};
				let optsLunchMenu = {
					url: 'user/dayMeunLunch',
					method: 'get',
				};
				let optsDinnerMenu = {
					url: 'user/dayMeunDinner',
					method: 'get',
				};
				let datamenu = {
					user_id:this.user_id,
					createTime: this.timer
				}
				request.httpRequest(optsBreakfastMenu, datamenu).then(res => {
					uni.hideLoading();
					this.show = true
					if (res.statusCode == 200) {
						this.breakfastList = res.data
						this.help(this.breakfastList)
						this.dishshow = false
					} else {}
				});
				request.httpRequest(optsLunchMenu, datamenu).then(res => {
					uni.hideLoading();
					this.show = true
					if (res.statusCode == 200) {
						this.lunchList = res.data
						this.help(this.lunchList)
						this.dishshow = false
					} else {}
				});
				request.httpRequest(optsDinnerMenu, datamenu).then(res => {
					uni.hideLoading();
					this.show = true
					if (res.statusCode == 200) {
						this.dinnerList = res.data
						this.help(this.dinnerList)
						this.dishshow = false
					} else {}
				});
			},
			help(item) {
				item.forEach((self, index) => {
					if (self.ingredients != null) {
						let ingredients = self.ingredients.slice(1, -1).split(',')
						let list = []
						ingredients.forEach((self, index) => {
							let change = self.trim().replace(/\'/g, "");
							list.push(change)
						})
						self.ingredients = list
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
							let change = self.trim().replace(/\'/g, "");
							list.push(change)
						})
						self.practice = list
					}
				})
			},
			bind(item) {
				this.showT = true
				this.popArray = item
				this.help(this.popArray)
				console.log(this.popArray, "popArray")
			},
			deleteMenuBreakfast(item) {
				var that = this
				console.log(item.menu, this.user_id, this.timer)
				uni.request({
					url: 'http://47.102.203.108:3306/user/deleteTodayMeunbreakfast',
					method: 'POST',
					header: {
						'content-type': 'application/json'
					},
					data: {
						user_id: this.user_id,
						menu: item.menu,
						createTime: this.timer,
					},
					success: (res) => {
						console.log(200,"delete menu")
						this.getMenuData()
					}
				})
			},
			deleteMenuLunch(item) {
				var that = this
				console.log(item.menu, this.user_id, this.timer)
				uni.request({
					url: 'http://47.102.203.108:3306/user/deleteTodayMeunlunch',
					method: 'POST',
					header: {
						'content-type': 'application/json'
					},
					data: {
						user_id: this.user_id,
						menu: item.menu,
						createTime: this.timer,
					},
					success: (res) => {
						console.log(200,"delete lunch")
						this.getMenuData()
					}
				})
			},
			deleteMenuDinner(item) {
				var that = this
				console.log(item.menu, this.user_id, this.timer)
				uni.request({
					url: 'http://47.102.203.108:3306/user/deleteTodayMeundinner',
					method: 'POST',
					header: {
						'content-type': 'application/json'
					},
					data: {
						user_id: this.user_id,
						menu: item.menu,
						createTime: this.timer,
					},
					success: (res) => {
						console.log(200,"delete dinner")
						this.getMenuData()
					}
				})
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goCategorieslist: function(e) {
				// console.log(e.currentTarget.dataset.mid)
				if (e.currentTarget.dataset.mid == 3) {
					uni.navigateTo({
						url: '../upload/upload'
					})
				}
				if (e.currentTarget.dataset.mid == 4) {
					uni.navigateTo({
						url: '../upload/uploadvideo'
					})
				}
				if (e.currentTarget.dataset.mid == 2) {
					uni.navigateTo({
						url: '../me/mentalTest/index?mid=1'
					})
				}
			},
			goBreakfast() {
				uni.navigateTo({
					url: '../menu/breakfast'
				})
			},
			goLunch() {
				uni.navigateTo({
					url: '../menu/lunch'
				})
			},
			goDinner() {
				uni.navigateTo({
					url: '../menu/dinner'
				})
			},
			goProject(id) {
				uni.navigateTo({
					url: '../project/project?proId=' + id
				})
			},
			goVideo() {
				uni.navigateTo({
					url: '../video'
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	@font-face {
		font-family: 'iconfont';
		src: url('@/static/iconfont.ttf?t=1647423422630') format('truetype');
	}

	.detailsTop {
		padding: 30rpx;
		overflow: scroll;
		line-height: 20px;
		max-height: 140px;
		color: #304156;
		letter-spacing: 2rpx;
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

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.swiper-box {
		flex: 1;
	}

	.swiper-item {
		height: 100%;
	}

	/*scroll-view外层*/
	.skill-sequence-panel-content-wrapper {
		position: relative;
		white-space: nowrap;
		padding: 10rpx 0 10rpx 10rpx;
	}

	/*左右渐变遮罩*/
	.hide-content-box {
		position: absolute;
		top: 0;
		height: 100%;
		width: 10px;
		z-index: 2;
	}

	.hide-content-box-left {
		left: 0;
		background-image: linear-gradient(to left, rgba(255, 255, 255, 0), #f3f3f3 60%);
	}

	.hide-content-box-right {
		right: 0;
		background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #f3f3f3 60%);
	}

	.kite-classify-scroll {
		width: 100%;
		height: 380rpx;
		overflow: hidden;
		white-space: nowrap;
	}

	.kite-classify-cell {
		display: inline-block;
		width: 266rpx;
		height: 370rpx;
		margin-right: 20rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		overflow: hidden;
		box-shadow: 2px 2px 3px rgba(26, 26, 26, 0.2);
	}

	.nav-li {
		padding: 40rpx 30rpx;
		width: 100%;
		background-image: url(https://s1.ax1x.com/2020/06/27/NyU04x.png);
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}

	.nav-name {
		font-size: 28upx;
		text-transform: Capitalize;
		margin-top: 20upx;
		position: relative;
	}

	.nav-name::before {
		content: "";
		position: absolute;
		display: block;
		width: 40rpx;
		height: 6rpx;
		background: #fff;
		bottom: 0;
		right: 0;
		opacity: 0.5;
	}

	.nav-name::after {
		content: "";
		position: absolute;
		display: block;
		width: 100rpx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40rpx;
		opacity: 0.3;
	}

	.nav-content {
		width: 100%;
		padding: 15rpx;
		display: inline-block;
		overflow-wrap: break-word;
		white-space: normal;
	}

	.nav-btn {
		width: 200rpx;
		height: 60rpx;
		margin: 8rpx auto;
		text-align: center;
		line-height: 60rpx;
		border-radius: 10rpx;
	}

	.bg-index1 {
		background-color: #19CF8A;
		color: #fff;
	}

	.bg-index2 {
		background-color: #954FF6;
		color: #fff;
	}

	.bg-index3 {
		background-color: #5177EE;
		color: #fff;
	}

	.bg-index4 {
		background-color: #F49A02;
		color: #fff;
	}

	.bg-index5 {
		background-color: #FF4F94;
		color: #fff;
	}

	.bg-index6 {
		background-color: #7FD02B;
		color: #fff;
	}

	.item-name {
		margin-bottom: 15rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

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

	.custom-class {
		border: 0px;
		border-radius: 10%;
	}

	.van-grid-item__content:after {
		border-width: 0 0px 0px 0 !important;
		z-index: 1;
		border-top-width: 0px;
		border-right-width: 0px !important;
		border-bottom-width: 0px !important;
		border-left-width: 0px;
	}

	.loader {
		position: absolute;
		top: 50%;
		left: 40%;
		margin-left: 10%;
		transform: translate3d(-50%, -50%, 0);
	}

	.dot {
		width: 24px;
		height: 24px;
		background: #3ac;
		border-radius: 100%;
		display: inline-block;
		animation: slide 1s infinite;
	}

	.dot:nth-child(1) {
		animation-delay: 0.1s;
		background: #32aacc;
	}

	.dot:nth-child(2) {
		animation-delay: 0.2s;
		background: #64aacc;
	}

	.dot:nth-child(3) {
		animation-delay: 0.3s;
		background: #96aacc;
	}

	.dot:nth-child(4) {
		animation-delay: 0.4s;
		background: #c8aacc;
	}

	.dot:nth-child(5) {
		animation-delay: 0.5s;
		background: #faaacc;
	}

	@-moz-keyframes slide {
		0% {
			transform: scale(1);
		}

		50% {
			opacity: 0.3;
			transform: scale(2);
		}

		100% {
			transform: scale(1);
		}
	}

	@-webkit-keyframes slide {
		0% {
			transform: scale(1);
		}

		50% {
			opacity: 0.3;
			transform: scale(2);
		}

		100% {
			transform: scale(1);
		}
	}

	@-o-keyframes slide {
		0% {
			transform: scale(1);
		}

		50% {
			opacity: 0.3;
			transform: scale(2);
		}

		100% {
			transform: scale(1);
		}
	}

	@keyframes slide {
		0% {
			transform: scale(1);
		}

		50% {
			opacity: 0.3;
			transform: scale(2);
		}

		100% {
			transform: scale(1);
		}
	}

	.chartsMain {
		width: 200px;
		height: 200px;
		// padding-top: 15rpx;
		background: #fff;
		// margin-bottom: 24rpx;
		border-top: 2rpx solid #f2f2f2;

		.charts {
			width: 100%;
			height: 100%;
			box-sizing: border-box;
		}
	}

	/* 请根据需求修改图表容器尺寸，如果父容器没有高度图表则会显示异常 */
	.charts-box {
		width: 100%;
		height: 200px;
	}

	.sdsfsdfd {
		height: 50rpx;
		font-size: 36rpx;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #333333;
		line-height: 50rpx;
		width: 100%;
		text-align: center;
		margin-top: 40rpx;
	}

	.anniudddfd {
		width: 250rpx;
		height: 80rpx;
		background: #1777FF;
		box-shadow: 0rpx 4rpx 10rpx -4rpx #1777FF;
		border-radius: 40rpx;
		font-size: 28rpx;
		text-align: center;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		margin-top: 126rpx;
		line-height: 80rpx;
		margin-left: 140rpx;
	}
</style>
