<!-- 关于本程序 -->
<template>
	<view class="about"  v-if="checkdata">

		<canvas canvas-id="bubble" :style="'width:' + width + 'px;height:' + height + 'px'" class="like-fx"></canvas>
		<like-fx ref="likeFx" :width="width" :height="height"></like-fx>
		<view class="titleZ text-center align-center">
			<text class="text-bold">视频分享</text>
			<view class="contentZ">
				<view class="text-xl" style="margin-top: 20px;">将你的</view>
				<view class="text-xl" style="margin-top: 20px;">厨房生活、美味佳肴</view>
				<view class="text-xl" style="margin-top: 20px;">分享给大家吧！！！</view>
			</view>
		</view>
		<div class="parent">
			<div class="child">
				<view class="padding text-blue text-xl text-bold">
					<image class="trans_fade_image" src="/page_upload/static/pages/upload/kitchen.png" mode=""></image>
				</view>

			</div>
		s</div>
		<!-- <button class='' style="background-color: rgba(0,0,0,-1); border: 0px;" > -->
		<van-uploader accept="video" preview-size="200px" :file-list="fileList" max-count="1" @after-read="afterRead">
			<image src='/page_upload/static/pages/upload/plus.png' class='share-img png round shadow-lg bg-white'>
			</image>
		</van-uploader>
		<van-button size="large" color="linear-gradient(to right, #4bb0ff, #6149f6)" @click="upload" v-show="show">
			发布
		</van-button>
		<!-- </button> -->
	</view>
</template>

<script>
	import LikeFx from '@/components/likeFx/likeFx.vue'
	import request from '@/common/request.js';
	export default {
		components: {
			LikeFx
		},
		data() {
			return {
				data: [],
				file: {},
				fileList: [],
				animation_timer: null, // 动画定时器
				width: 375,
				height: 1920,
				show:false,
				user_id:','
			}
		},
		mounted() {
			this.check()
		},
		onLoad() {
			this._startLikeAnimation();
		},
		onShareAppMessage() {
			return {
				title: '快来和我们一起管理自己的身体健康吧',
				path: '/pages/about/about?from=share'
			}
		},
		methods: {
			check(){
				let opt = {
					url: 'forum/false',
					method: 'get',
				};
				request.httpRequest(opt).then(res => {
					if (res.statusCode == 200) {
						this.checkdata = res.data
					} else {}
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
				});
				this.show = true
			},
			upload() {
				var that = this;
				let user_id = uni.getStorageSync('userId')
				uni.showLoading({
					title: '加载中'
				})
				uni.uploadFile({
					url: 'https://xuyq.xyz:3306/forum/add_forum',
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
			_startLikeAnimation() {
				this.animation_timer = setInterval(() => {
					this.$refs.likeFx.likeClick()
				}, 300)
			}
		}
	}
</script>

<style scoped>
	.parent {
		margin-top: 55px;
		height: 15rem;
		width: 100%;
		/* background-color: gray; */
		/* display: flex; */
		/* 		justify-content: center; */
		/* 		align-items: center; */
	}

	.child {
		width: 400px;
		margin: 0 auto;
		text-align: center;
		position: relative;
	}

	.titleZ {
		width: 750rpx;
		font-size: 52rpx;
		margin-top: 60rpx;
	}

	.contentZ {
		width: 350rpx;
		margin: 10rpx auto 0;

		text-align: left;
	}

	.about-bg {
		background-size: cover;
		width: 100vw;
		height: 100vh;
		justify-content: center;
		flex-direction: column;
		color: #fff;
	}

	.edit-fixed {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0.1);
	}

	.detail-imgs image {
		width: 100%;
		float: left;
		/* height:400rpx; 不定高了*/
		border: 0;
		padding: 0;
		margin: 0
	}

	.share-img {
		position: fixed;
		padding: 10rpx;
		width: 100rpx;
		height: 100rpx;
		/* top: 680rpx; */
		bottom: 200rpx;
		right: 20rpx;
		z-index: 1024;
		opacity: 0.8;
		box-shadow: 0rpx 8rpx 30rpx 0rpx rgba(0, 0, 0, 0.3);
		border: none;
	}

	.about {
		margin: 0;
		width: 100%;
		height: 100vh;
		padding-top: 20%;
		color: #fff;
		background: linear-gradient(-120deg, #F15BB5, #9A5CE5, #01BEFF, #00F5D4);
		/* background: linear-gradient(-120deg, #0976ea, #c471f5, #f956b6, #ea7e0a); */
		background-size: 500% 500%;
		animation: gradientBG 15s ease infinite;
	}

	@keyframes gradientBG {
		0% {
			background-position: 0% 50%;
		}

		50% {
			background-position: 100% 50%;
		}

		100% {
			background-position: 0% 50%;
		}
	}

	@-webkit-keyframes fadeInOut {
		0% {
			opacity: 0.5;
		}

		50% {
			opacity: 1;
		}

		100% {
			opacity: 0.5;
		}
	}

	.trans_fade_image {
		animation: fadeInOut 15s ease infinite;
		/*让动画停留在最后一帧 */

	}

	.container {
		width: 100%;
		position: absolute;
		text-align: center;
	}

	.like-fx {
		position: fixed;
		right: 0;
		z-index: 1024;
		pointer-events: none;
		/* background-color: red; */
	}
</style>
