<!-- 首页 -->
<template>
	<view class="bodycolor">
		<cu-custom bgColor="bg-gradual-green" :isBack="false">
			<!-- <block slot="backText">返回</block> -->
			<block slot="content">首页</block>
		</cu-custom>
		<add-tip :tip="tip" :duration="duration" />
		<view id="container">
			<!-- banner图 -->
			<view class="uni-padding-wrap">
				<view class="page-section myswiper">
					<view class="page-section-spacing">
						<swiper class="myswiper" circular="true" indicator-dots="true" autoplay="true" interval="3500"
							duration="600">
							<swiper-item class="swiper-list" v-for="(item, index) in bannerList" :key="index">
								<view class="swiper-item uni-bg-red">
									<image class="myswiper-img" :src="item.imageUrl" mode=""></image>
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
			<!-- 导航栏 -->
			<view class="cu-list grid col-4 no-border">
				<view class="cu-item" v-for="(item,index) in categories" :key="index"
					:style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" @click="goCategorieslist"
					:data-mid="item.mid">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]" class="tagbar"
						:style="[{background:item.bgc}]">
						<view class="cu-tag badge" v-if="item.count!=0">
							<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
						</view>
					</view>
					<text>{{item.name}}</text>
				</view>
			</view>
			<!-- <van-sticky offset-top="80 "> -->
			<view class="cu-bar bg-white margin-top-xs">
				<view class="action sub-title">
					<text class="text-xl text-bold text-dark text-shadow">今日能量</text>
					<text class="text-ABC text-light">energy</text>
				</view>
			</view>
			<view class="mydata">
				<image class="" src="https://s1.328888.xyz/2022/05/19/DVao1.png" mode=""></image>
				<text class="gridtext1">{{current.currentEnergy.toFixed(2)}}</text>
				<image class="" src="https://s1.328888.xyz/2022/05/19/DVKqC.png" mode="">
					<text class="gridtext1">{{current.currentFat.toFixed(2)}}</text>
					<image class="" src="https://s1.328888.xyz/2022/05/19/DVOwg.png" mode=""></image>
					<text class="gridtext1">{{current.currentSugar.toFixed(2)}}</text>
				</image>
			</view>
			<view class="bodycontainer">
				<view class="bodydata">
					<bodyhelper style="z-index: 5;"></bodyhelper>
				</view>
			</view>





			<!-- 
			<van-grid column-num="3" border="false">
				<van-grid-item use-slot text="糖分" style="text-align: center;">
					<view style="height: 160px">
						<van-circle style="display: block;margin: 5px 0; z-index: -1;" v-show="hide"
							:value="Math.floor(current.currentSugar/target.targetSugar*100)" size="60"
							:text="Math.floor(current.currentSugar)" :color="gradientColor[0]" />
						<text class="gridtext">糖分</text>
					</view>
				</van-grid-item>
				<van-grid-item use-slot text="热量">
					<view style="height: 180px;z-index: 0;margin-top: -20px;">
						<view class="charts-box">
							<qiun-data-charts type="gauge" :chartData="chartData" :loadingType="4" v-show="hide"
								:errorShow="false" background="none" />
						</view>
					</view>
				</van-grid-item>
				<van-grid-item use-slot text="脂肪" style="text-align: center;">
					<view style="height: 160px">
						<van-circle style="display: block;margin: 5px 0;z-index: -1;"
							:value="current.currentFat/target.targetFat*100" size="60"
							:text="Math.floor(current.currentFat)" v-show="hide" :color="gradientColor[2]" />
						<text class="gridtext">脂肪</text>
					</view>
				</van-grid-item>
			</van-grid> -->
			<!-- </van-sticky> -->

			<view class="cu-bar bg-white margin-top-xs">
				<view class="action sub-title">
					<text class="text-xl text-bold text-dark text-shadow">每日推荐</text>
					<text class="text-ABC text-light">recommendation</text>
					<!-- 					<button>早餐</button>
					<button>中餐</button>
					<button>晚餐</button> -->
				</view>

			</view>

			<view class="skill-sequence-panel-content-wrapper">
				<!--左边虚化-->
				<view class="hide-content-box hide-content-box-left"></view>
				<!--右边虚化-->
				<view class="hide-content-box hide-content-box-right"></view>
				<scroll-view scroll-x="true" class="kite-classify-scroll">
					<div class="loader" v-if="loadshow">
						<div class="dot"></div>
						<div class="dot"></div>
						<div class="dot"></div>
						<div class="dot"></div>
						<div class="dot"></div>
					</div>
					<view @click="bindIt(item)" class="kite-classify-cell shadow" v-for="(item, index) in curriculum"
						:key="index">
						<image style="width: 136px; height: 120px;border-radius: 10px; margin: 10px;"
							:src="item.pictureUrl" />
						<view class="nav-name">{{item.energy}}cal</view>
						<view class="itemmenu">{{item.menu}}</view>
						<view class="itemingredients">
							<text v-for="(item, index) in item.classifiction" v-if="index<3">
								{{item}},
							</text>
						</view>
						<button type="default" class="buttonchoose" style="background-color: #0BCCD2;">
							<text>
								选择
							</text>
						</button>
					</view>
				</scroll-view>
			</view>
			
		</view>
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-dark text-shadow">我的今日早餐</text>
				<text class="text-ABC text-light">BreakFast</text>
			</view>
			<view class="action" @click="goBreakfast">
				<text class="text-lg text-grey text-shadow">添加早餐</text>
			</view>
			<!-- 				<view class="action" @click="goLunch">
				<text class="text-lg text-grey text-shadow">中餐</text>
			</view>
			<view class="action" @click="goDinner">
				<text class="text-lg text-grey text-shadow">晚餐</text>
			</view> -->
		</view>
		<scroll-view scroll-x="true" class="body-classify-scroll">
			<view @click="bindY(item)" class="body-classify-cell shadow bodyshadow"
				v-for="(item, index) in breakfastList" :key="index">
				<image style="width: 301px; height: 193px; opacity: 0.8;" :src="item.pictureUrl" mode="aspectFill" />
				<view class="bodyname">早餐</view>
				<view class="bodymenu">{{item.menu}}</view>
				<button type="default" style="background-color: #0BCCD2;">
					<text>
						营养成分
					</text>
				</button>
			</view>
			<view class="body-classify-cell shadow bodyshadow">
				<image style="width: 301px; height: 193px; opacity: 0.8;" src="https://s1.328888.xyz/2022/05/19/D6BOy.png" mode="aspectFill" />
			</view>
		</scroll-view>
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-dark text-shadow">我的今日午餐</text>
				<text class="text-ABC text-light">Lunch</text>
			</view>
