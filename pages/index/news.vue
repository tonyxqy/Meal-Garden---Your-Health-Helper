<template>
	<view class="wrap">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">{{pageName}}</block>
		</cu-custom>

		<view class="u-tabs-box">
			<u-tabs-swiper activeColor="#0081ff" ref="tabs" :list="tablist" :current="current" @change="change"
				:is-scroll="false" swiperWidth="750"></u-tabs-swiper>
		</view>
		<u-notice-bar mode="horizontal" type="primary" :list="listBar"></u-notice-bar>

		<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<!-- 第一页 -->
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 92%;width: 100%;" @scrolltolower="reachBottom">
					<u-waterfall v-model="flowList" ref="uWaterfall">
						<template v-slot:left="{leftList}">
							<view class="demo-warter" v-for="(item, index) in leftList" :key="index"
								@click="seeImg(item.image)">
								<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
								</u-lazy-load>
								<view class="demo-title">
									{{item.title}}
								</view>
								<view class="demo-tag">
									<view class="demo-tag-owner">
										{{item.yhdj}}
									</view>
									<view class="demo-tag-text">
										{{item.type}}
									</view>
								</view>
								<view class="demo-shop">
									{{item.shop}}
								</view>
								<u-icon name="close-circle-fill" color="#ff55ff" size="34" class="u-close"
									@click="remove(item.id)">
								</u-icon>
							</view>
						</template>
						<template v-slot:right="{rightList}">
							<view class="demo-warter" v-for="(item, index) in rightList" :key="index"
								@click="seeImg(item.image)">
								<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index">
								</u-lazy-load>
								<view class="demo-title">
									{{item.title}}
								</view>
								<view class="demo-tag">
									<view class="demo-tag-owner">
										{{item.yhdj}}
									</view>
									<view class="demo-tag-text">
										{{item.type}}
									</view>
								</view>
								<view class="demo-shop">
									{{item.shop}}
								</view>
								<u-icon name="close-circle-fill" color="#ff55ff" size="34" class="u-close"
									@click="remove(item.id)">
								</u-icon>
							</view>
						</template>
					</u-waterfall>
				</scroll-view>
			</swiper-item>
			<!-- 第二页 -->
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
					<mp-video-swiper class="video-swiper" :video-list="videoList"  bindplay="onPlay" bindpause="onPause"
						bindtimeupdate="onTimeUpdate" bindended="onEnded" binderror="onError" bindwaiting="onWaiting"
						bindprogress="onProgress" bindloadedmetadata="onLoadedMetaData">
					</mp-video-swiper>
				</scroll-view>
			</swiper-item>
		</swiper>
		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
	</view>

</template>

<script>
	import imgData from "@/common/uiImg.js";
	import mpVideoSwiper from "@/wxcomponents/video-swiper"
	export default {
		comments:{
			mpVideoSwiper
		},
		data() {
			return {
				pageName: '动态',
				listBar: [
					'赶快发布自己的动态吧,来这里标记我们的生活！'
				],
				loadStatus: 'loadmore',
				flowList: [],
				list: null,
				tablist: [{
						name: '推荐'
					},
					{
						name: '视频'
					}
				],
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0,
				urls: [
					'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4',
					'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218093206z8V1JuPlpe.mp4',
					'https://stream7.iqilu.com/10339/article/202002/18/2fca1c77730e54c7b500573c2437003f.mp4',
					'https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218025702PSiVKDB5ap.mp4',
					'https://stream7.iqilu.com/10339/upload_transcode/202002/18/202002181038474liyNnnSzz.mp4',
					'https://stream7.iqilu.com/10339/article/202002/18/02319a81c80afed90d9a2b9dc47f85b9.mp4',
					'http://stream4.iqilu.com/ksd/video/2020/02/17/c5e02420426d58521a8783e754e9f4e6.mp4',
					'http://stream4.iqilu.com/ksd/video/2020/02/17/87d03387a05a0e8aa87370fb4c903133.mp4'
				]
			}
		},
		computed: {
			videoList() {
				return this.urls.map((url, index) => ({
					id: index + 1,
					url
				}))
			}
		},
		mounted() {
			this.list = imgData[0].appImg;
			console.log(this.list)
			this.pageName = '动态';
			this.addRandomData();
			console.log(this.videoList)
		},
		reachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addRandomData();
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		methods: {
			
			    onPlay(e) {},
			  
			    onPause(e) {
			      //  console.log('pause', e.detail.activeId)
			    },
			  
			    onEnded(e) {},
			  
			    onError(e) {},
			  
			    onWaiting(e) {},
			  
			    onTimeUpdate(e) {},
			  
			    onProgress(e) {},
			  
			    onLoadedMetaData(e) {
			      console.log('LoadedMetaData', e)
			    },
			// tab栏切换
			change(index) {
				this.swiperCurrent = index;
				// this.getOrderList(index);
			},
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			addRandomData() {
				for (let i = 0; i < 8; i++) {
					let index = this.$u.random(0, this.list.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]))
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
			},
			remove(id) {
				this.$refs.uWaterfall.remove(id);
			},
			seeImg(imgUrl) {
				// console.log(imgUrl)
				// 预览图片
				uni.previewImage({
					urls: [imgUrl],
					longPressActions: {
						itemList: ['发送给朋友', '保存图片', '收藏'],
						success: function(data) {
							// console.log('okokok');
						},
						fail: function(err) {
							// console.log('err');
						}
					}
				});
			}
		}
	}
