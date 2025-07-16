<template>
    <view class="my">
        <!-- 头部 -->
        <view class="my-header">
			
            <view class="header-main">
                <image class="logo-img" src="../../static/tabbar/微信图片_20250711202407.jpg" mode=""></image>
            </view>
			
			<view class="box" @click="navigateToMyLogin">
				<view class="name" @click="navigateToMyLogin">名刀司命</view>
				<view class="id" @click="navigateToMyLogin">202401234234</view>	
			</view>
			
			<view class="arrow" @click="navigateToMyLogin"> > </view>
			
        </view>
		
            <!-- 内容列表 -->
            <view class="my-content">
				
                <view class="my-content-item">
					<image class="item-img" src="../../static/tabbar/屏幕截图 2025-06-15 210128.png"></image>
					<view class="text" @click="navigateToMyCollection">我的收藏</view> <view class="arrow2" @click="navigateToMyCollection"> > </view>
				</view>	
				
				<view class="my-content-item">
					<image class="item-img" src="../../static/tabbar/屏幕截图 2025-06-15 210807.png"></image>
					<view class="text">识别历史</view> <view class="arrow2"> > </view>
				</view>
				
				<view class="my-content-item">
					<image class="item-img" src="../../static/tabbar/屏幕截图 2025-06-15 210707.png"></image>
					<view class="text" @click="navigateToReset">修改密码</view> <view class="arrow2"@click="navigateToReset"> > </view>
				</view>
				
				<view class="my-content-item">
					<image class="item-img" src="../../static/tabbar/屏幕截图 2025-06-15 210755.png"></image>
					<view class="text" @click="navigateToContact">联系我们</view> <view class="arrow2" @click="navigateToContact"> > </view>
				</view>
				
				<view class="my-content-item">
					<image class="item-img" src="../../static/tabbar/屏幕截图 2025-06-15 210740.png"></image>
					<view class="text">退出登录</view> <view class="arrow2"> > </view>
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
			navigateToContact(){
				uni.navigateTo({
					url:'/pages/my-contact us/my-contact us'
				})
			},
			navigateToMyCollection(){
				uni.navigateTo({
					url:'/pages/my-collection/my-collection'
				})
			},
			navigateToMyLogin(){
				uni.navigateTo({
					url:'/pages/my-login/my-login'
				})
			},
			navigateToReset(){
				uni.navigateTo({
					url:"/pages/my-reset password/my-reset password"
				})
			}
        }
    }
</script>

<style lang="scss">
.name{
	color: #cca836;
}
.id{
	color: #cca836;
}
.my{
	background-image: url("/static/tabbar/屏幕截图 2025-06-15 155837.png");
	background-size: cover;
	background-position: center;
	height: 100vh;
	width: 100%;
}
.logo-img{
    width: 170rpx;
    height: 170rpx;
    border:2rpx solid #ccc;
    border-radius: 100%;
    background-color: #FFFFFF;
}
.my-header{
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 50rpx 20rpx;
}
.arrow{
	font-size: 80rpx;
	color: #c6a234;
	margin: 35rpx 150rpx;
}
.box{
	margin: 60rpx 30rpx;
}
.my-content {
  display: flex;
  flex-direction: column; /* 垂直排列子项 */
  position: absolute;
  margin-top: 50%; /* 根据需要调整 */
  align-items: center; /* 水平居中对齐子项 */
}

.my-content-item {
  background-color: #c7a17a;
  display: flex;
  flex-direction: row; /* 水平排列文字和箭头 */
  align-items: center; /* 垂直居中对齐文字和箭头 */
  padding: 40rpx 0;
  border-radius: 20rpx;
  margin-top: 20rpx ;
}
.arrow2{
	font-size: 45rpx;
	padding-left: 510rpx;
	margin-top: -30rpx;
}
.item-img{
	width: 70rpx;
	height: 70rpx;
	border:2rpx solid #ccc;
	border-radius: 100%;
	background-color: #FFFFFF;
}

</style>
