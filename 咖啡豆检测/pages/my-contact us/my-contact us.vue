<template>
	<view class="container">
		<image class="img1" src="/static/tabbar/微信图片_20250714105154.png"></image>
		<view class="title1">豆识coffee</view>
		<view class="text1">让每次识豆都充满智慧与快乐</view>
		<view class="text2">我们致力于为用户提供智能，准确的识豆体验</view>
	
	<view class="box2">
		
		<view class="item">
			<image class="item-img" src="/static/tabbar/微信图片_20250714122519.png"></image>
			<view class="word1">
				<view class="item-title">联系客服</view>
				<view class="item-text">为您提供专业的服务</view>
			</view>
		</view>
		
		<view class="item">
			<image class="item-img" src="/static/tabbar/微信图片_20250714122551.png"></image>
			<view class="word">
			<view class="item-title">当前版本</view>
			<view class="item-text">Version 1.0.0</view>
			</view>
		</view>
		
		<view class="item">
			<image class="item-img" src="/static/tabbar/微信图片_20250714122600.png"></image>
			<view class="word">
			<view class="item-title">意见反馈</view>
			<view class="item-text">帮助我们变得更好</view>
			</view>
		</view>
		
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

.container{
	background-image: url("/static/tabbar/屏幕截图 2025-06-15 155837.png");
	background-size: cover;
	height: 100vh;
	width: 100%;
}
.img1{
	margin-top: 180rpx;
	margin-left: 245rpx;
	height: 290rpx;
	width: 290rpx;
}
.title1{
	font-size: 50rpx;
	color: #f7dec2;
	margin-top: -50rpx;
	margin-left: 257rpx;
}
.text1{
	margin-left: 180rpx;
	font-size: 31rpx;
	color: #ad753b;
}
.text2{
	margin-left: 80rpx;
	font-size: 30rpx;
	color: #ad753b;
}
.box2{
	display: flex;
	flex-direction: column;
	height: 58%;
	padding-top:25rpx ;
}
.item-img{
	margin-left: 22rpx;
	width: 100rpx;
	height: 100rpx;
}
.item{
	display: flex;
	flex-direction: row;
	background-color: #e8cdae;
	border-radius: 20rpx;
	margin: 23rpx;
	padding: 17rpx;
}
.item-text{
	color:  #c88f4f;
	font-size: 27rpx;
}
.item-title{
	color:#714f41;
	font-size: 34rpx;
}
.word{
	margin-left:30rpx ;
	margin-top: 5rpx;
}
.word1{
	margin-left:30rpx ;
	margin-top: 7rpx;
}
</style>