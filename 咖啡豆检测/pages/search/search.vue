<template>
	<view class="container">
		
		<view class="box1">
			<image class="exit" src="/static/tabbar/2.png" @click="navigateToMy('/pages/my/my')"></image>
			<view class="title">我的收藏</view>
			<image class="share" src="/static/tabbar/1.png"></image>
		</view>
		
		<view class="search">
			<input class="inp" type="text" placeholder="搜索" @click="search">
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		
		onLoad(e){
			console(e);
		},
		methods: {
			
		}
	}
</script>

}
<style>
.container{
	background-image: url("/static/tabbar/屏幕截图 2025-06-15 155837.png");
	background-size: cover;
	width: 100%;
	height: 100vh;
}
.share{
	margin: 47rpx 5rpx;
	width: 70rpx;
	height: 30rpx;
}
.box1{
	display: flex;
	flex-direction: row;
	height: 40rpx;
}
.exit{
	width: 38rpx;
	height: 38rpx;
	margin: 45rpx 25rpx;
}
.title{
	font-size: 25rpx;
	margin: 47rpx 235rpx;
	color: aliceblue;
}
.search{
  
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  padding: 15rpx;
}
.inp{
	width: 700rpx; 
	height: 35rpx; 
    border: 1rpx solid #ccc; 
	border-radius: 20rpx; 
    text-align: center; 
	font-size: 28rpx; 
	padding: 10rpx; 
	text-align:center;
	background-color:  #ffffff;
}
</style>
