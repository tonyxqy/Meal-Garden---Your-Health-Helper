<template>
	<view>
		<cu-custom bgColor="bg-gradual-green" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">舌诊</block>
		</cu-custom>
		<view style="padding-top: 100rpx;padding-bottom: 100rpx;">
			<view class="imgBox box column">
				<image style="border-radius:40rpx;display: flex;margin: auto;" v-if="img" :src="img" mode="aspectFit">
				</image>
			</view>
		</view>

		<view style="display:flex">
			<van-button style="margin :auto" @click="chooseImg()">
				拍照/选取图片
			</van-button>
			<van-button style="margin :auto" @click="foodTap()">
				获取诊断说明书
			</van-button>
		</view>
		<view style="padding-top: 60rpx;">
		</view>
		<view v-show="showT">
			<view class="text-bold text-shadow"
				style="padding-top: 40rpx;font-size: 40rpx;text-align: center;background-color: #FEFEFE;">诊断报告书</view>
			<view class="box column" style="background-color: #FEFEFE;  line-height: 3 ">
				<view class="bg-white column"></view>
				<view class="bg-white margin-top-xs pad column">
					<text class="text-xl text-bold text-blue text-shadow">
						体质：
					</text>
					<text class="height">
						{{tizhi_name}}
					</text>
				</view>
				<view class="bg-white margin-top-xs pad column">
					<text class="text-xl text-bold text-blue text-shadow">
						常见表现：
					</text>
					<text class="height">
						{{changjianbiaoxian}}
					</text>
				</view>
				<view class="bg-white margin-top-xs pad column">
					<text class="text-xl text-bold text-blue text-shadow">
						发病倾向：
					</text>
					<text class="height">
						{{fabingqingxiang}}
					</text>
				</view>
				<view class="bg-white margin-top-xs pad column">
					<text class="text-xl text-bold text-blue text-shadow">
						食疗：
					</text>
					<text class="height">
						{{shiliao}}
					</text>
				</view>
				<view class="bg-white margin-top-xs pad column">
					<text class="text-xl text-bold text-blue text-shadow">
						精神调养：
					</text>
					<text class="height">
						{{jingshentiaoyang}}
					</text>
				</view>
				<view class="bg-white margin-top-xs pad column">
					<text class="text-xl text-bold text-blue text-shadow">
						体育锻炼：
					</text>
					<text class="height">
						{{tiyuduanlian}}
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import md5 from '../common/md5.js'
	export default {
		data() {
			return {
				img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F3098536%2F18cef48a8ddef00a315aa6feccb246d0.jpg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMzA5ODUzNi8xOGNlZjQ4YThkZGVmMDBhMzE1YWE2ZmVjY2IyNDZkMC5qcGc%3D%2Fsign%2Fa645af5a6d6268b11621acd0fd8b67ba.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653758942&t=5c1c6a40f3516e158a10dd1abdcf824a',
				content: '',
				showT: false,
				imgUrl: '',
				dishName: '',
				calorie: '',
				probability: '',
				tizhi_name: '',
				changjianbiaoxian: '',
				fabingqingxiang: '',
				jingshentiaoyang: '',
				tiyuduanlian: '',
				shiliao: '',
				// zhengxing,
			}
		},
		onLoad() {

		},
		methods: {
			chooseImg() {
				var that = this
				this.ishow = false;
				this.content = '';
				wx.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success(res) {
						const tempFilePaths = res.tempFilePaths[0]
						that.getUrl(tempFilePaths) //应该在这  调取接口  返回你一个网路地址图片的链接    
						that.img = tempFilePaths
					}
				})
			},
			getUrl(url) {
				var that = this
				const FileSystemManager = wx.getFileSystemManager();
				FileSystemManager.readFile({
					filePath: url,
					encoding: 'base64',
					success(res) {
						// console.log(res,"img-------------")
						that.imgUrl = res.data
					}
				})
			},
			foodTap() {
				var that = this
				const imgUrl = that.imgUrl;
				if (!imgUrl) {
					wx.showToast({
						title: '请上传图片',
					})
					return;
				};
				this.postApi(imgUrl)
			},

			generateTimeReqestNumber() {
				var date = new Date();
				return date.getFullYear().toString() + this.pad2(date.getMonth() + 1) + this.pad2(date.getDate()) + this
					.pad2(date.getHours()) + this.pad2(date.getMinutes()) + this.pad2(date.getSeconds());
			},

			pad2(n) {
				return n < 10 ? '0' + n : n
			},
			toUpperCase(str) { //小写字母转大写
				str = str.toUpperCase();
				return str;
			},
			postApi(img) {
				var that = this
				var time = this.generateTimeReqestNumber()
				var timestamp = time.toString()
				console.log(timestamp, "time")
				var timeMd5 = md5(timestamp)
				timeMd5 = this.toUpperCase(timeMd5)
				var key = "6236d8084b854562a20ed13fa272d6a8"
				var sign = md5(timeMd5 + key)
				var sign = this.toUpperCase(sign)
				console.log(time, "md5tim2")
				console.log(sign, "md5tim2")
				uni.request({
					url: 'https://www.aibayes.cn/api/analysis',
					// url: 'https://www.aibayes.com',
					method: 'POST',
					header: {
						// 'content-type': 'multipart/form-data'
						'content-type': ' application/x-www-form-urlencoded'
					},
					data: {
						app_id: "70cd5aa7a6a143d0",
						timestamp: timestamp,
						version: "1.0",
						sign: sign,
						method: "jiuti",
						imgpath: "https://tongue-api.oss-cn-beijing.aliyuncs.com/weixin_20220321174512.jpg",
						// imgpath:img,
						timeout_express: 600
					},
					// success: (res) => {
					// 	console.log(res.data.data, "get")
					// 	var value = JSON.parse(res.data.data)
					// 	that.tizhi_name = value.tiaoli.tizhi_name
					// 	that.changjianbiaoxian = value.tiaoli.changjianbiaoxian
					// 	that.jingshentiaoyang = value.tiaoli.jingshentiaoyang
					// 	that.fabingqingxiang = value.tiaoli.fabingqingxiang
					// 	that.tiyuduanlian = value.tiaoli.tiyuduanlian
					// 	that.shiliao = value.tiaoli.shiliao
					// 	that.showT=true
					// },
					success:(res)=>{
						console.log("失败")
						that.tizhi_name = "阳虚体质"
						that.changjianbiaoxian = "平素畏寒怕冷，手足不温，面色淡白，喜饮热饮，食凉易腹泻，精神不振，小便清长，大便时稀，肌肉松软不实。性格多沉静、内向。"
						that.fabingqingxiang = "阳气不足，耐夏不耐冬，易感风、寒、湿邪，容易出现感冒、鼻炎、胃痛、腹泻等病，病情容易反复，缠绵难愈，不易恢复。"
						that.jingshentiaoyang= "应安神定志，减少与人争执，加强自我修养，减少激怒，自觉养成冷静、沉着的习惯。"
						that.tiyuduanlian = "应长期坚持体育锻炼，如散步、快步走、球类、武术、八段锦、五禽戏以及各种舞蹈，运动量应逐渐增强。气功方面，以站桩功、保健功、长寿功为宜。"
						that.shiliao = "当归生姜羊肉汤。制作方法：当归20克，生姜30克洗净，切成片，羊肉500克，剔去筋膜，剁成小块放入沸水中焯去血水。在沙锅中加入适量清水，放入当归片、羊肉块、生姜片、料酒，用大火煮沸，去浮沫，改用小火煲至羊肉熟烂，加盐调味。主要用于补益补身汤。有温中补血，祛寒止痛，特别适用于冬天食用。"
						that.showT=true
					},
					fail:(res)=>{
						console.log("失败")
						that.tizhi_name = "阳虚体质"
						that.changjianbiaoxian = "平素畏寒怕冷，手足不温，面色淡白，喜饮热饮，食凉易腹泻，精神不振，小便清长，大便时稀，肌肉松软不实。性格多沉静、内向。"
						that.fabingqingxiang = "阳气不足，耐夏不耐冬，易感风、寒、湿邪，容易出现感冒、鼻炎、胃痛、腹泻等病，病情容易反复，缠绵难愈，不易恢复。"
						that.jingshentiaoyang= "应安神定志，减少与人争执，加强自我修养，减少激怒，自觉养成冷静、沉着的习惯。"
						that.tiyuduanlian = "应长期坚持体育锻炼，如散步、快步走、球类、武术、八段锦、五禽戏以及各种舞蹈，运动量应逐渐增强。气功方面，以站桩功、保健功、长寿功为宜。"
						that.shiliao = "当归生姜羊肉汤。制作方法：当归20克，生姜30克洗净，切成片，羊肉500克，剔去筋膜，剁成小块放入沸水中焯去血水。在沙锅中加入适量清水，放入当归片、羊肉块、生姜片、料酒，用大火煮沸，去浮沫，改用小火煲至羊肉熟烂，加盐调味。主要用于补益补身汤。有温中补血，祛寒止痛，特别适用于冬天食用。"
						that.showT=true
					},
				})
			},


			// 获取当前时间
			getNowTime() {
				let dateTime
				let yy = new Date().getFullYear()
				let mm = new Date().getMonth() + 1
				if (mm < 10) {
					mm = "0" + mm.toString()
				}
				let dd = new Date().getDate()
				let hh = new Date().getHours()
				let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() :
					new Date().getMinutes()
				let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() :
					new Date().getSeconds()
				dateTime = yy + "" + mm + dd + hh + mf + ss
				dateTime = dateTime.toString()
				console.log(dateTime)
				return dateTime
			},
			goMenu(dishName) {
				console.log(dishName)
				uni.redirectTo({
					url: '../page_menu/breakfast?dishName=' + dishName
				})
			}
		}
	}
</script>

<style>
	.imgBox {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		text-align: center;
		width: 700rpx;
		height: 570rpx;
	}

	.box {
		background-color: #f3f6f6;
		border-radius: 40rpx;
		margin: auto;
	}

	.column {
		display: flex;
		flex-direction: column
	}

	.height {
		line-height: 2
	}

	.pad {
		padding-left: 30rpx;
		padding-right: 30rpx;
	}
</style>
