<template>
	<view class="wrap" style="    background-color: #fff;" v-if="checkdata">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">{{pageName}}</block>
		</cu-custom>

		<view class="u-tabs-box uphead">
			<u-tabs-swiper activeColor="#0BCCD2" ref="tabs" :list="tablist" :current="current" @change="change"
				:is-scroll="false" swiperWidth="750"></u-tabs-swiper>
		</view>
		<!-- <u-notice-bar mode="horizontal" type="primary" :list="listBar"></u-notice-bar> -->

		<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<!-- 第一页 -->
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 92%;width: 100%;" @scrolltolower="reachBottom">
					<u-waterfall v-model="flowList" ref="uWaterfall">
						<template v-slot:left="{leftList}">
							<view class="demo-warter" v-for="(item, index) in leftList" :key="index"
								@click="seeImg(item.photourl)">
								<u-lazy-load threshold="-450" border-radius="10" :image="item.photourl" :index="index">
								</u-lazy-load>
								<view class="demo-title">
									{{item.words}}
								</view>
								<view class="demo-tag">
									<view class="demo-tag-owner">
										{{item.sign1}}
									</view>
									<view class="demo-tag-text">
										{{item.sign2}}
									</view>
								</view>
								<view class="demo-shop">
									{{item.nickname}}
								</view>
<!-- 								<u-icon name="close-circle-fill" color="#ff55ff" size="34" class="u-close"
									@click="remove(item.id)">
								</u-icon> -->
							</view>
						</template>
						<template v-slot:right="{rightList}">
							<view class="demo-warter" v-for="(item, index) in rightList" :key="index"
								@click="seeImg(item.photourl)">
								<u-lazy-load threshold="-450" border-radius="10" :image="item.photourl" :index="index">
								</u-lazy-load>
								<view class="demo-title">
									{{item.words}}
								</view>
								<view class="demo-tag">
									<view class="demo-tag-owner">
										{{item.sign1}}
									</view>
									<view class="demo-tag-text">
										{{item.sign2}}
									</view>
								</view>
								<view class="demo-shop">
									{{item.nickname}}
								</view>
<!-- 								<u-icon name="close-circle-fill" color="#ff55ff" size="34" class="u-close"
									@click="remove(item.id)">
								</u-icon> -->
							</view>
						</template>
					</u-waterfall>
				</scroll-view>
			</swiper-item>
			<!-- 第二页 -->
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
					<mp-video-swiper class="video-swiper" :video-list="videoList"  bindplay="onPlay" bindpause="onPause"
					 bindended="onEnded" binderror="onError" bindwaiting="onWaiting"
						bindprogress="onProgress" bindloadedmetadata="onLoadedMetaData">
					</mp-video-swiper>
				</scroll-view>
			</swiper-item>
		</swiper>
		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
		<view class="share-img png round shadow-lg bg-white" hover-class="trs" @click="uploaddata()">	
			<image src='https://s1.ax1x.com/2022/06/25/jka4oQ.png'  style='    width: 100%;height: 100%;' >		</image>
		</view>
		<view class="" v-if="show">
			<navigator url="/page_upload/upload">
				<view class="pic">
					图片
				</view>
			</navigator>
			<navigator url="/page_upload/uploadvideo">
				<view class="vied">
					视频
				</view>
			</navigator>
		</view>
	</view>

</template>

<script>
	import request from '@/common/request.js';
	import imgData from "@/common/uiImg.js";
	import mpVideoSwiper from "@/wxcomponents/video-swiper"
	export default {
		comments:{
			mpVideoSwiper
		},
		data() {
			return {
				show:0,
				pageName: '动态',
				listBar: [
					'赶快发布自己的动态吧,来这里标记我们的生活！'
				],
				loadStatus: 'loadmore',
				flowList: [],
				checkdata:true,
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
			this.check()
			let optstar = {
				url: 'forum/forums',
				method: 'get',
			};
			uni.showLoading({
				title: '加载中'
			})
			request.httpRequest(optstar).then(res => {
				console.log(res);
				uni.hideLoading();
				if (res.statusCode == 200) {
					this.list =res.data
					this.pageName = '动态';
					this.addRandomData();
				} else {}
			});

		},

		methods: {
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
			uploaddata() {
				this.show = !this.show
			},
			reachBottom() {
				this.loadStatus = 'loading';
				// 模拟数据加载
				setTimeout(() => {
					this.addRandomData();
					this.loadStatus = 'loadmore';
				}, 1000)
			},
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
				console.log(this.swiperCurrent)
				if(this.swiperCurrent==1){
					let optvideo = {
						url: 'forum/videos',
						method: 'get',
					};
					uni.showLoading({
						title: '加载中'
					})
					request.httpRequest(optvideo).then(res => {
						console.log(res);
						uni.hideLoading();
						if (res.statusCode == 200) {
							console.log(res.data)
							res.data.forEach(item=>{
								this.urls.push(item.photourl)
							})
						} else {}
					});
				}
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
				if(this.swiperCurrent==1){
					let optvideo = {
						url: 'forum/videos',
						method: 'get',
					};
					uni.showLoading({
						title: '加载中'
					})
					request.httpRequest(optvideo).then(res => {
						console.log(res);
						uni.hideLoading();
						if (res.statusCode == 200) {
							console.log(res.data)
							res.data.forEach(item=>{
								this.urls.push(item.photourl)
							})
						} else {}
					});
				}
			},
			addRandomData() {
				console.log(this.list.length)
				for (let i = 0; i < 8; i++) {
					let index = this.$u.random(0, this.list.length-1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]))
					item.id = this.$u.guid();
					this.flowList.push(item);
					console.log('****',this.flowList)
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
	.trs{
		transform:rotate(45deg)
	}
	.uphead{
		box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.16);
	}
	.pic{
		    position: fixed;
		    bottom: 410rpx;
		    right: 0;
		    width: 109px;
		    height: 37px;
			background-image: linear-gradient(45deg, #9DE4E8, #1BBFC8);
			color: #ffffff;
			text-align: center;
		    box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.16);
		    border-radius: 17px 17px 17px 17px;
		    opacity: 0.76;
			font-size: 18px;
			font-family: Source Han Sans CN-Regular, Source Han Sans CN;
			font-weight: 600;
			line-height: 37px;
	}
	.vied{
		    position: fixed;
		    bottom: 320rpx;
		    right: 0;
		    width: 109px;
		    height: 37px;
		    background-image: linear-gradient(45deg, #9DE4E8, #1BBFC8);
		    color: #ffffff;
		    text-align: center;
		    box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.16);
		    border-radius: 17px 17px 17px 17px;
		    opacity: 0.76;
			font-size: 18px;
			font-family: Source Han Sans CN-Regular, Source Han Sans CN;
			font-weight: 600;
			line-height: 37px;
	}
	.share-img {
		transition: transform 0.4s;
		position: fixed;
		padding: 20rpx;
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
		border: 1px solid #DFDFDF;
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
		background: #0BCCD2;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 11rpx 14rpx;
		border-radius: 50rpx;
		font-size: 22rpx;
		line-height: 1;
	}

	.demo-tag-text {
		background: #0BCCD2;
		color: #FFFFFF;
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
