<template>
  <view class="coffee-book-read">
    <!-- 搜索框 -->
    <view class="search-box">
		
    <image  class="search-icon" src="/static/tabbar/18.png"></image>
    <input type="text" class="search-input" />
	  
    </view>
	
    <!-- 用户信息及书架区域 -->
    <view class="user-section">
		
	<view class="box">
      <view class="user-info">
        <image class="user-avatar" src="/static/tabbar/微信图片_20250711202407.jpg"></image>
        <text class="user-name">名刀司命</text>
      </view>
	  <image class="shelf-img" src="/static/tabbar/17.png"></image>
	</view>
	  
      <view class="book-shelf"> 	  		
        <view class="shelf-text">
          <text class="shelf-title">书架</text>
          <text class="arrow-right">></text>
        </view>		
      </view>	  
	  
    </view>
	
    <!-- 书籍列表项 -->
    <view class="book-item">
      <image class="book-cover" src="/static/tabbar/17.png"></image>
      <view class="book-info">
        <text class="book-title">咖啡豆书</text>
        <text class="book-author">作者：大哥</text>
        <text class="book-category">历史</text>
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

<style scoped>
/* 全局页面容器样式 */
.coffee-book-read {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
}
/* 搜索框样式 */
.search-box {
  display: flex;
  align-items: center;
  margin: 20rpx 80rpx;
  height: 60rpx;
  border: 2rpx solid #9b785f;
  border-radius: 30rpx;
  width: 570rpx;
}
.search-icon {
  width: 42rpx;
  height: 42rpx;
  margin-left: 20rpx;
}

/* 用户信息及书架区域样式 */
.user-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20rpx;
  padding: 20rpx 20rpx;
  background-color: #6c5f57;
  border-radius: 20rpx;
}
.user-info {
  display: flex;
  align-items: center;
}
.user-avatar {
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  margin-right: 20rpx;
}
.user-name {
  font-size: 25rpx;
  color: #fff;
}
.book-shelf {
  display: flex;
  align-items: center;
}
.shelf-img {
  width: 130rpx;
  height: 180rpx;
  margin-top: 20rpx;
  margin-left: 10rpx;
}
.shelf-text {
  display: flex;
  align-items: center;
}
.shelf-title {
  font-size: 28rpx;
  color: #fff;
  margin-right: 10rpx;
  writing-mode: vertical-rl; 
  white-space: pre; 
}
.arrow-right {
  font-size: 40rpx;
  color: #fff;
}
/* 书籍列表项样式 */
.book-item {
  display: flex;
  align-items: center;
  margin: 20rpx;
  padding: 40rpx;
  border: 2rpx solid #ccc;
  border-radius: 20rpx;
}
.book-cover {
  width: 150rpx;
  height: 190rpx;
  margin-right: 55rpx;
  margin-left: -20rpx;
}
.book-info {
  display: flex;
  flex-direction: column;
  line-height: 50rpx;
}
.book-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #000000;
  margin-bottom: 10rpx;
}
.book-author {
  font-size: 28rpx;
  color: #d0cfcf;
  margin-bottom: 5rpx;
}
.book-category {
  font-size: 26rpx;
  color: #d0cfcf;
}
</style>


