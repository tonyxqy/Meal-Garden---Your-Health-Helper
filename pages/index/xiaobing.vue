<template>
	<view>
		<!-- 冰冰我的冰冰 -->
		<view class="friend" @click="talking" v-if="xiaobing" style="z-index: 10000;">
			<image src="https://s.cn.bing.net/th?id=OJ.ctIMyEUgdeHZwQ&w=120&h=160&c=8&rs=1&pid=academic" mode=""
				style="width: 100%;height: 100%;z-index: 10000;"></image>
		</view>
		<uni-transition mode-class="fade" :show="!xiaobing">
			<view class="ev_talkbox_max">
				<div class="ev_tb_header">
					<div id="ev_tb_disable" class="ev_tb_disable"></div>
					<div id="ev_tb_header_text" class="ev_tb_disable_header_text">
						<a id="ev_tb_header_default_text" class="ev_tb_header_default_text">小螺号</a>
					</div>
					<span id="ev_tb_maxclose" class="ev_tb_disable_close" @click="talking">
						<span id="ev_tb_maxclose_img" class="ev_tb_close_img">
						</span>
					</span>
				</div>
				<div id="ev_default_talk" class="ev_default_talk">
					<scroll-view class="scrool-view" scroll-y="true" style="height: 431px;">
						<span id="ev_talkbox" class="ev_talkbox" style="height: 423px;">
							<div class="ev_msg_wrapper">
								<div id="ev_zo_img" class="ev_zo_img"></div>
								<div class="ev_zo_msg"><span>我是你的健康饮食小助手</span></div>
							</div>
							<div class="ev_msg_wrapper">
								<div id="ev_zo_img" class="ev_zo_img"></div>
								<div class="ev_zo_msg"><span>所有健康饮食问题都可以来找我吖!</span></div>
							</div>
							<div class="ev_msg_wrapper" data-bm="46">
								<div id="ev_zo_img" class="ev_zo_img"></div>
								<div class="ev_zo_msg"><span data-bm="47">这回你又要找我聊什么呀？</span></div>
							</div>
							<div class="ev_msg_wrapper" v-for="(item,index) in topiclist" :key="index">
								<div id="ev_zo_img" class="ev_zo_img" v-if="item.from=='AI'"></div>
								<div class="ev_zo_msg" v-if="item.from=='AI'"><span data-bm="49">{{item.value}}</span>
								</div>
								<img v-if="item.from=='user'" class="ev_my_img"
									src="https://storage.live.com/users/0x98ead897b1c496b2/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&amp;ex=720&amp;sid=209E835C4E0369373781923A4F656894&amp;fofoff=1">
								<div v-if="item.from=='user'" class="ev_my_msg">{{item.value}}</div>
							</div>
						</span>
					</scroll-view>
					<div id="ev_send_input" class="ev_send_input">
						<textarea id="ev_send_text" class="ev_send_text" type="text" v-model="word"
							placeholder="来说点什么吧">
					</textarea>
						<div id="ev_send_button" class="ev_send_button" @click="send">
							<div id="ev_send_button_img" class="ev_send_button_img">
							</div>
						</div>
					</div>
				</div>
			</view>
		</uni-transition>
	</view>
</template>

<script>
	import request from '@/common/request.js';
	export default {
		data() {
			return {
				xiaobing: true,
				word: "",
				topiclist: [],
			};
		},
		created() {},
		methods: {
			send() {
				let opt = {
					url: 'question/',
					method: 'post',
				};
				uni.showLoading({
					title: '加载中'
				})

				let user = {
					from: "user",
					value:  this.word
				}
				let val = {
					a1: this.word
				}
				console.log(val)
				this.topiclist.push(user)
				uni.request({
					header: {
						'Content-type': 'application/x-www-form-urlencoded' 
					},
					url: 'https://47.102.203.108:8000/question/',
					method: 'POST',
					dataType: 'json', //返回值类型
					data: val,
					success: (res) => { //成功
					uni.hideLoading();
						console.log(res.data)
						this.topiclist.push(res.data);
					},
				});
				this.word=''

				// let ans = {
				// 	from: "AI",
				// 	value: "让我想想吖，请稍等"
				// }
				// this.topiclist.push(ans)
				// let anss = {
				// 	from: "AI",
				// 	value: "呜呜呜，小冰可怜可怜你，但是你应该不用吃什么了"
				// }
				// this.topiclist.push(anss)
			},
			talking: function() {
				this.xiaobing = !this.xiaobing
				uni.$emit('hidebox')
			},
		}
	}
</script>