<!-- 			<view class="action" @click="goBreakfast">
				<text class="text-lg text-grey text-shadow">添加早餐</text>
			</view> -->
							<view class="action" @click="goLunch">
				<text class="text-lg text-grey text-shadow">添加午餐</text>
			</view>
<!-- 			<view class="action" @click="goDinner">
				<text class="text-lg text-grey text-shadow">晚餐</text>
			</view> -->
		</view>
		<scroll-view scroll-x="true" class="body-classify-scroll">
			<view @click="bindY(item)" class="body-classify-cell shadow bodyshadow"
				v-for="(item, index) in lunchList" :key="index">
				<image style="width: 301px; height: 193px; opacity: 0.8;" :src="item.pictureUrl" mode="aspectFill" />
				<view class="bodyname">午餐</view>
				<view class="bodymenu">{{item.menu}}</view>
				<button type="default" style="background-color: #0BCCD2;">
					<text>
						营养成分
					</text>
				</button>
			</view>
			<view class="body-classify-cell shadow bodyshadow">
				<image style="width: 301px; height: 193px; opacity: 0.8;" src="https://s1.328888.xyz/2022/05/19/D6BOy.png" mode="aspectFill" />
			</view>
		</scroll-view>
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-dark text-shadow">我的今日晚餐</text>
				<text class="text-ABC text-light">Dinner</text>
			</view>
<!-- 			<view class="action" @click="goBreakfast">
				<text class="text-lg text-grey text-shadow">添加早餐</text>
			</view> -->
