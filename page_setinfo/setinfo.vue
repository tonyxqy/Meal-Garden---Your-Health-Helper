<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">个人身体信息</block>
		</cu-custom>
		<view class="wrap">
			<block>
				<scroll-view :scroll-x="true" class="tab-h text-white" :scroll-left="scrollLeft">
					<view :class="'tab-item  ' + (currentTab == 0 ? 'active' : '')" data-current="0" @tap="swichNav">身高
					</view>
					<view :class="'tab-item  ' + (currentTab == 1 ? 'active' : '')" data-current="1" @tap="swichNav">体重
					</view>
					<view :class="'tab-item  ' + (currentTab == 2 ? 'active' : '')" data-current="2" @tap="swichNav">体脂率
					</view>
					<view :class="'tab-item  ' + (currentTab == 3 ? 'active' : '')" data-current="3" @tap="swichNav">血压
					</view>
					<view :class="'tab-item ' + (currentTab == 4 ? 'active' : '')" data-current="4" @tap="swichNav">血糖
					</view>
					<view :class="'tab-item ' + (currentTab == 5 ? 'active' : '')" data-current="5" @tap="swichNav">BMI
					</view>
					<view :class="'tab-item  ' + (currentTab == 6 ? 'active' : '')" data-current="6" @tap="swichNav">
						静息心率</view>
					<view :class="'tab-item  ' + (currentTab == 7 ? 'active' : '')" data-current="7" @tap="swichNav">留空
					</view>
				</scroll-view>
				<!-- 		<view class="container bg-pgrey" :style="'height:' + winHeight * 0.4 + 'rpx'">
			<ec-canvas id="mychart" ref="mychart" canvas-id="mychart-line" :ec="ec"></ec-canvas>
		</view> -->
				<!-- 		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">折线图</text>
				<text class="text-ABC text-blue">LineCharts</text>
			</view>
		</view> -->
				<view class="chartsMain">
					<canvas canvas-id="canvasArea" id="canvasArea" class="charts" @touchstart="touchArea"></canvas>
				</view>


				<swiper class="tab-content" :current="currentTab" duration="300" @change="switchTab"
					:style="'height:' + winHeight * 0.50 + 'rpx'">
					<swiper-item v-for="(item, index) in [0, 1, 2, 3, 4, 5, 6, 7]" :key="index">
						<scroll-view :scroll-y="true" class="scoll-h">
							<block v-for="(item, index1) in TabList[currentTab].timeList" :key="index1">
								<view class="item-ans">
									<view class="avatar"></view>
									<view class="expertInfo">
										<view class="name">{{ item.value }}{{ unit[currentTab] }}</view>
										<view class="tag">{{ item.time.substr(0,10) }}</view>
										<view class="answerHistory"></view>
									</view>
									<navigator url="/pages/askExpert/expertDetail" class="askBtn">目前没用</navigator>
								</view>
							</block>
						</scroll-view>
					</swiper-item>
				</swiper>
				<view id="login" class="login" :style="'display:' + (inputValue == true ? 'none' : 'block')">
					<form @submit="addval">
						<view class="login-input-content">
							<view class="login-input">
								<view>请输入当前{{ TabList[currentTab].name }}</view>
								<input type="number" placeholder="请输入" name="myvalue" class="list-input" />
								<text>{{ unit[currentTab] }}</text>
							</view>
						</view>
						<button class="login-button bg-gradual-green" form-type="submit">提交</button>
					</form>
				</view>
				<view id="bg" class="login-bg" :style="'display:' + (inputValue == true ? 'none' : 'block') + ';'">
				</view>
				<button class="bg-gradual-green" style="position: fixed; bottom: 0; width: 100%; z-index: -10"
					v-if="TabList[currentTab].name!='体脂率'" @tap="inputcover">记录{{ TabList[currentTab].name }}</button>
				<button class="bg-gradual-green" style="position: fixed; bottom: 0; width: 100%; z-index: -10"
					v-if="TabList[currentTab].name=='体脂率'">由系统根据身高体重计算欧</button>
			</block>
		</view>
	</view>
