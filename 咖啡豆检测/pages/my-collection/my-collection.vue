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
		
		<view class="box2">
			<view class="name1">象耳豆</view>
			<image class="img1" src="/static/tabbar/3.jpg"></image>
			<view class="data1">2025/7/13</view>
		</view>
		<view class="box3">
			<view class="name2">咖啡豆</view>
			<image class="img2" src="/static/tabbar/微信图片_20250714105154.png"></image>
			<view class="data2">2024/8/15</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap(e){
			if(e.float ==='right'){
				uni.navigateTo({
					url:'/pages/search/search'
				})
			}
		},
		onNavigationBarSearchInputChanged(e){
			console.log(e);
		},
		methods: {
			navigateToMy(url){
				uni.switchTab({
					url:url
				});
			},
			search(){
				if(this.keyword ===""){
					return uni.showToast({
						title:"关键词不能为空",
						icon:'none'
					})
				}else{
					uni.navigateTo({
						url:'/pages/search/search'+this.keyword+""
					})
				}
			}
		}
	}
</script>

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
.box1{
	height: 100rpx;
	display: flex;
}
.img1{
	position: absolute;
	width: 300rpx;
	height: 180rpx;
	border-radius: 20rpx;
	margin: 9rpx 390rpx;
}
.box2{
	height: 200rpx;
	border-radius: 20rpx;
	margin: 15rpx;
	background-color: #ffffff;
}
.name1{
	position: absolute;
	font-size: 25rpx;
	margin: 70rpx 70rpx;
}
.data1{
	font-size: 23rpx;
	position: absolute;
	margin: 150rpx 35rpx;
}
.img2{
	position: absolute;
	width: 300rpx;
	height: 180rpx;
	border-radius: 20rpx;
	margin: 9rpx 390rpx;
	background-color: bisque;
}
.box3{
	height: 200rpx;
	border-radius: 20rpx;
	margin: 15rpx;
	background-color: #ffffff;
}
.name2{
	position: absolute;
	font-size: 25rpx;
	margin: 70rpx 70rpx;
}
.data2{
	font-size: 23rpx;
	position: absolute;
	margin: 150rpx 35rpx;
}
</style>