<!-- 							<view class="action" @click="goLunch">
				<text class="text-lg text-grey text-shadow">中餐</text>
			</view> -->
			<view class="action" @click="goDinner">
				<text class="text-lg text-grey text-shadow">添加晚餐</text>
			</view>
		</view>
		<scroll-view scroll-x="true" class="body-classify-scroll">
			<view @click="bindY(item)" class="body-classify-cell shadow bodyshadow"
				v-for="(item, index) in dinnerList" :key="index">
				<image style="width: 301px; height: 193px; opacity: 0.8;" :src="item.pictureUrl" mode="aspectFill" />
				<view class="bodyname">晚餐</view>
				<view class="bodymenu">{{item.menu}}</view>
				<button type="default" style="background-color: #0BCCD2;">
					<text>
						营养成分
					</text>
				</button>
			</view>
			<view class="body-classify-cell shadow bodyshadow">
				<image style="width: 301px; height: 193px; opacity: 0.8;" src="https://s1.328888.xyz/2022/05/19/D6BOy.png" mode="aspectFill" />
			</view>
		</scroll-view>
		<u-popup v-model="showY" mode="center" width="690rpx" height="810rpx" @close="popupClose" border-radius="20"
			style=" border: 10rpx;">
			<view style="width: 100%;height: 100%;background-color: #fefefe;display: flex;flex-direction:column;">
				<view class="canlass">
					<view class="aasd" style="padding-left: 20rpx;" @click="showY = false">关闭 </view>
					<view class="titileCenter">菜名： {{popArray.menu}} </view>
					<view class="aasd"
						style="color: white; background-color: red; text-align: center; border-radius: 20%;"
						@click="deleteMenuBreakfast(popArray)"> 删除菜品
					</view>
				</view>
				<view style="column-count: 2;">
					<image :src="popArray.pictureUrl" mode="aspectFill"
						style="padding-left:20rpx ;width:560rpx;height: 500rpx;text-align: left;"></image>
					<view>
						<view>
							<view style="padding-left: 20rpx;padding: 10rpx;display:inline-block;" slot="desc"
								v-for="(item,index) in popArray.classifiction">
								<van-tag color="#4a9bd9" style="padding: 10rpx; vertical-align: middle;" size="large"
									v-if="index<4">
									{{item}}
								</van-tag>
							</view>
						</view>

						<view class="detailsTop">
							<text class="text-lg text-black text-blue" style="padding-bottom: 20rpx;">所需食材：</text>
							<view slot="desc" v-for="(item, index) in popArray.ingredients">
								<text style="padding-right: 50rpx;display: flex;justify-content: space-around;"
									v-if="index<4">
									{{item}}
								</text>
							</view>
						</view>
					</view>
	
				</view>
				<view class="">
					<van-steps :steps="steps" :active="active" direction="vertical" active-color="#ee0a24" />
				</view>
				<!-- <van-button  type="danger" @click="deleteMenuBreakfast(popArray)">删除</van-button> -->
			</view>
		</u-popup>








		<!-- <view class="cu-card case no-card">
			<view @click="bind(item)" class="cu-item shadow" v-for="(item, index) in breakfastList" :key="index">
				<van-card currency=" " lazy-load="true" :thumb="item.pictureUrl">
					<view slot="desc" v-for="(item, index1) in item.classifiction" v-if="index1<3">
						<van-tag :type="mystylelist[3-index1]" style="float: left;margin: 2rpx;" v-if="index1<2">
							{{item}}
						</van-tag>
						<van-tag :type="mystylelist[3-index1]" style="display: block;margin: 2rpx;" v-if="index1==2">
							{{item}}
						</van-tag>
					</view>
					<view slot="title" class="" style="font-size:30rpx;padding-bottom: 10rpx;">{{item.menu}}</view>
					<view slot="price" style="padding-top: 10rpx;">{{item.taste}}</view>
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
				<van-card currency=" " lazy-load="true" :thumb="item.pictureUrl">
					<view slot="desc" v-for="(item, index1) in item.classifiction" v-if="index1<3">
						<van-tag :type="mystylelist[3-index1]" style="float: left;margin: 2rpx;" v-if="index1<2">
							{{item}}
						</van-tag>
						<van-tag :type="mystylelist[3-index1]" style="display: block;margin: 2rpx;" v-if="index1==2">
							{{item}}
						</van-tag>
					</view>
					<view slot="title" class="" style="font-size:30rpx;padding-bottom: 10rpx;">{{item.menu}}</view>
					<view slot="price" style="padding-top: 10rpx;">{{item.taste}}</view>
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
				<van-card currency=" " lazy-load="true" :thumb="item.pictureUrl">
					<view slot="desc" v-for="(item, index1) in item.classifiction" v-if="index1<3">
						<van-tag :type="mystylelist[3-index1]" style="float: left;margin: 2rpx;" v-if="index1<2">
							{{item}}
						</van-tag>
						<van-tag :type="mystylelist[3-index1]" style="display: block;margin: 2rpx;" v-if="index1==2">
							{{item}}
						</van-tag>
					</view>
					<view slot="title" class="" style="font-size:30rpx;padding-bottom: 10rpx;">{{item.menu}}</view>
					<view slot="price" style="padding-top: 10rpx;">{{item.taste}}</view>
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
 -->
		<u-popup v-model="showT" mode="center" width="690rpx" height="810rpx" @close="popupClose" border-radius="20"
			style=" border: 10rpx;">
			<view style="width: 100%;height: 100%;background-color: #fefefe;display: flex;flex-direction:column;">
				<view class="canlass">
					<view class="aasd" style="padding-left: 20rpx;" @click="showT = false"> 取消 </view>
					<view class="titileCenter">菜名： {{popArray.menu}} </view>
					<view class="aasd" style="padding-right: 20rpx;text-align: right;" @click="showT = false"> 确定
					</view>
				</view>
				<view style="column-count: 2;">
					<image :src="popArray.pictureUrl" mode="aspectFill"
						style="padding-left:20rpx ;width:560rpx;height: 500rpx;text-align: left;"></image>
					<view>
						<view>
							<view style="padding-left: 20rpx;padding: 10rpx;display:inline-block;" slot="desc"
								v-for="(item,index) in popArray.classifiction">
								<van-tag color="#4a9bd9" style="padding: 10rpx; vertical-align: middle;" size="large"
									v-if="index<4">
									{{item}}
								</van-tag>
							</view>
						</view>
						<view class="displayCol" style="padding-left:30rpx;color: #304156; ">
							<view style="display: flex;flex-direction:row; padding-top:5rpx ;padding-bottom: 20rpx;">
								<text class="text-lg text-black text-blue">分量</text>
								<van-stepper style="padding-left: 40rpx;" value="volume" step="0.5" :decimal-length="1"
									button-size="20px" bind:change="onChange" />
							</view>
							<view style="display:inline-block; text-align: left; padding-top: 10rpx;">
								<text class="text-lg text-black text-blue">{{popArray.process}} </text>
								<text style="color: #304156;padding-left:10rpx ;">{{popArray.time}}</text>
							</view>
						</view>
						<view class="detailsTop">
							<text class="text-lg text-black text-blue" style="padding-bottom: 20rpx;">所需食材：</text>
							<view slot="desc" v-for="(item, index) in popArray.ingredients">
								<text style="padding-right: 50rpx;display: flex;justify-content: space-around;"
									v-if="index<4">
									{{item}}
								</text>
							</view>
						</view>
					</view>
				</view>
				<view class="displayCol"
					style="padding: 10rpx;padding-left: 30rpx;line-height: 35px;letter-spacing: 2rpx;">
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
		<view style="height: 140rpx;width: 1rpx;"></view>
		<u-popup v-model="logion" mode="center" height="320rpx" :mask-close-able="false" width="530rpx"
			border-radius="10">
			<view class="sdsfsdfd"> 请登录 </view>
			<button class="anniudddfd" @click="getUserInfo"> 立即登录 </button>
		</u-popup>
	</view>