</script>

<style>
	/* page不能写带scope的style标签中，否则无效 */
	page {
		background-color: rgb(240, 240, 240);
	}
</style>
<style lang="scss" scoped>
	/* #ifndef H5 */
	page {
		height: 100%;
		background-color: #f2f2f2;
	}

	/* #endif */
</style>
<style lang="scss" scoped>
	mp-video-swiper {
		width: 100%;
	}

	.order {
		width: 710rpx;
		background-color: #ffffff;
		margin: 20rpx auto;
		border-radius: 20rpx;
		box-sizing: border-box;
		padding: 20rpx;
		font-size: 28rpx;

		.top {
			display: flex;
			justify-content: space-between;

			.left {
				display: flex;
				align-items: center;

				.store {
					margin: 0 10rpx;
					font-size: 34rpx;
					font-weight: bold;
				}
			}

			.right {
				color: $u-type-warning-dark;

				.progressBox {
					width: 150rpx;
					float: right;
				}
			}
		}

		.item {
			display: flex;
			margin: 20rpx 0 0;

			.left {
				margin-right: 20rpx;

				image {
					width: 260rpx;
					height: 190rpx;
					border-radius: 10rpx;
				}
			}

			.content {
				.title {
					font-size: 28rpx;
					line-height: 45rpx;
				}

				.type {
					margin: 6rpx 0;
					font-size: 24rpx;
					color: $u-tips-color;
					text-overflow: -o-ellipsis-lastline;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					line-clamp: 3;
					-webkit-box-orient: vertical;
				}

				.delivery-time {
					color: #0081ff;
					font-size: 24rpx;
				}
			}

			.right {
				margin-left: 10rpx;
				padding-top: 20rpx;
				text-align: right;

				.decimal {
					font-size: 24rpx;
					margin-top: 4rpx;
				}

				.number {
					color: $u-tips-color;
					font-size: 24rpx;
				}
			}
		}

		.total {
			margin-top: 20rpx;
			text-align: right;
			font-size: 24rpx;

			.total-price {
				font-size: 32rpx;
			}
		}

		.bottom {
			line-height: 70rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.btnBox {
				width: 150rpx;
				display: flex;
				justify-content: space-between;

				.btn {
					line-height: 52rpx;
					width: 140rpx;
					border-radius: 12rpx;
					border: 2rpx solid $u-tips-color;
					font-size: 26rpx;
					text-align: center;
					color: $u-tips-color;
				}

				.evaluate {
					color: $u-type-primary;
					border-color: $u-type-primary;
				}
			}
		}
	}

	.centre {
		text-align: center;
		margin: 200rpx auto;
		font-size: 32rpx;

		image {
			width: 300rpx;
			border-radius: 50%;
			margin: 0 auto;
		}

		.tips {
			font-size: 24rpx;
			color: #999999;
			margin-top: 20rpx;
		}

		.btn {
			margin: 80rpx auto;
			width: 200rpx;
			border-radius: 32rpx;
			line-height: 64rpx;
			color: #ffffff;
			font-size: 26rpx;
			background: linear-gradient(270deg, #1cbbb4 0%, #0081ff 100%);
		}
	}

	.wrap {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;
	}

	.swiper-box {
		flex: 1;
	}

	.swiper-item {
		height: 92%;
	}

	.demo-warter {
		border-radius: 8px;
		margin: 10px 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $u-type-primary;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}
</style>
