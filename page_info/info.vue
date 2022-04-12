<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">个人身体信息</block>
		</cu-custom>
		<view class="wrap">
			<view class="jq22-mine-box">
				<view class="jq22-flex jq22-flex-one">
					<view class="jq22-flex-box">
						<view class="jq22-mine-cell">
							<text>健康生活只能靠自己</text>
							<text>管住嘴巴迈开腿</text>
						</view>
					</view>
					<view class="jq22-flex-box">
						<view class="jq22-mine-cell jq22-mine-cell-one">
							<text>饮食作息调整好</text>
							<text>一切烦恼都跑掉</text>
						</view>
					</view>
				</view>
				<view class="viewHeight"></view>
				<view class="jq22-mine-list">
					<navigator url="/page_setinfo/setinfo" class="jq22-flex">
						<view class="jq22-cou-img">
							<image src="/page_info/static/pages/info/images/icon-item-000.png" alt=""></image>
						</view>
						<view class="jq22-flex-box">
							<text class="text-black">性别</text>
						</view>
						<view class="jq22-arrow">
							<text class="text-gray text-shadow">男</text>
						</view>
					</navigator>
					<navigator url="/page_job/job" class="jq22-flex">
						<view class="jq22-cou-img">
							<image src="/page_info/static/pages/info/images/icon-item-001.png" alt=""></image>
						</view>
						<view class="jq22-flex-box">
							<text class="text-black">职业</text>
						</view>
						<view class="jq22-arrow">
							<text class="text-blue text-shadow">获取推荐微量元素与食谱</text>
						</view>
					</navigator>
<!-- 					<navigator url="/pages/setinfo/setinfo" class="jq22-flex">
						<view class="jq22-cou-img">
							<image src="/static/pages/info/images/icon-item-002.png" alt=""></image>
						</view>
						<view class="jq22-flex-box">
							<text class="text-black">生日</text>
						</view>
						<view class="jq22-arrow">
							<text class="text-gray text-shadow">1996-08-03</text>
						</view>
					</navigator> -->
<!-- 					<navigator url="/pages/setinfo/setinfo" class="jq22-flex b-line">
						<view class="jq22-cou-img">
							<image src="/static/pages/info/images/icon-item-008.png" alt=""></image>
						</view>
						<view class="jq22-flex-box">
							<text class="text-black">运动强度</text>
						</view>
						<view class="jq22-arrow">
							<text class="text-gray text-shadow">中</text>
						</view>
					</navigator> -->
					<view class="viewHeight"></view>
					<navigator url="/page_setinfo/setinfo" class="jq22-flex b-line">
						<view class="jq22-cou-img">
							<image src="/page_info/static/pages/info/images/icon-item-003.png" alt=""></image>
						</view>
						<view class="jq22-flex-box">
							<text class="text-black">身高</text>
						</view>
						<view class="jq22-arrow">
							<text class="text-gray text-shadow">{{ansList[0]}}cm</text>
						</view>
					</navigator>
					<navigator url="/page_setinfo/setinfo" class="jq22-flex b-line">
						<view class="jq22-cou-img">
							<image src="/page_info/static/pages/info/images/icon-item-004.png" alt=""></image>
						</view>
						<view class="jq22-flex-box">
							<text class="text-black">体重</text>
						</view>
						<view class="jq22-arrow">
							<text class="text-gray text-shadow">{{ansList[1]}}kg</text>
						</view>
					</navigator>
					<navigator url="/page_setinfo/setinfo" class="jq22-flex b-line">
						<view class="jq22-cou-img">
							<image src="/page_info/static/pages/info/images/icon-item-005.png" alt=""></image>
						</view>
						<view class="jq22-flex-box">
							<text class="text-black">体脂率</text>
						</view>
						<view class="jq22-arrow">
							<text class="text-gray text-shadow">{{ansList[2]}}%</text>
						</view>
					</navigator>
					<navigator url="/page_setinfo/setinfo" class="jq22-flex b-line">
						<view class="jq22-cou-img">
							<image src="/page_info/static/pages/info/images/icon-item-006.png" alt=""></image>
						</view>
						<view class="jq22-flex-box">
							<text class="text-black">血压</text>
						</view>
						<view class="jq22-arrow">
							<text class="text-gray text-shadow">{{ansList[3]}}mmHG</text>
						</view>
					</navigator>
					<navigator url="/page_setinfo/setinfo" class="jq22-flex b-line">
						<view class="jq22-cou-img">
							<image src="/page_info/static/pages/info/images/icon-item-007.png" alt=""></image>
						</view>
						<view class="jq22-flex-box">
							<text class="text-black">血糖</text>
						</view>
						<view class="jq22-arrow">
							<text class="text-gray text-shadow">{{ansList[4]}}mmol/L</text>
						</view>
					</navigator>
					<navigator url="/page_setinfo/setinfo" class="jq22-flex b-line">
						<view class="jq22-cou-img">
							<image src="/page_info/static/pages/info/images/icon-item-009.png" alt=""></image>
						</view>
						<view class="jq22-flex-box">
							<text class="text-black">bmi</text>
						</view>
						<view class="jq22-arrow">
							<text class="text-gray text-shadow">{{ansList[5]}}</text>
						</view>
					</navigator>
					<navigator url="/page_setinfo/setinfo" class="jq22-flex b-line">
						<view class="jq22-cou-img">
							<image src="/page_info/static/pages/info/images/icon-item-010.png" alt=""></image>
						</view>
						<view class="jq22-flex-box">
							<text class="text-black">静息心率</text>
						</view>
						<view class="jq22-arrow">
							<text class="text-gray text-shadow">{{ansList[6]}}</text>
						</view>
					</navigator>
					<view class="viewHeight"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// pages/info.js
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				//是否已经获取过了
				num: 0,
				TabList: [],
				ansList:[],
				numList: [{
						name: '目标'
					},
					{
						name: '身高'
					},
					{
						name: '体重'
					},
					{
						name: '年龄'
					},
					{
						name: '完成'
					}
				],
				target: ['增肥', '养生', '减肥'],
				targetValue: [1],
				height: [
					150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169,
					170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182,
					183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200
				],
				heightValue: [20],
				weight: [
					40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64,
					65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
					81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
				],
				weightValue: [20],
				age: [
					1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
					28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
					44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
					69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84,
					85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
				],
				ageValue: [20]
			};
		},
		onShareAppMessage(o) {},
		mounted() {
			this.getServerData();
		},
		methods: {
			getServerData() {
				uni.showLoading({
					title: '加载中'
				})
				let user = {
					user_id: '22'
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
						for(let i=0  ;i<this.TabList.length;i++){
							console.log(this.TabList[i].timeList[this.TabList[i].timeList.length-1].value)
							this.ansList.push(this.TabList[i].timeList[this.TabList[i].timeList.length-1].value);
						}
						console.log(this.ansList)
					} else {}
				});
			},
		}
	};
