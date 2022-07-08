<!-- 关于本程序 -->
<template>
	<view class="about">
		<canvas canvas-id="bubble" :style="'width:' + width + 'px;height:' + height + 'px'" class="like-fx"></canvas>
		<like-fx ref="likeFx" :width="width" :height="height"></like-fx>

		<view class='UCenter-bg'>
			<view class='space' v-show="spaceShow">
				<view class="stars ">
					<view class="star "></view>
					<view class="star pink "></view>
					<view class="star blue "></view>
					<view class="star yellow "></view>
				</view>
			</view>
		
			<block>
				<view class='text-center bounceInDown animated' hover-class="animated rubberBand">
					<view class="cu-avatar2 round xl margin-right-sm shadow-blur-lg bg-img open-data " 
						style="overflow: hidden;">
						<view v-if="avatarUrl">
							<image :src="avatarUrl"></image>
						</view>
					</view>
					<view class=" padding  text-xl text-bold">
						<view v-if="nickName"><text>职业：{{bodydata.occupation_name}}</text></view>
					</view>
				</view>
				<view class="mysidebox backInRight animated">
					  <div class="item item-1">身高</div>
					  <div class="item item-2">{{ansList[0]}}cm</div>
					  <div class="item item-1">体重</div>
					  <div class="item item-2">{{ansList[0]}}kg</div>
					  <div class="item item-1">BMI</div>
					  <div class="item item-2">{{ansList[5].toFixed(2)}}</div>
				</view>
				<div class="box box-1">钙:{{bodydata.element.ca}}</div>
				<div class="box box-2">碳水:{{bodydata.element.carbohydrate}}</div>
				<div class="box box-3">铜:{{bodydata.element.cu}}</div>
				<div class="box box-4">能量:{{bodydata.element.energy}}</div>
				<div class="box box-5">铁:{{bodydata.element.fe}}</div>
				<div class="box box-6">钾:{{bodydata.element.k}}</div>
				<div class="box box-7">镁:{{bodydata.element.mg}}</div>
				<!-- <div class="box box-8">锰:{{bodydata.element.mn}}</div> -->
				<div class="box box-9">钠:{{bodydata.element.na}}</div>
				<div class="box box-10">磷:{{bodydata.element.p}}</div>
				<div class="box box-11">蛋白质:{{bodydata.element.protein}}</div>
				<div class="box box-12">维生素B1:{{bodydata.element.vitamin_B1}}</div>
				<div class="box box-13">维生素B2:{{bodydata.element.vitamin_B2}}</div>
				<div class="box box-14">维生素B6:{{bodydata.element.vitamin_B6}}</div>
				<div class="box box-15">维生素C:{{bodydata.element.vitamin_C}}</div>
				<div class="box box-16">维生素E:{{bodydata.element.vitamin_E}}</div>
				<div class="box box-17">锌:{{bodydata.element.zn}}</div>
			</block>
		
			<image
				src='https://cdn.nlark.com/yuque/0/2019/gif/280373/1570670848649-assets/web-upload/3dbaa72a-062b-470f-9b9d-058ff8f85ab8.gif'
				mode='scaleToFill' class='gif-wave'></image>
		</view>

		<view class="titleZ text-center align-center">
			<text>推荐食谱</text>
			<view class="contentZ">
						<view  v-for="(item,index) in bodydata.menuclassification_set" class="boxlarge fadeInBottomLeft animated">
							{{bodydata.menuclassification_set[index]}}
						</view>
			</view>
		</view>

		<button class='' open-type="contact">
			<image src='/static/logo.png' class='share-img png round shadow-lg bg-white' mode='aspectFit'>
			</image>
		</button>
	</view>
</template>