</template>

<script>
	// import uCharts from "@/uni_modules/qiun-data-charts/js_sdk/u-charts/u-charts.js";
	import uCharts from "@/page_setinfo/components/u-charts/u-charts.js";
	import request from '@/common/request.js';
	var _self;
	var canvaArea = null;

	var app = getApp();
	export default {
		components: {},
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				Area: {
					categories: [],
					series: [{
						name: '',
						data: [],
						color: ''
					}]
				},
				unit: ['cm', 'kg', '%', 'mmHG', 'mmol/L', '', 'bpm'],
				ec: {
					lazyLoad: true
				},
				inputValue: true,
				winHeight: '',
				//窗口高度
				currentTab: 0,
				//预设当前项的值
				scrollLeft: 0,
				//tab标题的滚动条位置
				TabList: []
				// [{
				// 		name: '身高',
				// 		timeList: [{
				// 				// value:'请添加你的第一条身高记录',
				// 				// time:'ヽ(✿ﾟ▽ﾟ)ノ',
				// 				value: 180,
				// 				time: '2021/9/21'
				// 			},
				// 			{
				// 				value: 190,
				// 				time: '2021/9/30'
				// 			},
				// 			{
				// 				value: 199,
				// 				time: '2021/10/7'
				// 			}
				// 		]
				// 	},
				// 	{
				// 		name: '体重',
				// 		timeList: [{
				// 			value: '请添加你的第一条体重记录',
				// 			time: 'ヽ(✿ﾟ▽ﾟ)ノ'
				// 		}]
				// 	},
				// 	{
				// 		name: '体脂率',
				// 		timeList: [{
				// 			value: '请添加你的第一条体脂率记录',
				// 			time: 'ヽ(✿ﾟ▽ﾟ)ノ'
				// 		}]
				// 	},
				// 	{
				// 		name: '血压',
				// 		timeList: [{
				// 			value: '请添加你的第一条血压记录',
				// 			time: 'ヽ(✿ﾟ▽ﾟ)ノ'
				// 		}]
				// 	},
				// 	{
				// 		name: '血糖',
				// 		timeList: [{
				// 			value: '请添加你的第一条血糖记录',
				// 			time: 'ヽ(✿ﾟ▽ﾟ)ノ'
				// 		}]
				// 	},
				// 	{
				// 		name: 'bmi',
				// 		timeList: [{
				// 			value: '还没有欸',
				// 			time: 'ヽ(✿ﾟ▽ﾟ)ノ'
				// 		}]
				// 	},
				// 	{
				// 		name: '静息心率',
				// 		timeList: [{
				// 			value: '请添加你的第一条静息心率',
				// 			time: 'ヽ(✿ﾟ▽ﾟ)ノ'
				// 		}]
				// 	}
				// ]
			}
		},
		mounted: function(options) {
			_self = this;
			uni.getSystemInfo({
				success(res) {
					var clientHeight = res.windowHeight;
					var clientWidth = res.windowWidth;
					var rpxR = 750 / clientWidth;
					var calc = clientHeight * rpxR - 180;
					console.log(calc);
					// this.currentTab=options.currentTab,
					_self.winHeight = calc
				}
			});
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(420);
			this.getServerData();
		},

		methods: {
			uploadData(name, value, time) {
				uni.showLoading({
					title: '加载中'
				})
				let now = time
				let nowStr = now.getFullYear() + "-"
				 + (now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1) + "-"
				 + (now.getDate() < 10 ? "0" + now.getDate() : now.getDate()) + " "
				let user_id = uni.getStorageSync('userId')
				let data = {
					name: name,
					value: value,
					time: nowStr,
					user_id: user_id
				}
				let optstar = {
					url: 'body/update',
					method: 'post',
				};
				request.httpRequest(optstar, data).then(res => {
					uni.hideLoading();
					if (res.statusCode == 200) {
						console.log(res.data)
					} else {}
				});
			},
			getServerData() {
				uni.showLoading({
					title: '加载中'
				})
				let user_id = uni.getStorageSync('userId')
				let user = {
					user_id
				}
				let optstar = {
					url: 'body/all',
					method: 'get',
				};
				request.httpRequest(optstar, user).then(res => {
					console.log(res);
					uni.hideLoading();
					if (res.statusCode == 200) {
						this.TabList = res.data
						console.log(this.TabList)
						this.setEchartval();
						_self.showArea("canvasArea", this.chartData);
					} else {}
				});
			},
			showArea(canvasId, chartData) {
				canvaArea = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'area',
					fontSize: 11,
					legend: true,
					dataLabel: false,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: _self.Area.categories,
					series: _self.Area.series,
					animation: true,
					xAxis: {
						type: 'grid',
						gridColor: '#CCCCCC',
						gridType: 'dash',
						dashLength: 8
					},
					yAxis: {
						gridType: 'dash',
						gridColor: '#CCCCCC',
						dashLength: 8,
						splitNumber: 5,
						min: 10,
						max: 180,
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						area: {
							type: 'straight',
							opacity: 0.2,
							addLine: true,
							width: 2
						}
					}
				});
			},
			touchArea(e) {
				canvaArea.showToolTip(e, {
					format: function(item, category) {
						return item.name + ' ' + category + ' ' + ':' + item.data
					}
				});
			},
			setEchartval: function() {
				let currval = this.currentTab;
				let TabList = this.TabList;
				var categories = [];
				var series = [];
				let names = this.TabList[currval].name
				let datas = []
				var myDate = new Date();
				var myDateMonth = myDate.toLocaleDateString();
				let i = 0;
				console.log(TabList[currval].timeList.length === 0)
				if (TabList[currval].timeList.length === 0) {
					let data = {
						value: '请添加你的第一条身高记录',
						time: 'ヽ(✿ﾟ▽ﾟ)ノ'
					}
					TabList[currval].timeList.push(data)
					console.log(TabList[currval].timeList)
				}
				if (TabList[currval].timeList[i].time != 'ヽ(✿ﾟ▽ﾟ)ノ')
					for (i; i < TabList[currval].timeList.length; i++) {
						console.log(TabList[currval].timeList[i].time);
						categories.push(TabList[currval].timeList[i].time.substr(0,10));
						datas.push(TabList[currval].timeList[i].value);
					}
				else {
					categories.push();
					datas.push(0);
					categories.push(myDateMonth);
				}

				series.push({
					name: names,
					data: datas,
					color: '#facc14'
				})

				this.Area.categories = categories
				this.Area.series = series
				console.log(this.Area);
			},

			addval: function(e) {
				var currval = this.currentTab;
				var temp = this.inputValue;
				let TabList = this.TabList;
				let value = e.detail.value;
				var myDate = new Date();
				var myDateMonth = myDate.toLocaleDateString();
				this.uploadData(this.TabList[currval].name, value.myvalue, myDate)
				if (TabList[currval].timeList[0].time == 'ヽ(✿ﾟ▽ﾟ)ノ') {
					TabList[currval].timeList[0].value = parseInt(value.myvalue);
					TabList[currval].timeList[0].time = myDateMonth;
				} else {
					TabList[currval].timeList.push({
						value: value.myvalue,
						time: myDateMonth
					});
				}
				this.inputValue = !temp,
					this.TabList = TabList
				app.globalData.echarts = this.TabList[currval].timeList;
				console.log(this.TabList[currval].timeList);
				this.getServerData();
				// this.setEchartval();
			},

			inputcover: function() {
				var temp = this.inputValue;
				this.inputValue = !temp
			},

			// 滚动切换标签样式
			switchTab: function(e) {
				this.currentTab = e.detail.current
				this.checkCor();
				// this.setEchartval();
				this.getServerData();
			},

			// 点击标题切换当前页时改变样式
			swichNav: function(e) {
				var cur = e.target.dataset.current;

				if (this.currentTab == cur) {
					return false;
				} else {
					this.currentTab = cur
				}

				this.setEchartval();
				this.getServerData();
			},

			//判断当前滚动超过一屏时，设置tab标题滚动条。
			checkCor: function() {
				if (this.currentTab > 4) {
					this.scrollLeft = 300
				} else {
					this.scrollLeft = 0
				}
			},
		}
	};
