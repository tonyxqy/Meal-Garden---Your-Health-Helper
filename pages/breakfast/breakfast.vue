<template>
	<view>
		<cu-custom bgColor="bg-green" :isBack="true">
		  <block slot="backText">返回</block>
		  <block slot="content">早餐</block>
		</cu-custom>
		<view class="topsearch bg-white">
		    <view class="frame">
		      <input value="foodText" @click="foodInput"></input>
		    </view>
		    <text @click="search">搜索</text>
			<text class="text-grey cuIcon-roundadd "></text>
		</view>
		<view class="history" wx:if="history">
		  <view class="history_title">
		    <text>历史搜索</text>
		    <image src="/images/cart.jpg" mode="widthFix" style="width:5%;" @click="cleanhistory"></image>
		  </view>
		  <view class="history_text">
		    <text wx:for="newArray" wx:key="key" data-text="item" bindtap="textfz">{{item}}</text>
		  </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				foodText:"这是食物名称",
				history: false, //显示历史记录
				noView: false, //显示未找到提示
				foodList: false, //显示商品列表
				historyArray: [], //历史记录数组,
				newArray: [], //添加历史记录数组
				foodArray: []
			}
		},
		methods: {
			//清除历史记录
			    cleanhistory: function(event) {
			      this.setData({
			        history: false, //隐藏历史记录
			        historyArray: [], //清空历史记录数组
			        newArray: [],
			        foodText: "" //清空搜索框
			      })
			    },
			    //搜索
			    search:function(event){
			      var searchtext = this.data.foodText; //搜索框的值
			      var sss = true;
			      if (searchtext != "") {
			        //将搜索框的值赋给历史数组
			        this.data.historyArray.push(searchtext);
			        //模糊查询 循环查询数组中的title字段
			        for (var index in this.data.foodArray) {
			          var num = this.data.foodArray[index].title.indexOf(searchtext);
			          let temp = 'foodArray[' + index + '].status';
			          if (num != -1) { //不匹配的不显示
			            this.setData({
			              [temp]: 1,
			            })
			            sss = false //隐藏未找到提示
			          }
			        }
			        this.setData({
			          history: false, //隐藏历史记录
			          noView: sss, //隐藏未找到提示
			          foodList: true, //显示商品列表
			          newArray: this.data.historyArray //给新历史记录数组赋值
			        })
			      } else {
			        this.setData({
			          noView: true, //显示未找到提示
			          foodList: false, //隐藏商品列表
			          history: false, //隐藏历史记录
			        })
			      }
			    },
			foodInput: function(event) {
			      //当删除input的值为空时
			      if (e.detail.value == "") {
			        this.setData({
			          history: true, //显示历史记录
			          foodList: false //隐藏商品列表
			        });
			        //所有商品列表的状态改为0
			        for (var index in this.data.foodArray) {
			          let temp = 'foodArray[' + index + '].status';
			          this.setData({
			            [temp]: 0,
			          })
			        }
			      }
			      this.setData({
			        foodText: e.detail.value
			      })
			    },
			    //点击历史记录赋值给搜索框
			    textfz: function(event) {
			      this.setData({
			        foodText: e.target.dataset.text
			      })
			    }
		}
	}
</script>

<style>

  .top {
    width: 100%;
    background-color: #f7f7f7;
  }
   
  .topsearch {
    width: 90%;
    margin-left: 5%;
    display: flex;
    padding: 2% 0;
    align-items: center;
  }
   
  .frame {
    background-color: white;
    width: 75%;
    border-radius: 20rpx;
    padding: 0 3%;
  }
   
  .frame>input {
    font-size: 24rpx;
    margin: 6rpx 0;
  }
   
  .topsearch>text {
    width: 10%;
    margin-left: 5%;
    color: #a8a7a7fa;
  }
   
  .history {
    background-color: white;
    padding: 4%;
  }
   
  .history_title {
    font-size: 30rpx;
    display: flex;
    justify-content: space-between;
    color: #a8a7a7fa;
    align-items: center;
  }
   
  .history_text {
    padding: 4% 0;
    display: flex;
    flex-wrap: wrap;
  }
   
  .history_text>text {
    background-color: #f7f7f7;
    padding: 1% 3%;
    margin: 2%;
    border-radius: 40rpx;
    font-size: 30rpx;
  }
   
  .history_text>text:first-child{
    margin-left: 0;
  }
   
  .none{
    margin-top: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
   
  .swiper_con {
    width: 96%;
    margin-left: 2%;
    display: flex;
    flex-wrap: wrap;
  }
   
  .swiper_con_view {
    width: 48%;
    height: 530rpx;
    background-color: white;
    margin: 10rpx 0;
  }
   
  .swiper_con_view:nth-child(even) {
    margin-left: 4%;
  }
   
  .swiper_con_view_view {
    margin-top: 5%;
    display: flex;
    align-items: center;
  }
</style>
