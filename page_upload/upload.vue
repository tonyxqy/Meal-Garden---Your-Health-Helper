<template>
	<view class="wrap" v-if="checkdata">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">分享</block>
		</cu-custom>

		<view class="headava">
			<view v-if="avatarUrl">
				<image :src="avatarUrl"></image>
			</view>
			<view class="nameava">
				<view v-if="nickName"><text>{{nickName}}</text></view>
			</view>
		</view>
		<view>
			<div class="parent">
				<view class="inputbox">
					<textarea style="font-size: 1.2rem;padding: 0.6rem;width: 100%;height: 100%;" v-model:value="words"
						placeholder="分享新鲜事……" />
				</view>
				<div class="child">
					<van-uploader class="photobox" :file-list="fileList" max-count="1" @after-read="afterRead" />
				</div>
			</div>
			<view class="line"></view>
			<view class="label">
				#添加标签
			</view>
			<view>
				<view class="labelbox">
					<view class="labelboxinside bounceIn animated" hover-class="animated jello">
						<!-- <image style="width: 2rem;height: 2rem;" src="static/pages/upload/label.png" /> -->
						<picker @change="bindPickerChange1" :value="index1" :range="array1" range-key="name">
							<view class="">
								{{ array1[index1].name }}								
							</view>
						</picker>
					</view>
					<view class="labelboxinside bounceIn animated" hover-class="animated jello">
						<!-- <image style="width: 2rem;height: 2rem;" src="static/pages/upload/label.png" /> -->
						<picker @change="bindPickerChange2" :value="index2" :range="array2" range-key="name">
							<view class="">
							{{ array2[index2].name }}
							</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="line"></view>
			<view class="keepcenter bounceIn animated" hover-class="animated jello">
				<view @click="upload">
					发布
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import Toast from '@/wxcomponents/vant/toast/toast';
	import request from '@/common/request.js';
	export default {
		data() {
			var nickName = uni.getStorageSync('nickName')
			var avatarUrl = uni.getStorageSync('avatarUrl')
			return {
				nickName,
				avatarUrl,
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
				checkdata: false,
			}
		},
		mounted() {
			this.check()
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
			check() {
				let optBreakfastMenu = {
					url: 'forum/false',
					method: 'get',
				};
				request.httpRequest(optBreakfastMenu).then(res => {
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
				let nickName = uni.getStorageSync('nickName')
				uni.uploadFile({
					url: 'https://xuyq.xyz:3306/forum/add_forum',
					filePath: this.file.url,
					name: 'file',
					formData: {
						user_id: user_id,
						words: this.words,
						sign1: this.sign1,
						sign2: this.sign2,
						nickname: nickName
					},
					success(res) {
						console.log(res)
						uni.hideLoading();
						uni.navigateBack({
							url: '/pages/index/index'
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

<style lang="scss" scoped>
	.labelbox{
		// padding: 0px 36px 16px 36px;
		margin-bottom: 16px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-items:center;
		align-items: center;
		.labelboxinside{
			picker{
				float: left;
				width: 137px;
				height: 36px;
				background: #BBF1F3;
				border-radius: 10px 10px 10px 10px;
				view{
					font-size: 16px;
					line-height: 36px;
					font-family: Source Han Sans CN-Regular, Source Han Sans CN;
					font-weight: 400;
					color: #1ED0D5;
					text-align: center;
				}
			}
		}
	}
	.line {
		width: 343px;
		margin: 0 auto;
		height: 1px;
		background: #DBDBDB;
		border-radius: 0px 0px 0px 0px;
		opacity: 1;
		margin-bottom: 16px;
	}

	.label {
		width: 206px;
		height: 21px;
		font-size: 16px;
		font-family: Source Han Sans CN-Regular, Source Han Sans CN;
		font-weight: 400;
		color: #A2A2A2;
		line-height: 15px;
		margin-bottom: 13px;
		margin-left: 20px;
	}

	.headava {
		padding: 17px 0 21px 20px;

		image {
			float: left;
			margin-right: 16px;
			width: 50px;
			height: 50px;
			opacity: 1;
			border-radius: 20px 20px 20px 20px;
		}

		.nameava {
			float: left;
			width: 200px;
			height: 50px;
			font-size: 16px;
			font-family: Source Han Sans CN-Regular, Source Han Sans CN;
			font-weight: 400;
			color: #000000;
			line-height: 50px;
		}
	}

	.parent {
		width: 100%;
		display: grid;
		padding: 20px;
		grid-template-columns: 60% 40%;
	}

	.inputbox {
		height: 10rem;
		font-size: 16px;
		font-family: Source Han Sans CN-Regular, Source Han Sans CN;
		font-weight: 400;
		color: #A2A2A2;
	}

	.photobox {
		width: 375px;
		height: 420px;
		background: #FFFFFF;
		border-radius: 10px 10px 10px 10px;
	}

	.child {
		text-align: center;
	}

	.keepcenter {
		margin-top: 50px;
		width: 343px;
		height: 51px;
		background: #0BCCD2;
		border-radius: 23px 23px 23px 23px;
		opacity: 1;
		margin: 0 auto;
		line-height: 51px;
		text-align: center;
		font-size: 22px;
		font-family: Proxima Nova-Semibold, Proxima Nova;
		font-weight: 600;
		color: #FFFFFF;
	}
</style>
