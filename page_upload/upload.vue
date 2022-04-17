<template>
	<view class="wrap" v-if="checkdata">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">分享</block>
		</cu-custom>
					<div class="parent">
						<view class="inputbox">
							<textarea style="font-size: 1.2rem;padding: 0.6rem;width: 100%;height: 100%;"
								v-model:value="words" placeholder="分享新鲜事……" />
						</view>
						<view class="cu-bar bg-white margin-top-xs">
							<view class="action sub-title">
								<text class="text-xl text-bold text-blue text-shadow">分享你美味的食物吧</text>
								<text class="text-ABC text-blue">uploadImage</text>
							</view>
						</view>
						<div class="child">
							<view class="padding text-blue text-xl text-bold">

							</view>
							<van-uploader class="photobox" :file-list="fileList" max-count="1"
								@after-read="afterRead" />
						</div>
						<!-- <van-picker :columns="columns" bind:change="onChange" />
				 -->
						<view class="cu-bar bg-white margin-top-xs">
							<view class="action sub-title">
								<text class="text-xl text-bold text-blue text-shadow">为你的分享打上标签让更多的人看到</text>
								<text class="text-ABC text-blue">label</text>
							</view>
						</view>
						<view>
							<van-grid column-num="2" border="false" direction="horizontal">
								<van-grid-item use-slot>
									<image style="width: 2rem;height: 2rem;" src="static/pages/upload/label.png" />
									<picker @change="bindPickerChange1" :value="index1" :range="array1"
										range-key="name">
										<view style="padding: 20rpx;background-color: white;">{{ array1[index1].name }}
										</view>
									</picker>
								</van-grid-item>
								<van-grid-item use-slot>
									<image style="width: 2rem;height: 2rem;" src="static/pages/upload/label.png" />
									<picker @change="bindPickerChange2" :value="index2" :range="array2"
										range-key="name">
										<view style="padding: 20rpx;background-color: white;">{{ array2[index2].name }}
										</view>
									</picker>
								</van-grid-item>
							</van-grid>
						</view>
						<view class="keepcenter">
							<van-button size="large" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="upload">
							  发布
							</van-button>
						</view>
					</div>
	</view>
</template>

<script>
	import Toast from '@/wxcomponents/vant/toast/toast';
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				data: [],
				file: {},
				fileList: [],
				words: '',
				sign1: '',
				sign2: '',
				array1: [{
					name: '疾病养护'
				}, {
					name: '适宜人群'
				}, {
					name: '特殊工作'
				}, {
					name: '特殊功效'
				}, {
					name: '餐饮行业'
				}],
				array2: [{
					name: '常见菜式'
				}, {
					name: '京菜'
				}, {
					name: '沪菜'
				}, {
					name: '鲁菜'
				}, {
					name: '清真菜'
				}, {
					name: '美味糕点'
				}, {
					name: '西式料理'
				}],
				index1: 0,
				index2: 0,
				user_id: '',
				checkdata:false,
			}
		},
		mounted() {
			check()
		},
		methods: {
			bindPickerChange1: function(e) {
				this.index1 = e.detail.value;
				this.sign1 = this.array1[this.index1].name;
			},
			bindPickerChange2: function(e) {
				this.index2 = e.detail.value;
				this.sign2 = this.array2[this.index2].name;
			},
			onChange(event) {
				const {
					picker,
					value,
					index
				} = event.detail;
				Toast(`当前值：${value}, 当前索引：${index}`);
			},
			check(){
				let opt = {
					url: 'forum/false',
					method: 'get',
				};
				request.httpRequest(optsBreakfastMenu).then(res => {
					if (res.statusCode == 200) {
						this.checkdata = res.data
					} else {}
				});
			},
			upload() {
				uni.showLoading({
					title: '加载中'
				})
				var that = this;
				let user_id = uni.getStorageSync('userId')
				uni.uploadFile({
					url: 'https://47.102.203.108:3306/forum/add_forum',
					filePath: this.file.url,
					name: 'file',
					formData: {
						user_id: user_id,
						words: this.words,
						sign1: this.sign1,
						sign2: this.sign2,
						nickname: "hhh"
					},
					success(res) {
						console.log(res)
						uni.hideLoading();
						uni.navigateBack({
							url:'/pages/index/index'
						})
					},
				});
			},
			afterRead(event) {
				var that = this;
				const {
					file
				} = event.detail;
				console.log(file)
				this.file = file
				console.log(this.file)
				that.fileList.push({
					...file,
					// 	url: res.data
				});
			}
		}
	};
</script>

<style>
	.parent {
		height: 15rem;
		width: 100%;
		/* background-color: gray; */
		/* display: flex; */
		/* 		justify-content: center; */
		/* 		align-items: center; */
	}

	.inputbox {
		height: 15rem;
	}

	.photobox {
		background-color: rgb(240, 240, 240);
	}

	.child {
		width: 400px;
		margin: 0 auto;
		text-align: center;
	}
	.keepcenter {
		width: 30%;
		margin: 0 auto;
	}


</style>
