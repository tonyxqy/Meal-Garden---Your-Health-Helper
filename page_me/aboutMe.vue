<!-- 关于本程序 -->
<template>
  <view class="about">
    <canvas canvas-id="bubble" :style="'width:' + width + 'px;height:' + height + 'px'" class="like-fx"></canvas>
    <like-fx ref="likeFx" :width="width" :height="height"></like-fx>
	
	<view class="titleZ text-center align-center">
		<text class="text-bold">关于本程序</text>
		<view class="contentZ">
			<text class="text-xl">随着经济发展，人们对于饮食的概念不再止于温饱，而是更注重食物的营养配比，卡路里含量等因素，均衡饮食，膳食调理，已成为焦点话题。而如今的菜谱软件，更多只是对食物制作方法的描述，而本项目将会在此基础上进行革新，基于协同过滤算法，结合中医中的望闻问切，引入舌诊和基于知识图谱的智能问答系统，融合用户爱好和BMI基本信息智能化定制化一日三餐和新型打卡机制鼓励大家健康饮食。</text>
		</view>
	</view>
	
	<view class="titleZ text-center align-center margin-top-xl">
		<text class="text-bold">主要内容</text>
		<view class="contentZ margin-top-lg">
			<text class="text-xl text-bold"></text>
			<text class="text-xl">本项目预期设计一款基于知识图谱和协同过滤算法的膳食调理系统，旨在利用数据挖掘技术的思想，利用建立知识图谱和nlp技术建立智能医疗膳食回答系统，结合中医问诊的概念和用户爱好等特征建立协同过滤算法对一日三餐进行智能推荐，最后以小程序的形式展现给用户使用和交互。</text>
		</view>
	</view>
	
    <button class='' open-type="contact">
      <image src='../../static/logo.png' class='share-img png round shadow-lg bg-white' mode='aspectFit'>
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
      return {
        animation_timer: null, // 动画定时器
        width: 375,
        height: 1920
      }
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

<style scoped>
	.titleZ{
		width: 750rpx;
		font-size: 52rpx;
		margin-top: 60rpx;
	}
	.contentZ{
		width: 650rpx;
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