</script>
<style>
	image {
		border: 0;
	}

	.jq22-user-img image {
		border-radius: 72px;
	}

	.clearfix::after {
		clear: both;
		content: '.';
		display: block;
		height: 0;
		visibility: hidden;
	}

	.clearfix {}

	.viewHeight {
		width: 100%;
		height: 8px;
		background: #f5f5f5;
		position: relative;
		overflow: hidden;
	}

	.r-line {
		position: relative;
	}

	.r-line:after {
		content: '';
		position: absolute;
		z-index: 0;
		top: 0;
		right: 0;
		height: 100%;
		border-right: 1px solid #d9d9d9;
		-webkit-transform: scaleX(0.5);
		transform: scaleX(0.5);
		-webkit-transform-origin: 100% 0;
		transform-origin: 100% 0;
	}

	.b-line {
		position: relative;
	}

	.b-line:after {
		content: '';
		position: absolute;
		z-index: 2;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		border-bottom: 1px solid #e2e2e2;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		-webkit-transform-origin: 0 100%;
		transform-origin: 0 100%;
	}

	.jq22-flex {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		padding: 15px;
		position: relative;
	}

	.jq22-flexbg {
		background-color: #fff8ee;
		border-top: 1px solid #ebebeb;
		border-bottom: 1px solid #ebebeb;
	}

	.jq22-flex-box {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		min-width: 0;
		font-size: 14px;
		color: #333;
	}

	/* 必要布局样式css */

	.jq22-flexView {
		width: 100%;
		height: 100%;
		margin: 0 auto;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
	}

	.jq22-scrollView {
		width: 100%;
		height: 100%;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		overflow-y: auto;
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
		position: relative;
	}

	.jq22-navBar {
		height: 44px;
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		z-index: 1002;
		background: #fff;
	}

	.jq22-navBar-item {
		height: 44px;
		min-width: 25%;
		-webkit-box-flex: 0;
		-webkit-flex: 0 0 25%;
		-ms-flex: 0 0 25%;
		flex: 0 0 25%;
		padding: 0 0.9rem;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		font-size: 0.7rem;
		white-space: nowrap;
		overflow: hidden;
		color: #808080;
		position: relative;
	}

	.jq22-navBar-item:first-child {
		-webkit-box-ordinal-group: 2;
		-webkit-order: 1;
		-ms-flex-order: 1;
		order: 1;
		margin-right: -25%;
		font-size: 0.9rem;
		font-weight: bold;
	}

	.jq22-navBar-item:last-child {
		-webkit-box-ordinal-group: 4;
		-webkit-order: 3;
		-ms-flex-order: 3;
		order: 3;
		-webkit-box-pack: end;
		-webkit-justify-content: flex-end;
		-ms-flex-pack: end;
		justify-content: flex-end;
	}

	.jq22-center {
		-webkit-box-ordinal-group: 3;
		-webkit-order: 2;
		-ms-flex-order: 2;
		order: 2;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		height: 44px;
		width: 50%;
		margin-left: 25%;
	}

	.jq22-center-title {
		text-align: center;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		display: block;
		text-overflow: ellipsis;
		font-size: 0.95rem;
		color: #333;
	}

	.icon {
		width: 20px;
		height: 20px;
		display: block;
		border: none;
		float: left;
		background-size: 20px;
		background-repeat: no-repeat;
	}

	.icon-return {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACh0lEQVRoQ+3ZMW8TMRQH8PcOsTBQISExVCIRCwgWFvZ+hZYBpIrEcTYkBsTGlI2VDamL3YEBpWJoR1BJaOlXYEzyDYp0bMRGRjnJoDuWs/1e3EbKeHf55b33vzsb4YJ98IJ54RKce8XZV1gIcQ8AviDiD2vtC631pzZFYQ2WUt611p4CwM0VcqqU2soSXIN1ztdKqTfZgRuw75RSz9tg3bHsWjomlh04NpYVOAWWDbjf7z8oimLipbH7bUopJdvO7L/Hk8+wwyLiCSLe8H6cww4BwGYFTo0lbWkKLBmYCksCrsNaa99rrZ/FmFnS0GrCdrvd3mg0MqEDqu58yVKaAzZZSwshHgLAsX/rcW2csrJVtaNXeIWdIuL16qJU2OgVrsMCwEGn03mSamaThVYTtizLp+PxeJkioJKFFldslJbmjA0O5o4NCm7AHpZluUM5s1FCSwjxCAA++7ceADiczWaPJ5PJL6qAihJaUspdY8w+Il7xLsASG6SlhRA/EfGa91BxNJ/Pd7hVNtiT1mAwOAeADXdCa637Hi0Wi3zBUsptY8wHRLzqwIh/nlbzbWmna0roLEOrmo11QQd9W1oHdFDwOrR3cLCH/uuFn0uQRQE7dMPKJHl6RwNzRUcF/w9N9VIRHVyhazbLDihWP5KAHbphOzQ5OhmYCzopmAM6OZgaTQL20FMAuOUtHESfaTLwCn3HWnuWEk0KpkCTg1OjWYArtDHmKyJu+jMdeh+KDdghh8NhZ7lcfvPRoXcaWYFToNmBY6NZgj20m+nb3pr3W631yzY7GWzBDtXr9TaLojjz0N+VUvezBXvoPQBw0Fda649Zg9vg6o5l3dKhse58l+AY/yqnc/4GvNDoTFOq8FwAAAAASUVORK5CYII=');
	}

	.m-slider {
		overflow-x: hidden;
		width: 100%;
		position: relative;
	}

	.slider-wrapper {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		width: 100%;
		height: 100%;
		-webkit-transform: translate3d(0px, 0px, 0px);
		transform: translate3d(0px, 0px, 0px);
		position: relative;
		z-index: 1;
		-webkit-transition-property: -webkit-transform;
		transition-property: -webkit-transform;
		transition-property: transform;
		transition-property: transform, -webkit-transform;
	}

	.slider-item {
		width: 100%;
		height: 100%;
		-webkit-flex-shrink: 0;
		-ms-flex-negative: 0;
		flex-shrink: 0;
		background: #f6f6f6;
	}

	.slider-item>image {
		width: 100%;
		height: auto;
		display: block;
		border: none;
	}

	.slider-pagination {
		text-align: right;
		position: absolute;
		width: 100%;
		z-index: 2;
		right: 0;
		bottom: 10px;
		pointer-events: none;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: end;
		-webkit-align-items: flex-end;
		-ms-flex-align: end;
		align-items: flex-end;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
	}

	.slider-pagination>.slider-pagination-item {
		margin: 0 0.25rem;
		width: 8px;
		height: 8px;
		display: inline-block;
		border-radius: 100%;
		background-color: rgba(255, 255, 255, 0.4);
	}

	.slider-pagination>.slider-pagination-item.slider-pagination-item-active {
		background-color: #fff;
		border-radius: 100%;
	}

	.jq22-palace {
		padding: 0.5rem 0;
		position: relative;
		overflow: hidden;
	}

	.jq22-palace-grid {
		position: relative;
		float: left;
		padding: 1px;
		width: 20%;
		box-sizing: border-box;
		margin: 5px 0;
	}

	.jq22-palace-grid-icon {
		width: 30px;
		height: 30px;
		margin: 0 auto;
	}

	.jq22-palace-grid-icon image {
		display: block;
		width: 100%;
		height: 100%;
		border: none;
	}

	.jq22-palace-grid-text {
		display: block;
		text-align: center;
		color: #333;
		font-size: 0.85rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		padding-top: 0.2rem;
	}

	.jq22-palace-grid-text text {
		font-size: 0.8rem;
		font-weight: normal;
		color: #666666;
	}

	.jq22-user-img {
		width: 60px;
		height: 60px;
		margin-right: 1rem;
	}

	.jq22-user-img image {
		width: 100%;
		height: auto;
		display: block;
		border: none;
	}

	.jq22-flex-box text {
		font-size: 1.1rem;
		color: #000000;
		font-weight: normal;
	}

	.jq22-arrow {
		text-align: right;
		color: #394154;
		padding-right: 12px;
		position: relative;
		font-size: 0.85rem;
	}

	.jq22-arrow span {
		color: #333;
		font-size: 0.85rem;
	}

	.jq22-arrow:after {
		content: ' ';
		display: inline-block;
		height: 8px;
		width: 8px;
		border-width: 2px 2px 0 0;
		border-color: #cdcdcd;
		border-style: solid;
		-webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
		transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
		position: relative;
		top: -2px;
		position: absolute;
		top: 50%;
		margin-top: -5px;
		right: 2px;
		border-radius: 1px;
	}

	.jq22-mine-cell {
		background: -webkit-linear-gradient(left, #63cc83, #00967a);
		/* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(right, #63cc83, #00967a);
		/* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(right, #63cc83, #00967a);
		/* Firefox 3.6 - 15 */
		background: linear-gradient(to right, #63cc83, #00967a);
		/* 标准的语法 */
		margin: 0 0.4rem;
		border-radius: 10px;
		text-align: center;
		padding: 1rem 0;
		box-shadow: 0 3px 10px #ccfdd7;
		-webkit-box-shadow: 0 3px 10px #ccfdd7;
	}

	.jq22-mine-cell text {
		color: rgba(255, 255, 255, 0.98);
		margin-bottom: 0.3rem;
		font-weight: bold;
	}

	.jq22-flex-box .jq22-mine-cell text {
		color: rgba(255, 255, 255, 0.98);
	}

	.jq22-mine-cell-one {
		background: -webkit-linear-gradient(left, #7eb1fe, #b9e5ff);
		/* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(right, #7eb1fe, #b9e5ff);
		/* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(right, #7eb1fe, #b9e5ff);
		/* Firefox 3.6 - 15 */
		background: linear-gradient(to right, #7eb1fe, #b9e5ff);
		/* 标准的语法 */
		box-shadow: 0 3px 10px #bfe8ff;
		-webkit-box-shadow: 0 3px 10px #bfe8ff;
	}

	.jq22-flex-one {
		padding: 15px 10px;
	}

	.jq22-cou-img {
		width: 20px;
		height: 20px;
		margin-right: 0.5rem;
	}

	.jq22-cou-img image {
		width: 20px;
		height: 20px;
		display: block;
		border: none;
	}

	.jq22-flex-box text {
		font-size: 1.1rem;
		color: #000000;
		font-weight: 500;
	}

	.jq22-mine-list .b-line:after {
		left: 45px;
	}

	.jq22-mine-box {
		margin-bottom: 6rem;
		background-color: white;
	}

	.jq22-footer {
		width: 100%;
		position: relative;
		z-index: 112;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		padding: 7px 5px 7px 5px;
		background: #ffffff;
	}

	.jq22-tabBar-item {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		color: #979797;
	}

	.jq22-tabBar-item-text {
		display: inline-block;
		font-size: 0.65rem;
		color: #acaeba;
		padding-top: 2px;
	}

	.jq22-tabBar-item-active .jq22-tabBar-item-text {
		color: #3f4659;
	}

	/* .icon-loan {
    background-image: url('../../static/images/icon-item-008.png');
}
.icon-credit {
    background-image: url('../../static/images/icon-item-002.png');
}
.icon-ions {
    background-image: url('../../static/images/icon-item-003.png');
}
.icon-car {
    background-image: url('../../static/images/icon-item-004.png');
} */
	.jq22-footer-fixed {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 49;
	}
</style>