<style>
	.ev_my_img {
		background: url(../../static/me/icon/xiaoxi.png) no-repeat center;
		height: 38px;
		display: inline-block;
		vertical-align: top;
	z-index: 99;
	}

	.ev_my_img,
	.ev_zo_img {
		height: 38px;
		width: 38px;
		border-radius: 50px;
		background-size: contain !important;
		display: inline-block;
		vertical-align: top;
	z-index: 99;
	}

	.ev_my_msg {
		background-color: #fefeff;
		color: #555;
		float: right;
		word-wrap: break-word !important;
		padding: 8px 10px;
		border-radius: 8px 2px 8px 8px;
		margin-right: 8px;
		max-width: 193px;
	z-index: 99;
	}

	.ev_my_img {
		float: right;
	z-index: 99;
	}

	.ev_msg_wrapper>* {
		display: inline-block;
		vertical-align: top;
	z-index: 99;
	}

	.ev_send_button {
		width: 32px;
		height: 32px;
		line-height: 32px;
		margin: 5px 0 5px 8px;
		position: relative;
		bottom: 5px;
		right: 0;
		cursor: pointer;
		background-color: transparent;
		padding: 0;
		float: right;
	z-index: 99;
	}
	

	.ev_send_button_img {
		background: url(https://cn.bing.com/rp/kfOlUlZWFmmvOElW-pmNhjCSNfI.png);
	z-index: 99;
	}

	.ev_send_button_img {
		height: 100%;
		width: 100%;
		cursor: pointer;
		outline: none;
		background-size: contain !important;
	z-index: 99;
	}

	.ev_send_text {
		width: 276px !important;
		border: 0 solid #fff;
		border-radius: 4px;
		font-size: 20px;
		height: 55px;
		line-height: 40px;
		overflow: hidden;
		resize: none;
		vertical-align: top;
		padding: 5px 8px;
		outline: none;
		white-space: nowrap;
		// text-overflow: ellipsis;
		float: left;
	z-index: 99;
	}

	.ev_send_input {
		background-color: #fff;
		color: #000;
		width: 340px;
		padding: 10px 0 9px 8px;
		border-radius: 0 0 6px 6px;
		height: 55px;
	z-index: 99;
	}

	.ev_zo_img {
		background: url(https://cn.bing.com/rp/ar_9isCNU2Q-VG1yEDDHnx8HAFQ.png
) no-repeat center;
	z-index: 99;
	}

	.ev_msg_wrapper {
		margin: 0 16px 16px;
		overflow: hidden;
		z-index: 99;
	}

	.ev_msg_wrapper>* {
		display: inline-block;
		vertical-align: top;
		z-index: 99;
	}

	.ev_zo_msg,
	.ev_my_msg {
		border-radius: 4px;
		font-size: 15px;
		line-height: normal;
		letter-spacing: 0;
		text-align: left;
		white-space: pre-wrap;
		display: inline-block;
		vertical-align: top;
		z-index: 99;
	}

	.ev_zo_msg {
		background-color: #e5e5f0;
		color: #252423;
		padding: 8px 10px;
		max-width: 216px;
		border-radius: 2px 8px 8px 8px;
		margin-left: 8px;
		z-index: 99;
	}

	.ev_my_img,
	.ev_zo_img {
		height: 38px;
		width: 38px;
		border-radius: 50px;
		background-size: contain !important;
		display: inline-block;
		vertical-align: top;
		z-index: 99;
	}

	.ev_default_talk {
		background: #f5f5f6;
		border-radius: 0 0 6px 6px;
		z-index: 99;
	}

	.ev_talkbox_max {
		position: fixed;
		top: 20%;
		right: 0;
		width: 348px;
		border-radius: 6px;
		border: 1px solid #f5f5f6;
		height: 530px;
		z-index: 99;
	}

	#ev_talkbox {
		height: 388px;
		display: block;
		overflow-x: hidden;
		overflow-y: auto;
	}

	.ev_tb_disable {
		background: url(https://cn.bing.com/rp/vFftxgKPLFTSzmZyG8R-jj68tBQ.png
) no-repeat center;
		background-size: contain !important;
		cursor: pointer;
		margin: 17px 0 18px 16px;
		width: 16px;
		height: 16px;
	}

	.ev_tb_disable_close {
		cursor: pointer;
		height: 6px;
		right: 5px;
		width: 20px;
		margin: 23px 7px 23px 0;
	}

	.ev_tb_close_img {
		background: url(https://cn.bing.com/rp/HljicO-IgxnroUfdFHPj3KUcJVU.png) no-repeat center;
		height: 2px;
		width: 16px;
		background-size: contain !important;
		display: flex;
		position: absolute;
		margin: 2px;
	}

	.ev_tb_header {
		height: 51px;
		line-height: 51px;
		border-radius: 6px 6px 0 0;
		background: #f3f2f1;
		display: flex;
	}

	#ev_tb_header_default_text {
		height: 20px;
		margin-top: 15px;
		color: #454545;
		font-size: 14px;
		letter-spacing: 0;
		text-align: left;
		text-decoration: none;
		line-height: normal;
	}

	.ev_tb_disable_header_text {
		margin: 0 auto;
		width: 86px;
		display: flex;
		justify-content: center;
	}

	.friend {
		position: fixed;
		right: 0;
		top: 70%;
		width: 150rpx;
		height: 300rpx;
	}
</style>
