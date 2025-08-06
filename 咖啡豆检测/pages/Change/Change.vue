<template>
  <view class="my"  @click="handleOuterClick">
    <!-- 头部区域 -->
    <view class="my-header" @click="NavigateToBack">
		
      <view class="header-main">
        <image class="logo-img" src="../../static/tabbar/微信图片_20250711202407.jpg"></image>
      </view>
	  
      <view class="box">
        <view class="name">名刀司命</view>
        <view class="id">202401234234</view>
      </view>
	  
      <view class="arrow"> > </view>
	  
    </view>

    <!-- 内容区域 -->
    <view class="container">
      <view class="user-info">
        <image class="avatar" src="/static/tabbar/微信图片_20250711202407.jpg"></image>
        <view class="user-details">
          <input class="inp" type="text" placeholder="请输入新的昵称" >
          <button class="save-button">保存</button>
        </view>
      </view>
      <view class="agreement">
        <checkbox></checkbox>
        <text>您已阅读并同意</text>
        <navigator url="/pages/user-agreement/user-agreement" class="agreement-link">《用户协议》</navigator>
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
    NavigateToBack() {
      uni.switchTab({
        url: "/pages/my/my",
      });
    },
    handleOuterClick(e) {
      uni.createSelectorQuery()
       .in(this)
       .select('.container')
       .boundingClientRect((rect) => {
          if (rect) {
            const { top, left, right, bottom } = rect;
            const { clientX, clientY } = e.touches[0]; 
            if (
              clientX < left ||
              clientX > right ||
              clientY < top ||
              clientY > bottom
            ) {
              this.NavigateToBack();
            }
          }
        })
       .exec();
    },
  },
};
</script>
<style>

.my {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  width: 100%;
  background-image: url("/static/tabbar/屏幕截图 2025-06-15 155837.png");
  background-size: cover;
  background-position: center;
  padding-top: 50rpx; 
}

.my-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 50rpx 20rpx;
}

.logo-img {
  width: 170rpx;
  height: 170rpx;
  border: 2rpx solid #ccc;
  border-radius: 50%;
  background-color: #FFFFFF;
}

.box {
  display: flex;
  flex-direction: column;
  margin: 60rpx 30rpx;
}

.name {
  color: #cca836;
  font-size: 32rpx;
}

.id {
  color: #cca836;
  font-size: 28rpx;
}

.arrow {
  font-size: 80rpx;
  color: #c6a234;
  margin: 35rpx 200rpx;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding:40rpx;
  margin-top: 50%; 
  border-radius: 30px 50rpx 0 0 ;
  width: 90%; 
  align-self: center; 
  height: 44vh;
  background-color: #FFFFFF;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  margin-left: 50rpx;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
}

.user-details {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.username {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
.inp{
	width: 680rpx;
	height: 80rpx;
	background-color: gainsboro;
	border-radius: 30rpx;
	margin-right: 50rpx;
	margin-top: 20rpx;
	margin-bottom: 20rpx;
	text-align: center;
	padding: 12rpx 0;
	
}
.save-button {
  background-color: #a07a54;
  color: #FFFFFF;
  font-size: 16px;
  align-self: flex-start;
  width: 680rpx;
  height: 103rpx;
  border-radius: 30rpx;
  margin-right: 50rpx;
  margin-top: 20rpx;
  margin-bottom: 20rpx;
  text-align: center;
  padding: 12rpx 0;
}

.agreement {
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 105px;

}

.agreement-link {
  color: blue;
  text-decoration: none;
  margin-left: 5px;
  
}
</style>
