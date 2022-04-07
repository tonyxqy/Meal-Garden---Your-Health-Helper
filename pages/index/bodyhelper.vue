<template>
	<view class="" style="z-index: 5;">
		<van-dialog id="van-dialog" />
		<view class="bodyhelper" @click="bodyhelpermethod">
			<view class="charts-box1">
				<qiun-data-charts type="arcbar" :chartData="bodyhelper" background="none" />
			</view>
		</view>
	</view>

</template>

<script>
	import Dialog from '@/wxcomponents/vant/dialog/dialog';
	import uCharts from "@/components/u-charts/u-charts.js";
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				bodyhelper: {
					"series": [
					]
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
			}
		},
		mounted(){
			this.getData()
		},
		methods: {
			bodyhelpermethod() {
				console.log('123')
				Dialog.alert({
					context: this,
					title: '说明',
					message: `由外层到内层本别为,
					 今日卡路里，脂肪，糖分`,
					theme: 'round-button',
				}).then(() => {
					// on close
				});
			},
			getData() {
				let user = {
					user_id: '8'
				}
				console.log('数据加载')

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
						let ans1 = {
							color : "#0081ff",
							data: this.current.currentEnergy / this.target.targetEnergy
						};
						let ans2={
							color : "#F49A02",
							data: this.current.currentSugar / this.target.targetSugar
						};
						let ans3 = {
							color : "#954ff6",
							data: this.current.currentFat / this.target.targetFat
						};
						this.bodyhelper.series.push(ans1)
						this.bodyhelper.series.push(ans2)
						this.bodyhelper.series.push(ans3)
						console.log('#######',this.bodyhelper)
					} else {}
				});
			}
		},
	}
</script>

<style>
	.charts-box1 {
		width: 100%;
		height: 100px;
		z-index: 100;
	}

	.bodyhelper {
		position: fixed;
		top: 80%;
		left: 0;
		height: 60px;
		width: 60px;
		z-index: 1;
	}
</style>