<script>
	import LikeFx from '@/components/likeFx/likeFx.vue'
	export default {
		components: {
			LikeFx
		},

		data() {
			var nickName = uni.getStorageSync('nickName');
			var avatarUrl = uni.getStorageSync('avatarUrl');
			return {
				nickName,
				avatarUrl,
				spaceShow: true,
				modalName: null,
				animation_timer: null, // 动画定时器
				width: 375,
				height: 1920,
				bodydata:null,
				ansList: [],
			}
		},
		watch: {
			topBackGroupImageIndex(val) {
				console.log(val)
				if (val == 4 || val == 5) {
					this.spaceShow = true;
				} else {
					this.spaceShow = false;
				}
			}
		},
		mounted() {
				this.bodydata = uni.getStorageSync('job')
				this.ansList = uni.getStorageSync('ans')
				console.log(this.bodydata)
				console.log(this.bodydata.menuclassification_set)
				
		},
		onLoad() {
			this._startLikeAnimation();
		},
		onShareAppMessage() {
			return {
				title: '快来和我们一起管理自己的身体健康吧',
			}
		},
		methods: {
			_startLikeAnimation() {
				this.animation_timer = setInterval(() => {
					this.$refs.likeFx.likeClick()
				}, 300)
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import '@/components/animate.css';
	.item-1{
		width: 16px;
		height: 11px;
		font-size: 8px;
		font-family: Source Han Sans CN-Regular, Source Han Sans CN;
		font-weight: 400;
		color: #0BCCD2;
		line-height: 7px;
	}
	.item-2{
		width: 26px;
		height: 12px;
		font-size: 9px;
		font-family: Source Han Sans CN-Regular, Source Han Sans CN;
		font-weight: 400;
		color: #000000;
		line-height: 7px;
	}	
	.box-1{
		animation:show1 3s;
	}
	.box-2{
		animation:show2 3s;
	}
	.box-3{
		animation:show3 3s;
	}
	.box-4{
		animation:show4 3s;
	}
	.box-5{
		animation:show5 3s;
	}
	.box-6{
		animation:show6 3s;
	}
	.box-7{
		animation:show7 3s;
	}
	.box-8{
		animation:show8 3s;
	}	
	.box-9{
		animation:show9 3s;
	}	
	.box-10{
		animation:show10 3s;
	}	
	.box-11{
		animation:show11 3s;
	}	
	.box-12{
		animation:show12 3s;
	}	
	.box-13{
		animation:show13 3s;
	}	
	.box-14{
		animation:show14 3s;
	}	
	.box-15{
		animation:show15 3s;
	}	
	.box-16{
		animation:show16 3s;
	}	
	.box-17{
		animation:show17 3s;
	}	
	.boxlarge{
		width: 100px;
		height: 36px;
		background: #fff;
		opacity: 0.68;
		font-size: 15px;
		color: #0BCCD2;
		text-align: center;
		text-justify: center;
		line-height: 36px;
		border-radius: 15px 15px 15px 15px;
		overflow: hidden;
	}
	.box{
		position: absolute;
		left: 50%;
		top: 40%;
		transform: scale(1) rotate(20) translate3d(-50%, -300rpx, 0);
		animation-iteration-count:1;
			 -webkit-animation-fill-mode: forwards;
				-moz-animation-fill-mode: forwards;
				 -ms-animation-fill-mode: forwards;
				  -o-animation-fill-mode: forwards;
					 animation-fill-mode: forwards;
		height: 27px;
		background: #fff;
		opacity: 0.58;
		font-size: 14px;
		width: 75px;
		font-family: Source Han Sans CN-Regular, Source Han Sans CN;
		font-weight: 500;
		color: #0BCCD2;
		text-align: center;
		line-height: 30px;
		border-radius: 15px 15px 15px 15px;
	}
	
	.mysidebox{
		padding: 6px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		position: absolute;
		left: 50%;
		top: 40%;
		transform: translate(100%);
		width: 80px;
		height: 56px;
		background: #FFFFFF;
		box-shadow: 0px 3px 6px 1px rgba(0,0,0,0.16);
		border-radius: 15px 15px 15px 15px;
		opacity: 1;
		justify-items: center;
		align-items: center;
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
	.titleZ {
		width: 750rpx;
		font-size: 52rpx;
		margin-top: 60rpx;
	}

	.contentZ {
		align-items: center;
		justify-items: center;
		width: 100%;
			display: grid;
		  grid-template-columns: 33.33% 33.33% 33.33%;
		height: 200px;
	}
	
	.insidebox{
		background-color: #000000;
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
		// background: linear-gradient(-120deg, #F15BB5, #9A5CE5, #01BEFF, #00F5D4);
		background: linear-gradient(-120deg, #F8FCFC, #83e8cf, #78f5f1);
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
	
		.UCenter-bg {
			/* background: #fff; */
			background-size: 100% 100%;
			/* background-size: cover; */
			height: 400px;
			display: flex;
			justify-content: center;
			padding-top: 40rpx;
			overflow: hidden;
			position: relative;
			flex-direction: column;
			align-items: center;
			color: #fff;
			font-weight: 300;
			text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
		}
	
		.UCenter-bg text {
			opacity: 0.8;
		}
	
		.UCenter-bg image {
			width: 200rpx;
			height: 200rpx;
		}
	
		.UCenter-bg .gif-wave {
			position: absolute;
			width: 100%;
			bottom: 0;
			left: 0;
			z-index: 99;
			mix-blend-mode: screen;
			height: 100rpx;
		}
	
	
		// 头像
		.cu-avatar2 {
			font-variant: small-caps;
			margin: 0;
			padding: 0;
			display: inline-flex;
			text-align: center;
			justify-content: center;
			align-items: center;
			background: #ccc;
			color: #fff;
			white-space: nowrap;
			position: relative;
			width: 150rpx;
			height: 150rpx;
			background-size: cover;
			background-position: center;
			vertical-align: middle;
			font-size: 1.5em;
			z-index: 99;
		}
	
		.name {
			text-shadow: 2px 2px 1px #2f9bfe;
		}
	
		.dialog2 {
			background: none;
		}
	
		.saicode {
			background-size: 100% 100%;
			-moz-background-size: 100% 100%;
		}
	
		.img-big image {
			top: -40px;
			width: 280rpx;
			height: 280rpx;
		}
	
	
		.shadow-me {
			box-shadow: 0rpx 0rpx 100rpx 0rpx rgba(0, 0, 0, 0.1);
		}
	
		.tn-footerfixed {
			position: fixed;
			width: 100%;
			bottom: 0;
			z-index: 1024;
			box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0.35);
		}
	
		.my_logo {
			background: none;
			padding: 50rpx 0 30rpx 0;
		}
	
		.my-radius {
			border-radius: 12rpx;
			overflow: hidden
		}
	
		.my-icon image {
			width: 100rpx;
			height: 100rpx;
			display: inline-block;
			margin: 0 auto
		}
	
		.my-iconcolor {
			background: rgba(255, 255, 255, 0.96)
		}
	
		.shadow-shop {
			box-shadow: 0rpx 0rpx 90rpx 0rpx rgba(0, 0, 0, 0.1);
		}
	
		.qrcode-img {
			position: fixed;
			width: 80rpx;
			height: 80rpx;
			bottom: 350rpx;
			right: 30rpx;
			z-index: 1024;
			opacity: 0.8;
			box-shadow: 0rpx 8rpx 30rpx 0rpx rgba(0, 0, 0, 0.3);
			border: none
		}
	
	
		/* 数字背景 */
		.shadow-warp-my {
			position: relative;
			box-shadow: 0 10rpx 10rpx rgba(0, 0, 0, 0.1);
		}
	
		.shadow-warp-my:before,
		.shadow-warp-my:after {
			position: absolute;
			content: "";
			top: 20rpx;
			bottom: 30rpx;
			left: 20rpx;
			width: 50%;
			box-shadow: 0 30rpx 20rpx rgba(0, 0, 0, 0.16);
			transform: rotate(-6deg);
			z-index: -1;
		}
	
		.shadow-warp-my:after {
			right: 20rpx;
			left: auto;
			transform: rotate(6deg);
		}
	
	
		.bg-product {
			background-image: linear-gradient(rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0));
			color: #fff;
		}
	
		.margin-bottom-my {
			margin-bottom: 150rpx;
		}
	
	
		// 
		.cu-dialog {
			background: #FFFFFF;
			overflow: visible;
			padding: 300rpx 0 70rpx;
		}
	
		.modal_bg {
			width: 100%;
			height: 400rpx;
			position: absolute;
			top: -100rpx;
			background-image: url(http://cdn.zhoukaiwen.com/modal_bg.png);
			background-size: 100%;
			background-repeat: no-repeat;
		}
	
		.modal_main {
			background-color: #FFFFFF;
		}
	
		/* 主题色 */
		.bg-zt1 {
			color: #fff;
			background: #81d949;
		}
	
		.bg-zt2 {
			color: #fff;
			background: #b2e6ff;
		}
	
		.bg-zt3 {
			color: #fff;
			background: #f3cd41;
		}
	
		.bg-zt4 {
			color: #fff;
			background: #ddecf7;
		}
	
		.bg-zt5 {
			color: #fff;
			background: #152e9d;
		}
	
		.bg-zt6 {
			color: #fff;
			background: #0f1358;
		}
	
		.nav-list {
			display: flex;
			flex-wrap: wrap;
			padding: 0px 40upx 0px;
			justify-content: space-between;
		}
	
		.nav-li {
			padding: 22upx;
			border-radius: 12upx;
			width: 45%;
			margin: 0 2.5% 40upx;
			background-image: url(https://s1.328888.xyz/2022/04/12/fplgJ.png);
			background-size: cover;
			background-position: center;
			position: relative;
			z-index: 1;
		}
	
		.nav-li::after {
			content: "";
			position: absolute;
			z-index: -1;
			background-color: inherit;
			width: 100%;
			height: 100%;
			left: 0;
			bottom: -10%;
			border-radius: 10upx;
			opacity: 0.2;
			transform: scale(0.9, 0.9);
		}
	
		.nav-li.cur {
			color: #fff;
			background: rgb(94, 185, 94);
			box-shadow: 4upx 4upx 6upx rgba(94, 185, 94, 0.4);
		}
	
		.nav-name {
			font-size: 28upx;
			text-transform: Capitalize;
			position: relative;
		}
	
		.nav-name::before {
			content: "";
			position: absolute;
			display: block;
			width: 40upx;
			height: 6upx;
			background: #fff;
			bottom: 0;
			right: 0;
			opacity: 0.5;
		}
	
		.nav-name::after {
			content: "";
			position: absolute;
			display: block;
			width: 100upx;
			height: 1px;
			background: #fff;
			bottom: 0;
			right: 40upx;
			opacity: 0.3;
		}
	
		.nav-name::first-letter {
			font-weight: bold;
			font-size: 36upx;
			margin-right: 1px;
		}
	
		.nav-li text {
			position: absolute;
			right: 30upx;
			top: 30upx;
			font-size: 52upx;
			width: 60upx;
			height: 60upx;
			text-align: center;
			line-height: 60upx;
		}
	
		// 好玩动态
		.dong {
			z-index: 9999;
			position: fixed;
			top: -40px;
			right: -80px;
			transform: scale(0.24);
			-webkit-transform: scale(0.24);
			-moz-transform: scale(0.24);
	
		}
	
		.monster {
			transform: rotate(-50deg);
			-ms-transform: rotate(-50deg);
			/* IE 9 */
			-moz-transform: rotate(-50deg);
			/* Firefox */
			-webkit-transform: rotate(-50deg);
			/* Safari 和 Chrome */
			-o-transform: rotate(-50deg);
			/* Opera */
			display: flex;
			justify-content: center;
			position: relative;
			width: 170px;
			height: 400px;
			border-top-left-radius: 200px;
			border-top-right-radius: 200px;
			background-color: #3C47D7;
			box-shadow: 20px 20px 60px #4650E5;
		}
	
		.monster__face {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			position: absolute;
			top: 14%;
			width: 75%;
			height: 160px;
		}
	
		.monster__noses {
			top: 50%;
			display: flex;
			justify-content: space-between;
			width: 28%;
			height: auto;
			margin-bottom: 10px;
		}
	
		.monster__nose {
			width: 8px;
			height: 12px;
			border-radius: 20px;
			background: rgba(0, 0, 0, 0.5);
			box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.1);
		}
	
		.monster__mouth {
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			width: 100%;
			height: 0%;
			overflow: hidden;
			border: 25px solid #FFC333;
			border-radius: 100px;
			background-color: #810332;
			animation: mouth 1.75s infinite;
			box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
			box-sizing: border-box;
		}
	
		.monster__mouth::before {
			content: '';
			position: absolute;
			width: 150px;
			height: 80px;
			border-radius: 100px;
			background-color: #400018;
		}
	
		.monster__mouth::after {
			content: '';
			position: absolute;
			bottom: -80px;
			width: 160px;
			height: 80px;
			border-top-left-radius: 50%;
			border-top-right-radius: 50%;
			background-color: #DC1B50;
			animation: tongue 1.75s infinite;
		}
	
		.monster__top {
			position: absolute;
			top: -30px;
			width: 170px;
			height: 30px;
			border-bottom-left-radius: 10px;
			border-bottom-right-radius: 10px;
			background-color: #ffffff;
			z-index: 100;
			animation: t 1.75s infinite;
		}
	
		.monster__bottom {
			position: absolute;
			bottom: 0;
			width: 100px;
			height: 30px;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			background-color: #ffffff;
			z-index: 100;
			animation: b 1.75s infinite;
		}
	
	
		.avatar-eye {
			position: absolute;
			top: -10%;
			width: 65px;
			height: 65px;
			background: linear-gradient(105deg, white, #cb87f4);
			border-radius: 100%;
			box-shadow: 4px 8px 5px rgba(0, 0, 0, 0.2);
			margin: 3px;
			-webkit-transform: translateX(-50%);
			transform: translateX(-50%);
		}
	
	
		.avatar-eye--green {
			background: linear-gradient(to bottom, #fdfdfd, #c3efea);
		}
	
		.avatar-eye--violet {
			background: linear-gradient(to bottom, #fdfdfd, #e6d6f6);
		}
	
	
		.eye--left {
			left: 10%;
		}
	
		.eye--right {
			left: 85%;
		}
	
		.eye--center {
			left: 45%;
			top: 10%;
		}
	
		.avatar-eye-pupil {
			position: absolute;
			width: 55%;
			height: 55%;
			left: 50%;
			top: 25%;
			-webkit-transform: translate(-50%);
			transform: translate(-50%);
			z-index: 100;
			border-radius: 100%;
		}
	
	
		.pupil--green {
			background: linear-gradient(135deg, rgba(188, 248, 177, 0.7), #2fa38c 75%);
		}
	
		.pupil--pink {
			background: linear-gradient(135deg, #f1a183, #8535cd);
		}
	
	
		.avatar-eye-pupil-blackThing {
			position: absolute;
			width: 55%;
			height: 55%;
			left: 50%;
			top: 25%;
			background: #2c2f32;
			-webkit-transform: translate(-50%);
			transform: translate(-50%);
			border-radius: 100%;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
		}
	
		.avatar-eye-pupil-lightReflection {
			position: absolute;
			width: 7px;
			height: 7px;
			left: 25%;
			top: 10%;
			background: #ebebeb;
			-webkit-transform: translate(-50%);
			transform: translate(-50%);
			border-radius: 100%;
			box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.2);
		}
	
		/**/
		@keyframes t {
	
			0%,
			10%,
			80%,
			100% {
				top: -30px;
			}
	
			20% {
				top: 0px;
			}
	
			30% {
				top: -20px;
			}
	
			40% {
				top: -0px;
			}
	
			50% {
				top: -25px;
			}
	
			70% {
				top: 0px;
			}
		}
	
		@keyframes b {
	
			0%,
			10%,
			80%,
			100% {
				bottom: -30px;
			}
	
			20% {
				bottom: 0px;
			}
	
			30% {
				bottom: -20px;
			}
	
			40% {
				bottom: -0px;
			}
	
			50% {
				bottom: -25px;
			}
	
			70% {
				bottom: 0px;
			}
		}
	
		@keyframes mouth {
	
			0%,
			10%,
			100% {
				width: 100%;
				height: 0%;
			}
	
			15% {
				width: 90%;
				height: 30%;
			}
	
			20% {
				width: 50%;
				height: 70%;
			}
	
			25% {
				width: 70%;
				height: 70%;
			}
	
			30% {
				width: 80%;
				height: 60%;
			}
	
			35% {
				width: 60%;
				height: 70%;
			}
	
			40% {
				width: 55%;
				height: 75%;
			}
	
			45% {
				width: 50%;
				height: 90%;
			}
	
			50% {
				width: 40%;
				height: 70%;
			}
	
			55% {
				width: 70%;
				height: 95%;
			}
	
			60% {
				width: 40%;
				height: 50%;
			}
	
			65% {
				width: 100%;
				height: 60%;
			}
	
			70% {
				width: 100%;
				height: 70%;
			}
	
			75% {
				width: 90%;
				height: 70%;
			}
	
			80% {
				width: 50%;
				height: 70%;
			}
	
			85% {
				width: 90%;
				height: 50%;
			}
	
			85% {
				width: 40%;
				height: 70%;
			}
	
			90% {
				width: 90%;
				height: 30%;
			}
	
			95% {
				width: 100%;
				height: 10%;
			}
		}
	
		@keyframes tongue {
	
			0%,
			20%,
			100% {
				bottom: -80px;
			}
	
			30%,
			90% {
				bottom: -40px;
			}
	
			40% {
				bottom: -45px;
			}
	
			50% {
				bottom: -50px;
			}
	
			70% {
				bottom: -80px;
			}
	
			90% {
				bottom: -40px;
			}
		}
	
	
		// 顶部流星
		.space {
			position: absolute;
			top: 0;
			left: 0;
		}
	
		.planet {
			width: 150rpx;
			height: 150rpx;
			border-radius: 50%;
			background: #333;
			position: absolute;
			left: 50%;
			top: 50%;
			margin: -75rpx 0 0 -75rpx;
			overflow: hidden;
			z-index: 2;
		}
	
		.planet_shadow {
			position: absolute;
			border-radius: 50%;
			height: 100%;
			width: 100%;
			top: -40%;
			right: -10%;
			border: 35rpx solid rgba(0, 0, 0, .15);
		}
	
		.star {
			display: block;
			width: 5rpx;
			height: 5rpx;
			border-radius: 50%;
			background: #FFF;
			top: 100rpx;
			left: 400rpx;
			position: relative;
			transform-origin: 100% 0;
			animation: star-ani 6s infinite ease-out;
			box-shadow: 0 0 5rpx 5rpx rgba(255, 255, 255, .3);
			opacity: 0;
			z-index: 2;
		}
	
		.star:after {
			content: '';
			display: block;
			top: 0rpx;
			left: 4rpx;
			border: 0rpx solid #fff;
			border-width: 0rpx 90rpx 2rpx 90rpx;
			border-color: transparent transparent transparent rgba(255, 255, 255, .3);
			transform: rotate(-45deg) translate3d(1rpx, 3rpx, 0);
			box-shadow: 0 0 1rpx 0 rgba(255, 255, 255, .1);
			transform-origin: 0% 100%;
			animation: shooting-ani 3s infinite ease-out;
		}
	
		.pink {
			top: 30rpx;
			left: 395rpx;
			background: #ff5a99;
			animation-delay: 5s;
			-webkit-animation-delay: 5s;
			-moz-animation-delay: 5s;
		}
	
		.pink:after {
			border-color: transparent transparent transparent #ff5a99;
			animation-delay: 5s;
			-webkit-animation-delay: 5s;
			-moz-animation-delay: 5s;
		}
	
		.blue {
			top: 35rpx;
			left: 432rpx;
			background: cyan;
			animation-delay: 7s;
			-webkit-animation-delay: 7s;
			-moz-animation-delay: 7s;
		}
	
		.blue:after {
			/* border-color: transpareanimation-delay: 12s; */
			-webkit-animation-delay: 7s;
			-moz-animation-delay: 7s;
			animation-delay: 7s;
		}
	
		.yellow {
			top: 50rpx;
			left: 600rpx;
			background: #ffcd5c;
			animation-delay: 5.8s;
		}
	
		.yellow:after {
			border-color: transparent transparent transparent #ffcd5c;
			animation-delay: 5.8s;
		}
	
		@keyframes star-ani {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(0, 0, 0);
				-webkit-transform: scale(0) rotate(0) translate3d(0, 0, 0);
				-moz-transform: scale(0) rotate(0) translate3d(0, 0, 0);
			}
	
			50% {
				opacity: 1;
				transform: scale(1) rotate(0) translate3d(-200rpx, 200rpx, 0);
				-webkit-transform: scale(1) rotate(0) translate3d(-200rpx, 200rpx, 0);
				-moz-transform: scale(1) rotate(0) translate3d(-200rpx, 200rpx, 0);
			}
	
			100% {
				opacity: 0;
				transform: scale(1) rotate(0) translate3d(-300rpx, 300rpx, 0);
				-webkit-transform: scale(1) rotate(0) translate3d(-300rpx, 300rpx, 0);
				-moz-transform: scale(1) rotate(0) translate3d(-300rpx, 300rpx, 0);
			}
		}
		
		@keyframes show1 {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(-50%, 0, 0);
			}
			
			100% {
				opacity: 0.58;
				transform: scale(1) rotate(0) translate3d(-150px, -300rpx, 0);
			}
		}
		@keyframes show2 {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(-50%, 0, 0);
			}
			
			100% {
				opacity: 0.58;
				transform: scale(1) rotate(0) translate3d(-50px, -300rpx, 0);
			}
		}
		@keyframes show3 {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(-50%, 0, 0);
			}
			
			100% {
				opacity: 0.58;
				transform: scale(1) rotate(0) translate3d(+50px, -300rpx, 0);
			}
		}
		@keyframes show4 {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(-50%, 0, 0);
			}
			
			100% {
				opacity: 0.58;
				transform: scale(1) rotate(0) translate3d(-150px, -200rpx, 0);
			}
		}
		@keyframes show5 {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(-50%, 0, 0);
			}
			
			100% {
				opacity: 0.58;
				transform: scale(1) rotate(0) translate3d(-50px, -200rpx, 0);
			}
		}		@keyframes show6 {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(-50%, 0, 0);
			}
			
			100% {
				opacity: 0.58;
				transform: scale(1) rotate(0) translate3d(50px, -200rpx, 0);
			}
		}		@keyframes show7 {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(-50%, 0, 0);
			}
			
			100% {
				opacity: 0.58;
				transform: scale(1) rotate(0) translate3d(-150px, -100rpx, 0);
			}
		}
		@keyframes show8 {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(-50%, 0, 0);
			}
			
			100% {
				opacity: 0.58;
				transform: scale(1) rotate(0) translate3d(-150px, -100rpx, 0);
			}
		}
		@keyframes show9 {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(-50%, 0, 0);
			}
			
			100% {
				opacity: 0.58;
				transform: scale(1) rotate(0) translate3d(-50px, -100rpx, 0);
			}
		}
		@keyframes show10 {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(-50%, 0, 0);
			}
			
			100% {
				opacity: 0.58;
				transform: scale(1) rotate(0) translate3d(+50px, -100rpx, 0);
			}
		}
		@keyframes show11 {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(-50%, 0, 0);
			}
			
			100% {
				opacity: 0.58;
				transform: scale(1) rotate(0) translate3d(-150px, 0rpx, 0);
			}
		}
		@keyframes show12 {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(-50%, 0, 0);
			}
			
			100% {
				opacity: 0.58;
				transform: scale(1) rotate(0) translate3d(-150px, 100rpx, 0);
			}
		}
		@keyframes show13 {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(-50%, 0, 0);
			}
			
			100% {
				opacity: 0.58;
				transform: scale(1) rotate(0) translate3d(-150px, 200rpx, 0);
			}
		}
		@keyframes show14 {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(-50%, 0, 0);
			}
			
			100% {
				opacity: 0.58;
				transform: scale(1) rotate(0) translate3d(-150px, 300rpx, 0);
			}
		}
		@keyframes show15 {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(-50%, 0, 0);
			}
			
			100% {
				opacity: 0.58;
				transform: scale(1) rotate(0) translate3d(-50px, 300rpx, 0);
			}
		}
		@keyframes show16 {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(-50%, 0, 0);
			}
			
			100% {
				opacity: 0.58;
				transform: scale(1) rotate(0) translate3d(50px, 300rpx, 0);
			}
		}
		@keyframes show17 {
			0% {
				opacity: 0;
				transform: scale(0) rotate(0) translate3d(-50%, 0, 0);
			}
			
			100% {
				opacity: 0.58;
				transform: scale(1) rotate(0) translate3d(50px, 200rpx, 0);
			}
		}
</style>
