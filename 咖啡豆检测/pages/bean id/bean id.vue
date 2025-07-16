<template>
	<view class=container>
		
		<view class=title1>
			Hi，欢迎来到
		</view>		
		<view class=title2>
			豆识CoffeeBean
		</view>
		
		<view class="camera">
			<image src="/static/tabbar/屏幕截图 2025-07-11 160249.png" @tap="navigateToPage"></image>
		</view>
		<view class=box>
			<view class="section" @click="navigateToRead">
			    <text class="title">读物</text>
			    <text class="subtitle">在线读，一起学</text>
			    <image class="icon" src="/static/tabbar/屏幕截图 2025-06-15 165557.png"></image>
			</view>
			<view class="divider"></view>
			<view class="section" @click="navigateToFavorites">
			    <text class="title">收藏</text>
			    <text class="subtitle">个人收藏</text>
			    <image class="icon" src="/static/tabbar/coffee-beans_15451246.png"></image>
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
		onLoad() {

		},
		methods: {
			navigateToRead() {
			      uni.navigateTo({
			        url: '/pages/read/read' // 跳转到读物页面的路径
			      });
			    },
			    navigateToFavorites() {
			      uni.navigateTo({
			        url: '/pages/favorites/favorites' // 跳转到收藏页面的路径
			      });
			    },
			navigateToPage() {
			      uni.navigateTo({
			        url: '/pages/detection/detection' // 替换为你的目标页面路径
			      });
			    }
        }
	}
</script>

<style>
	
.container{
	background-image: url("/static/tabbar/屏幕截图 2025-06-15 155837.png");
	background-size: cover;
	 height: 100vh;
	 width: 100%;
	 background-position: center;
}

.title1{
	font-size: 55rpx;
	text-align: center;
	padding-top: 20rpx;
}
.title2{
	font-size: 55rpx;
	text-align: center;
	margin-top: 20rpx;	
	padding-left: 78rpx;
}
.camera{
	  padding-top: 120rpx;
	  padding-left: 70rpx;
}
.box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height:300rpx;
  background-color: #6f4d37; /* 背景颜色 */
  border-radius: 20rpx;
  margin: 63rpx 20rpx;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.title {
  font-size: 40rpx;
  color: #3e2723; /* 文字颜色 */
}

.subtitle {
  font-size: 20rpx;
  color: #ffffff; /* 文字颜色 */
}

.icon {
  width: 100rpx; /* 图标宽度 */
  height: 100rpx; /* 图标高度 */
  margin-top: 20rpx;
}

.divider {
  width: 1rpx;
  height: 150rpx;
  background-color: #ffffff; /* 分隔线颜色 */
}

</style>