</script>
<style lang="scss" scoped>
	.tab-h {
		height: 80rpx;
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		line-height: 80rpx;
		background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
		font-size: 16px;
		white-space: nowrap;

	}

	.tab-item {
		padding: 0 36rpx;
		display: inline-block;
	}

	.tab-item.active {
		color: #fff;
		position: relative;
	}

	.tab-item.active:after {
		content: '';
		display: block;
		height: 8rpx;
		width: 100%;
		background: #4675f9;
		position: absolute;
		bottom: 0;
		left: 5rpx;
		border-radius: 16rpx;
	}

	.item-ans {
		width: 100%;
		display: flex;
		flex-grow: row no-wrap;
		justify-content: space-between;
		padding: 30rpx;
		box-sizing: border-box;
		height: 180rpx;
		align-items: center;
		border-bottom: 1px solid #584f6017;
	}

	.avatar {
		width: 100rpx;
		height: 100rpx;
		position: relative;
		padding-right: 30rpx;
	}

	.avatar .img {
		width: 100%;
		height: 100%;
	}

	.avatar .doyen {
		width: 40rpx;
		height: 40rpx;
		position: absolute;
		bottom: -2px;
		right: 20rpx;
	}

	.expertInfo {
		font-size: 12px;
		flex-grow: 2;
		color: #b0b0b0;
		line-height: 1.5em;
	}

	.expertInfo .name {
		font-size: 16px;
		color: #000;
		margin-bottom: 6px;
	}

	.askBtn {
		width: 120rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		font-size: 14px;
		border-radius: 60rpx;
		border: 1px solid #4675f9;
		color: #4675f9;
	}

	.tab-content {
		margin-top: 0rpx;
	}

	.scoll-h {
		height: 100%;
	}

	.bg-pgrey {
		background-color: #584f60;
	}

	ec-canvas {
		width: 100%;
		height: 100%;
	}

	.login-bg {
		display: none;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0px;
		left: 0px;
		background: rgba(0, 0, 0, 0.5);
	}

	.login-input-content {
		// margin-top: 2rem;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);    
	}

	.login-input {
		margin: auto;
		font-size: 1rem;
		text-align: center;
	}

	.login-input input {
		display: inline-block;
		margin: auto;
		margin-top: 0.8rem;
		margin-bottom: 0;
		width: 60%;
		border-bottom: 1px solid #b6b0bb;
	}

	.login-input text {
		margin-left: 0.5rem;
	}

	.login-button {
		position: absolute;
		width: 50%;
		line-height: 40px;
		font-size: 14px;
		border: #ebebeb 1px solid;
		text-align: center;
		border-radius: 26px 6px;
		left: 26%;
		bottom: 10%;
	}

	.login {
		display: none;
		width: 60%;
		height: 25%;
		position: fixed;
		border: #ebebeb solid 1px;
		left: 50%;
		top: 50%;
		background: #ffffff;
		box-shadow: 0px 0px 1rem #ddd;
		z-index: 9999;
		transform: translate(-50%, -50%);
		border-radius: 10%;
	}

	.chartsMain {
		width: 750rpx;
		height: 450rpx;
		padding-top: 15rpx;
		background: #fff;
		margin-bottom: 24rpx;
		border-top: 2rpx solid #f2f2f2;

		.charts {
			width: 750rpx;
			height: 450rpx;
			box-sizing: border-box;
		}
	}
</style>
