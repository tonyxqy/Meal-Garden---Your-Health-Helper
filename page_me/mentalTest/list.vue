<template>
	<view class="container">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">答题测试</block>
		</cu-custom>
		
		<view class="bannerBox">
			<image mode="widthFix" src="https://img.zcool.cn/community/013fa05cb7ee7ba8012141687abdbf.jpg@1280w_1l_2o_100sh.jpg"></image>
		</view>
		
		<view>
			<view class="cu-bar bg-white margin-top-xs">
				<view class="action sub-title">
					<text class="text-xl text-bold text-blue text-shadow">身体测试</text>
					<text class="text-ABC text-blue">body</text>
				</view>
			</view>
			
			<view v-for="(item, index) in dataL.data1" class="cu-list menu sm-border margin-bottom ">
				<view class="cu-item">
					<view class="content padding-tb-sm">
						<view class="text-xl">
							<text class="cuIcon-text text-blue margin-right-xs"></text>
							{{item.name}}
						</view>
						<view class="text-gray text-df margin-top-xs">
							<text class="cuIcon-hotfill margin-right-xs"></text>
							已有{{item.num}}位小伙伴已答题
						</view>
					</view>
					<view class="action">
						<button v-if="item.isAnswer != 2" @click="goIndex(item.id)" class="cu-btn round bg-gradual-green shadow">前往答题</button>
						<button v-if="item.isAnswer == 2" @click="goIndex(item.id)" class="cu-btn round bg-gradual-orange shadow">已经答题</button>
					</view>
				</view>
			</view>
			
			<view class="cu-bar bg-white margin-top-xs">
				<view class="action sub-title">
					<text class="text-xl text-bold text-blue text-shadow">其他测试</text>
					<text class="text-ABC text-blue">psychology</text>
				</view>
			</view>
			<view v-for="(item, index) in dataL.data2" class="cu-list menu sm-border margin-bottom ">
				<view class="cu-item">
					<view class="content padding-tb-sm">
						<view class="text-xl">
							<text class="cuIcon-text text-blue margin-right-xs"></text>
							{{item.name}}
						</view>
						<view class="text-gray text-df margin-top-xs">
							<text class="cuIcon-hotfill margin-right-xs"></text>
							已有{{item.num}}位小伙伴已答题
						</view>
					</view>
					<view class="action">
						<button v-if="item.isAnswer != 2" @click="goIndex(item.id)" class="cu-btn round bg-gradual-green shadow">前往答题</button>
						<button v-if="item.isAnswer == 2" @click="goIndex(item.id)" class="cu-btn round bg-gradual-orange shadow">已经答题</button>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataL: {
					data1: [{
							id: '1',
							name: '中医身体素质评测～',
							num:'31',
							isAnswer: 1
					}],
				},
			};
		},
		onLoad() {
			console.log(this.dataL)
		},
		watch: {
			
		},
		methods: {
			goIndex(mid){
				uni.navigateTo({
					url: 'index?mid=' + mid
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.container {
		background-color: #f2f2f2;
		width: 100%;
		height: 100%;

		.bannerBox {
			width: 100%;

			image {
				width: 100%;
			}
		}
	}
</style>
