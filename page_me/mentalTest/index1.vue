<!-- 心灵保健 -->
<template>
	<view class="contaier" :style="{ minHeight: getHeight + 'px' }">
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">答题测试</block>
		</cu-custom>

		<view class="bannerBox">
			<image class="ggBox" mode="widthFix" src="https://tse2-mm.cn.bing.net/th/id/OIP-C.PyOVv6VZb2lISUMBwsBjEAHaDJ?w=336&h=149&c=7&r=0&o=5&pid=1.7"></image>
		</view>

		<!-- 答题主页面 -->
		<view class="padding">
			<view class="mainBox radius shadow-warp bg-white margin-top relative">
				<view class="userHeard cu-avatar lg round"
					style="background-image:url(/static/logo.png);"></view>
				<view v-show="hasData">
					<view class="animation-reverse shadow" :class="animation" data-class="slide-rights" setData>
						<view class="mentalTitle text-xl text-black text-bold">
							<!-- <text>{{ DataList[num].serialNumber || '' }}</text> -->
							<!-- <text>、</text> -->
							<text>{{ DataList[num].fullname || '' }}</text>
						</view>
						<view class="mentalList" v-for="(item, index) in itemList"
							v-bind:class="{ mentalListActive: index == mentalListActive }" @tap="Toggle(index,item)">
							<view class="indexBox text-shadow">{{ item.number || '' }}</view>
							{{ item.answer || '' }}
						</view>
					</view>

					<u-line color="#dddddd"></u-line>

					<view class="margin-top cu-progress radius striped active">
						<view class="bg-blue" :style="[{ width: loading ? progress + '%' : '' }]"></view>
					</view>
					<view class="explainMain">本测试仅提供参考，不会作为最终依据</view>
				</view>

				<view v-show="noData">
					<view class="text-center text-bold text-black text-xxl margin-tb-xl">您已答题，感谢参与</view>
					<!-- <view class="text-center margin-tb-lg text-lg">评测结果：您的基础很好，继续加油。</view> -->
					<view class="text-gray text-center margin-tb-lg text-lg">题库正在更新中...</view>
				</view>
			</view>
		</view>

		<view class="explain">
			<view @click="goExplain">
				<u-icon name="question-circle-fill" size="30"></u-icon>
				答题规则说明
			</view>
		</view>

		<!-- 遮罩层 -->
		<u-mask :show="show">
			<view class="warp">
				<view class="rect" @tap.stop>
					<view class="closeBtn">
						<u-icon @click="closeMask" name="close-circle-fill" color="#ccc" size="58"></u-icon>
					</view>

					<view class="closeImg">
						<image mode="aspectFit" src="http://cdn.zhoukaiwen.com/answerTrophy.png"></image>
					</view>
					<view class="text-black text-bold text-center">恭喜您！完成答题！</view>
					<view class="text-center margin-tb-lg text-gray">{{result}}</view>

					<view style="width: 350rpx; margin: 50rpx auto 0;">
						<button v-if="isShare != 1" @click="shareBtn" open-type="share"
							class="cu-btn round bg-blue shadow" style="width: 100%;">身体健康是一切的根本</button>
						<button v-if="isShare == 1" open-type="share" class="cu-btn round bg-blue shadow"
							style="width: 100%;">分享给好友</button>
					</view>
				</view>
			</view>
		</u-mask>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				getHeight: '',
				loading: false,
				animation: '',

				mentalListActive: -1,
				noData: false,
				hasData: true,
				ATotal: 0,
				Ascore: 0,
				BTotal: 0,
				Bscore: 0,
				CTotal: 0,
				Cscore: 0,
				DTotal: 0,
				Dscore: 0,
				ETotal: 0,
				Escore: 0,
				FTotal: 0,
				Fscore: 0,
				GTotal: 0,
				Gscore: 0,
				HTotal: 0,
				Hscore: 0,
				ITotal: 0,
				Iscore: 0,
				resultlist1: [],
				resultlist2: [],
				result: "",
				// 数据
				num: 0,
				itemList: [{
						number: 'A',
						answer: '没有'
					},
					{
						number: 'B',
						answer: '很少'
					},
					{
						number: 'C',
						answer: '有时'
					},
					{
						number: 'D',
						answer: '经常'
					},
					{
						number: 'E',
						answer: '总是'
					}
				],
				DataList: [{
						id: 1,
						answerno: "answerforpinghe1",
						fullname: "（1）您精力充沛吗？",
						answer: 0,
						is_decrease: false
					},
					{
						id: 2,
						answerno: "answerforpinghe2",
						fullname: "（2）您容易疲乏吗？",
						answer: 0,
						is_decrease: true
					},
					{
						id: 3,
						answerno: "answerforpinghe3",
						fullname: "（3）您说话声音低弱无力吗？",
						answer: 0,
						is_decrease: true
					},
					{
						id: 4,
						answerno: "answerforpinghe4",
						fullname: "（4）您感到闷闷不乐，情绪低沉吗？",
						answer: 0,
						is_decrease: true
					},
					{
						id: 5,
						answerno: "answerforpinghe5",
						fullname: "（5）您比一般人耐受不了寒冷（冬天的寒冷，夏天的空调，电扇等）吗？",
						answer: 0,
						is_decrease: true
					},
					{
						id: 6,
						answerno: "answerforpinghe6",
						fullname: "（6）您能适应外界自然和社会环境的变化吗？",
						answer: 0,
						is_decrease: false
					},
					{
						id: 7,
						answerno: "answerforpinghe7",
						fullname: "（7）您容易失眠吗？",
						answer: 0,
						is_decrease: true
					},
					{
						id: 8,
						answerno: "answerforpinghe8",
						fullname: "（8）您容易忘事（健忘）吗？",
						answer: 0,
						is_decrease: true
					}, {
						id: 1,
						answerno: "answerforqixu1",
						fullname: "（9）您容易疲乏吗？",
						answer: 0,
						is_decrease: false
					},
					{
						id: 2,
						answerno: "answerforqixu2",
						fullname: "（10）您容易气短(呼吸短促，接不上气)吗？",
						answer: 0,
						is_decrease: false
					},
					{
						id: 3,
						answerno: "answerforqixu3",
						fullname: "（11）您容易心慌吗？",
						answer: 0,
						is_decrease: false
					},
					{
						id: 4,
						answerno: "answerforqixu4",
						fullname: "（12）您容易头晕或站起时晕眩吗？",
						answer: 0,
						is_decrease: false
					},
					{
						id: 5,
						answerno: "answerforqixu5",
						fullname: "（13）您比别人容易患感冒吗?",
						answer: 0,
						is_decrease: false
					},
					{
						id: 6,
						answerno: "answerforqixu6",
						fullname: "（14）您喜欢安静、懒得说话吗?",
						answer: 0,
						is_decrease: false
					},
					{
						id: 7,
						answerno: "answerforqixu7",
						fullname: "（15）您说话声音低弱无力吗?",
						answer: 0,
						is_decrease: false
					},
					{
						id: 8,
						answerno: "answerforqixu8",
						fullname: "（16）您活动量稍大就容易出虚汗吗?",
						answer: 0,
						is_decrease: false
					}, {
						id: 1,
						answerno: "answerforyangxu1",
						fullname: "（17）您手脚发凉吗?",
						answer: 0,
						is_decrease: false
					},
					{
						id: 2,
						answerno: "answerforyangxu2",
						fullname: "（18）您胃脘部、背部或腰膝部怕冷吗？",
						answer: 0,
						is_decrease: false
					},
					{
						id: 3,
						answerno: "answerforyangxu3",
						fullname: "（19）您感到怕冷、衣服比别人穿得多吗?",
						answer: 0,
						is_decrease: false
					},
					{
						id: 4,
						answerno: "answerforyangxu4",
						fullname: "（20）您比一般人耐受不了寒冷(冬天的寒冷，夏天的冷空调、电扇等)吗？",
						answer: 0,
						is_decrease: false
					}
				],

				//进度条
				progress: 0,

				currentPoints: 0, //当前积分
				isShare: 3, //是否分享	0否 1是

				showMessage: '' //答题结果

			};
		},

		onShareAppMessage(res) {
			return {
				title: '我已完成答题，快来参与吧'
			};
		},
		onLoad() {
			const that = this;
			uni.getSystemInfo({
				success: function(res) {
					that.getHeight = res.windowHeight;
				}
			});
			setTimeout(function() {
				that.loading = true;
			}, 300);

			this.getData();
		},
		watch: {
			progress(val) {
				console.log(this.progress + '% - 进度');

				if (this.progress == 100) {
					this.noData = true;
					this.hasData = false;
					setTimeout(() => {
						this.show = true;
					}, 1300);
				}
			}
		},

		methods: {
			compute: function(event) {
				this.pingheresult();
				this.qixuresult();
				this.yangxuresult();
				this.yinxuresult();
				this.tanxuresult();
				this.shireresult();
				this.xueyuresult();
				this.qiyuresult();
				this.tebingresult();
				if (this.Bscore >= 13) {
					this.resultlist1.push("气虚质");
				} else if ((this.Bscore < 13) && (this.Bscore >= 10)) {
					this.resultlist2.push("有气虚倾向");
				}
				if (this.Cscore >= 13) {
					this.resultlist1.push("阳虚质");
				} else if ((this.Cscore < 13) && (this.Cscore >= 10)) {
					this.resultlist2.push("有阳虚倾向");
				}
				if (this.Dscore >= 13) {
					this.resultlist1.push("阴虚质");
				} else if ((this.Dscore < 13) && (this.Dscore >= 10)) {
					this.resultlist2.push("有阴虚倾向");
				}
				if (this.Escore >= 13) {
					this.resultlist1.push("痰湿质");
				} else if ((this.Escore < 13) && (this.Escore >= 10)) {
					this.resultlist2.push("有痰湿倾向");
				}
				if (this.Fscore >= 13) {
					this.resultlist1.push("湿热质");
				} else if ((this.Fscore < 13) && (this.Fscore >= 10)) {
					this.resultlist2.push("有湿热倾向");
				}
				if (this.Gscore >= 13) {
					this.resultlist1.push("血瘀质");
				} else if ((this.Gscore < 13) && (this.Gscore >= 10)) {
					this.resultlist2.push("有血瘀倾向");
				}
				if (this.Hscore >= 13) {
					this.resultlist1.push("气郁质");
				} else if ((this.Hscore < 13) && (this.Hscore >= 10)) {
					this.resultlist2.push("有气郁倾向");
				}
				if (this.Iscore >= 13) {
					this.resultlist1.push("特禀质");
				} else if ((this.Iscore < 13) && (this.Iscore >= 10)) {
					this.resultlist2.push("有特禀倾向");
				}

				console.log(this.resultlist1);
				console.log(this.resultlist2);

				if (this.resultlist1.length > 0) {
					for (var i = 0; i < this.resultlist1.length - 1; i++) {
						this.result = this.result + this.resultlist1[i] + "，";
					}
					this.result = this.result + this.resultlist1[i];
				} else if ((this.resultlist1.length == 0) && (this.Ascore >= 60) && (this.resultlist2.length == 0)) {
					this.result = "平和质"
				} else if ((this.resultlist1.length == 0) && (this.Ascore >= 60) && (this.resultlist2.length > 0)) {
					this.result = "基本是平和质，"
					for (var i = 0; i < this.resultlist2.length - 1; i++) {
						this.result = this.result + this.resultlist2[i] + "，";
					}
					this.result = this.result + this.resultlist2[i];
				} else if ((this.resultlist1.length == 0) && (this.Ascore < 60) && (this.resultlist2.length == 0)) {
					this.result = "非平和质"
				} else if ((this.resultlist1.length == 0) && (this.Ascore < 60) && (this.resultlist2.length > 0)) {
					this.result = "非平和质，"
					for (var i = 0; i < this.resultlist2.length - 1; i++) {
						this.result = this.result + this.resultlist2[i] + "，";
					}
					this.result = this.result + this.resultlist2[i];
				}

			},
			pingheresult: function() {
				this.Ascore = [(this.ATotal - 8) / (8 * 4)] * 100;
				this.Ascore = this.Ascore.toFixed(1);
				console.log("pinghe score = " + this.Ascore);
			},
			qixuresult: function() {
				this.Bscore = [(this.BTotal - 8) / (8 * 4)] * 100;
				this.Bscore = this.Bscore.toFixed(1);
				console.log("qixu score = " + this.Bscore);
			},

			yangxuresult: function() {
				this.Cscore = [(this.CTotal - 7) / (7 * 4)] * 100;
				this.Cscore = this.Cscore.toFixed(1);
				console.log("yangxu score = " + this.Cscore);
			},

			yinxuresult: function() {
				this.Dscore = [(this.DTotal - 8) / (8 * 4)] * 100;
				this.Dscore = this.Dscore.toFixed(1);
				console.log("yinxu score = " + this.Dscore);
			},

			tanxuresult: function() {
				this.Escore = [(this.ETotal - 8) / (8 * 4)] * 100;
				this.Escore = this.Escore.toFixed(1);
				console.log("tanxu score = " + this.Escore);
			},

			shireresult: function() {
				this.Fscore = [(this.FTotal - 7) / (7 * 4)] * 100;
				this.Fscore = this.Fscore.toFixed(1);
				console.log("shire score = " + this.Fscore);
			},

			xueyuresult: function() {
				this.Gscore = [(this.GTotal - 7) / (7 * 4)] * 100;
				this.Gscore = this.Gscore.toFixed(1);
				console.log("xuexu score = " + this.Gscore);
			},

			qiyuresult: function() {
				this.Hscore = [(this.HTotal - 7) / (7 * 4)] * 100;
				this.Hscore = this.Hscore.toFixed(1);
				console.log("qiyu score = " + this.Hscore);
			},

			tebingresult: function() {
				this.Iscore = [(this.ITotal - 7) / (7 * 4)] * 100;
				this.Iscore = this.Iscore.toFixed(1);
				console.log("tebing score = " + this.Iscore);
			},
			getData() {
				this.progress = 0;
			},
			Toggle(index, item) {
				console.log(index + 1)
				let ans = index + 1
				if (this.num < 8)
					this.ATotal = this.ATotal + ans
				else if (this.num < 16)
					this.BTotal = this.BTotal + ans
				else if (this.num < 23)
					this.CTotal = this.CTotal + ans
				else if (this.num < 31)
					this.DTotal = this.DTotal + ans
				else if (this.num < 39)
					this.ETotal = this.ETotal + ans
				else if (this.num < 46)
					this.FTotal = this.FTotal + ans
				else if (this.num < 53)
					this.GTotal = this.GTotal + ans
				else if (this.num < 60)
					this.HTotal = this.HTotal + ans
				else if (this.num < 67)
					this.ITotal = this.ITotal + ans
				this.mentalListActive = index;
				console.log(this.num + 1);
				console.log('length:', this.DataList.length)
				this.progress = (100 / this.DataList.length) * (this.num + 1).toFixed(2); //进度条

				console.log(this.ATotal, this.Ascore)
				if (this.progress < 100) {
					setTimeout(() => {
						this.animation = 'animation-slide-left';
						this.num++; //翻第二页
						setTimeout(() => {
							this.mentalListActive = -1;
							this.animation = '';
						}, 800);
					}, 300);
				} else {
					console.log('没有下一题了');
					this.compute();
					console.log(this.result)
					this.show = true;
				}
			},
			// 弹窗消失
			closeMask() {
				this.show = false;
			},
			goExplain() {
				uni.navigateTo({
					url: './explain'
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import '@/colorui/animation.css';

	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.rect {
		width: 480rpx;
		// height: 520rpx;
		border-radius: 20rpx;
		padding: 25rpx 25rpx 80rpx 25rpx;
		box-sizing: border-box;
		background-color: #fff;
	}

	.closeImg {
		width: 100%;
		height: 200rpx;
		margin: 10rpx auto 30rpx;

		image {
			height: 200rpx;
		}
	}

	.cu-bar .cu-avatar:first-child {
		margin-left: -11px;
	}

	.cu-bar {
		height: 90rpx !important;
	}

	.mainBox {
		padding: 60rpx 40rpx 20rpx 40rpx;
	}

	.explainMain {
		width: 100%;
		text-align: center;
		font-size: 24rpx;
		text-align: center;
		color: #999999;
		margin-top: 30rpx;
	}

	.userHeard {
		position: absolute;
		left: 50%;
		top: -50rpx;
		margin-left: -50rpx;
	}

	.mentalTitle {
		margin: 0 0 30rpx 0;
	}

	.mentalList {
		width: 100%;
		height: 78rpx;
		line-height: 78rpx;
		padding-right: 20rpx;
		border-radius: 12rpx;
		margin: 30rpx 0;
		overflow: hidden;
		border: 1px solid #dddddd;

		.indexBox {
			width: 70rpx;
			height: 78rpx;
			text-align: center;
			line-height: 78rpx;
			float: left;
			background-color: #dddddd;
			margin-right: 15rpx;
		}
	}

	.mentalListActive {
		width: 100%;
		height: 78rpx;
		line-height: 78rpx;
		padding-right: 20rpx;
		border: 1px solid #0081ff;
		border-radius: 12rpx;
		color: #0081ff;
		margin: 30rpx 0;
		font-weight: 600;
		background-image: url(http://cdn.zhoukaiwen.com/answerYes.png);
		background-repeat: no-repeat;
		background-size: 38rpx;
		background-position: right 30rpx center;

		.indexBox {
			background-color: #0081ff;
			color: #ffffff;
		}
	}

	.contaier {
		background-color: #f2f2f2;

		.bannerBox {
			width: 750rpx;

			image {
				width: 750rpx;
			}
		}

		.explain {
			width: 750rpx;
			// position: absolute;
			bottom: 40rpx;
			font-size: 24rpx;
			margin: 10rpx 0 40rpx 0;
			text-align: center;
			color: #999999;

			.integral {
				font-size: 30rpx;
				margin-bottom: 15rpx;
				color: #333333;
			}
		}
	}
</style>