</template>

<script>
	import uCharts from "@/uni_modules/qiun-data-charts/js_sdk/u-charts/u-charts.js";
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
				steps: [{
						// text: '步骤一',
						desc: '描述信息',
						inactiveIcon: 'location-o',
						activeIcon: 'success',
					},
					{
						// text: '步骤二',
						desc: '描述信息',
						inactiveIcon: 'location-o',
						activeIcon: 'plus',
					},
					{
						// text: '步骤三',
						desc: '描述信息',
						inactiveIcon: 'location-o',
						activeIcon: 'cross',
					},
					{
						// text: '步骤四',
						desc: '描述信息',
						inactiveIcon: 'location-o',
						activeIcon: 'fail',
					},
				],
				hide: true,
				//登录测试
				showT: false,
				showY: false,
				hasUserInfo: false,
				userInfo: null,
				//
				mystylelist: ['primary', 'primary', 'primary', 'primary'],
				loadshow: true,
				//
				volume: 1,
				//
				radio: 1,
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
						imageUrl: 'https://s1.328888.xyz/2022/05/19/DbY8B.png',
					},
					{
						imageUrl: 'https://s1.328888.xyz/2022/05/19/DbTRT.png',
					},
					{
						imageUrl: 'https://s1.328888.xyz/2022/05/19/Dbc62.png',
					},
					{
						imageUrl: 'https://s1.328888.xyz/2022/05/19/DbwLM.png',
					}
				],
				categories: [{
					imageUrl: 'https://s1.328888.xyz/2022/05/19/DF2MT.png',
					cuIcon: 'appreciatefill',
					color: 'green',
					badge: '推荐',
					mid: '1',
					name: '舌诊检测',
					bgc: '#E1FFD9'
				}, {
					imageUrl: 'https://s1.328888.xyz/2022/05/19/DF2MT.png',
					cuIcon: 'we',
					color: 'red',
					badge: 1,
					mid: '2',
					name: '体质测试',
					bgc: '#FFDEDC'
				}, {
					imageUrl: 'https://s1.328888.xyz/2022/05/19/DF2MT.png',
					cuIcon: 'videofill',
					color: 'blue',
					badge: 12,
					mid: '3',
					name: '分享视频',
					bgc: '#DFF1FF'
				}, {
					imageUrl: 'https://s1.328888.xyz/2022/05/19/DF2MT.png',
					cuIcon: 'group',
					color: 'purple',
					badge: 22,
					mid: '4',
					name: '分享动态',
					bgc: '#FFD8ED'
				}],
				curriculum: [],
				projectList: [],
				lunchList: [],
				breakfastList: [],
				dinnerList: [],
				popArray: [],
				timer,
				user_id,
				showT: false
			}
		},
		activated() {
			console.log('((((((((((()))))))))))')
		},
		mounted() {
			uni.$on('hidebox', this.hidebox);
			if (uni.getStorageSync('userId'))
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
		methods: {
			hidebox() {
				this.hide = !this.hide;
			},
			//测试登录
			getData() {
				var user_id = uni.getStorageSync('userId')
				this.user_id = user_id
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
						console.log('aaaaaaaaaaa', ans.data)
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
					// this.show = true
					this.loadshow = false
					if (res.statusCode == 200) {
						var list = res.data
						this.help(list)
						this.curriculum = this.curriculum.concat(list)
						this.loadshow = false
					} else {}
				});
				request.httpRequest(optslunch, user).then(res => {
					uni.hideLoading();
					// this.show = true
					this.loadshow = false
					if (res.statusCode == 200) {
						var list = res.data
						this.help(list)
						this.curriculum = this.curriculum.concat(list)
						this.loadshow = false
					} else {}
				});
				request.httpRequest(optsdinner, user).then(res => {
					uni.hideLoading();
					// this.show = true
					this.loadshow = false
					if (res.statusCode == 200) {
						var list = res.data
						this.help(list)
						this.curriculum = this.curriculum.concat(list)
						this.loadshow = false
					} else {}
				});
				this.getMenuData()
			},
			getMenuData() {
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
					user_id: this.user_id,
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
					this.helpIt(self)
				})
			},
			bind(item) {
				this.popArray = item
				this.help(this.popArray)
				console.log(this.popArray, "popArray")
			},
			onChange(event) {
				this.radio = parseInt(event.detail)
				console.log(this.radio, "onchange早中晚餐的绑定")
			},
			submitMenu() {
				var that = this
				this.showT = false
				console.log(this.radio, this.popArray.menu, this.user_id, this.timer, this.volume)
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
					menu: this.popArray.menu,
					foodnumber: this.volume,
					createTime: this.timer,
				};
				request.httpRequest(opt, data).then(res => {
					uni.hideLoading();
					if (res.statusCode == 200) {
						console.log(200, "addsuccess")
						wx.showToast({
							title: '提交成功',
							icon: 'success',
							duration: 2000 //持续的时间
						})
						this.getMenuData()
					} else {}
				});
			},
			popupClose() {
				uni.$emit('hidebox')
			},
			bindIt(item) {
				uni.$emit('hidebox')
				this.showT = true
				this.popArray = item
				this.helpIt(this.popArray)
				console.log(this.popArray, "popArray")
			},
			bindY(item) {
				uni.$emit('hidebox')
				this.showY = true
				this.popArray = item
				this.helpIt(this.popArray)
				console.log(this.popArray, "popArray")
			},
			helpIt(self) {
				// if(self.practice != null){
				// 	let practice = self.practice
				// 	console.log(practice)
				// 	this.steps=[];
				// 	for(var i=0;i<practice.length;i++){
				// 		console.log(practice[i])
				// 		let change ={
				// 		  text: '步骤'+i,
				// 		  desc: practice[i],
				// 		  inactiveIcon: 'location-o',
				// 		  activeIcon: 'plus',
				// 		}
				// 		this.steps.push(change)
				// 	}
				// }
				if (self.ingredients != null) {
					let sep = /\,/
					let ingredients = self.ingredients.slice(1, -1).split(sep)
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
				    this.steps=[];
					practice.forEach((self, index) => {
						let change = self.trim().replace(/\'/g, "");
						list.push(change)
						console.log(change)
						let action = {
							text: '步骤' + index,
							desc: change,
							inactiveIcon: 'location-o',
							activeIcon: 'plus',
						}
						this.steps.push(action)
					})
					self.practice = list
				}
			},
			deleteMenuBreakfast(item) {
				var that = this
				console.log(item.menu, this.user_id, this.timer)
				uni.request({
					url: 'https://xuyq.xyz:3306/user/deleteTodayMeunbreakfast',
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
						console.log(200, "delete menu")
						showY = false
						this.getMenuData()
						wx.showToast({
							title: '删除成功',
							icon: 'success',
							duration: 2000 //持续的时间
						})
					}
				})
			},
			deleteMenuLunch(item) {
				var that = this
				console.log(item.menu, this.user_id, this.timer)
				uni.request({
					url: 'https://xuyq.xyz:3306/user/deleteTodayMeunlunch',
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
						console.log(200, "delete lunch")
						this.getMenuData()
						wx.showToast({
							title: '删除成功',
							icon: 'success',
							duration: 2000 //持续的时间
						})
					}
				})
			},
			deleteMenuDinner(item) {
				var that = this
				console.log(item.menu, this.user_id, this.timer)
				uni.request({
					url: 'https://xuyq.xyz:3306/user/deleteTodayMeundinner',
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
						console.log(200, "delete dinner")
						this.getMenuData()
						wx.showToast({
							title: '删除成功',
							icon: 'success',
							duration: 2000 //持续的时间
						})
					}
				})
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goCategorieslist: function(e) {
				// console.log(e.currentTarget.dataset.mid)
				if (e.currentTarget.dataset.mid == 4) {
					uni.navigateTo({
						url: '../../page_upload/upload'
					})
				}
				if (e.currentTarget.dataset.mid == 3) {
					uni.navigateTo({
						url: '../../page_upload/uploadvideo'
					})
				}
				if (e.currentTarget.dataset.mid == 2) {
					uni.navigateTo({
						url: '../../page_me/mentalTest/index?mid=1'
					})
				}
				if (e.currentTarget.dataset.mid == 1) {
					uni.navigateTo({
						url: '../../page_me/diagnose'
					})
				}
			},
			goBreakfast() {
				uni.navigateTo({
					url: '../../page_menu/breakfast'
				})
			},
			goLunch() {
				uni.navigateTo({
					url: '../../page_menu/lunch'
				})
			},
			goDinner() {
				uni.navigateTo({
					url: '../../page_menu/dinner'
				})
			},
			goVideo() {
				uni.navigateTo({
					// url: '../video'
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.bodycontainer {
		margin-top: 10px;
		display: flex;
		justify-content: center;
		align-items: center;

		.bodydata {
			width: 212px;
			height: 212px;
		}
	}

	.mydata {
		width: 330px;
		height: 30px;
		padding: 6px;
		border-radius: 8px 8px 8px 8px;
		background-color: #F2F2F2;
		margin: auto;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;

		text {
			line-height: 20px;
			font-weight: bold;
		}

		image {
			width: 45px;
			height: 18px;
		}
	}

	.text-dark {
		color: #1BBFC8;
	}

	.text-light {
		color: #9DE4E8;
	}

	.tagbar {
		border-radius: 50%;
		width: 50px !important;
		height: 50px;
		margin: auto;
		vertical-align: center;
		text-align: center;
		line-height: 50px;
	}

	.bodycolor {
		background-color: #fff;
	}

	.myswiper {
		width: 100%;
		height: 245px;
		padding: 5px 8px 0px 8px;
		position: relative;

		.myswiper-img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
			height: 95%;
			border-radius: 7.5px 7.5px 7.5px 7.5px;
		}
	}

	@font-face {
		font-family: 'iconfont';
		src: url('@/static/iconfont.ttf?t=1647423422630') format('truetype');
	}

	.displayCol {
		display: flex;
		flex-direction: column;
	}

	.detailsTop {
		padding: 30rpx;
		overflow: scroll;
		line-height: 20px;
		max-height: 130px;
		color: #304156;
		letter-spacing: 2rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.details {
		display: flex;
		flex-direction: column;
		width: 100%;
		text-align: left;
		padding: 20rpx;
		padding-left: 30rpx;
		overflow: scroll;
		line-height: 20px;
		max-height: 200px;
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
		height: 100rpx;
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

	.body-classify-scroll {
		width: 100%;
		height: 200px;
		overflow: hidden;
		white-space: nowrap;
	}

	.bodyshadow {
		width: 301px;
		height: 193px;
		position: relative;
		// filter: blur(1px);
		background-size: cover;
	}

	.bodyshadow:after {
		width: 301px;
		height: 193px;
		position: relative;
		filter: blur(15px);
		background-size: cover;
	}

	// .bodyshadow{
	//    width: 301px;
	//    height: 193px;
	//     position:relative;
	// }
	.body-classify-cell {
		display: inline-block;
		border: 1px solid #DFDFDF;
		width: 301px;
		height: 193px;
		// margin-right: 20px;
		margin-left: 20px;
		background-color: #FFFFFF;
		border-radius: 15px;
		overflow: hidden;
		position: relative;
		box-shadow: 2px 2px 3px rgba(26, 26, 26, 0.2);



		.bodyname {
			position: absolute;
			top: 23px;
			left: 14px;
			width: 300px;
			height: 46px;
			font-size: 34px;
			font-family: Source Han Sans CN-Bold, Source Han Sans CN;
			font-weight: bold;
			color: #0BCCD2;
			line-height: 15px;
			letter-spacing: 5px;
			z-index: 11;
		}

		.bodymenu {
			// background:#0BCCD2;
			// border-radius: 15px 15px 15px 15px;
			position: absolute;
			top: 63px;
			left: 25px;
			height: 31px;
			font-size: 16px;
			padding: 6px;
			z-index: 11;
			backdrop-filter: blur(2.5px);
			font-family: Source Han Sans CN-Regular, Source Han Sans CN;
			font-weight: 400;
			color: #000000;
			line-height: 15px;
			border-radius: 20%;

		}

		button {
			position: absolute;
			width: 95px;
			height: 30px;
			right: 8px;
			bottom: 10px;
			background: #0BCCD2;
			border-radius: 15px 15px 15px 15px;
			opacity: 1;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: space-between;
			color: #fff;

			z-index: 11;

			text {
				line-height: 30px;
				font-weight: bold;
				z-index: 11;
			}
		}
	}


	.kite-classify-scroll {
		width: 100%;
		height: 240px;
		overflow: hidden;
		white-space: nowrap;
	}

	.kite-classify-cell {
		display: inline-block;
		border: 1px solid #DFDFDF;
		width: 156px;
		height: 231px;
		// margin-right: 16px;
		margin-left: 16px;
		background-color: #FFFFFF;
		border-radius: 15px;
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
		line-height:
			15px;
		font-size: 12px;
		text-transform: Capitalize;
		// margin-top: 20upx;
		margin-left: 10px;
		position: relative;
		color: #0BCCD2;
		font-family: Proxima Nova-Semibold, Proxima Nova;
		font-weight: 600;
		width: 36px;
		height: 16px;
	}

	.itemmenu {
		margin-left: 10px;
		margin-top: 3px;
		width: 48px;
		height: 16px;
		font-size: 12px;
		font-family: Source Han Sans CN-Medium, Source Han Sans CN;
		font-weight: 500;
		color: #000000;
		line-height: 15px;
	}

	.itemingredients {
		margin-left: 10px;
		margin-top: 3px;
		width: 120px;
		height: 14px;
		font-size: 10px;
		font-family: Proxima Nova-Semibold, Proxima Nova;
		font-weight: 600;
		color: #0BCCD2;
		line-height: 15px;
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

	.buttonchoose {
		width: 85px;
		height: 28px;
		margin: auto;
		margin-top: 3px;
		background: #0BCCD2;
		border-radius: 15px 15px 15px 15px;
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 1;

		text {
			width: 22px;
			height: 28px;
			font-size: 11px;
			font-family: Proxima Nova-Semibold, Proxima Nova;
			font-weight: 600;
			color: #FFFFFF;
			line-height: 28px;
		}
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
