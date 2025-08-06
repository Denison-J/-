<template>
  <view class="my">
      <!-- 头部 -->
      <view class="my-header">
        <view class="header-main">
          <image class="logo-img" :src="isAuthenticated ? user.avatar : '/static/tabbar/微信图片_20250711202407.jpg'" mode=""></image>
        </view>
  	  
        <view class="box0" @click="navigateToMyLogin" v-if="!isAuthenticated">
          <view class="name0">点击登录</view>
          <view class="id0">未登录</view>
        </view>
  	  
        <view class="box" v-else>
           <view class="name">{{ user.username }}</view>
           <view class="id">{{ user.id }}</view>
         </view>
        <view class="arrow1" @click="navigateToMyLogin" v-if="!isAuthenticated"> > </view>
        <view class="arrow" @click="navigateToChange" v-else> > </view>
         
      </view>

    <!-- 内容列表 -->
    <view class="my-content" v-if="isAuthenticated">
      <view class="my-content-item">
        <image class="item-img" src="../../static/tabbar/屏幕截图 2025-06-15 210128.png"></image>
        <view class="text" @click="navigateToMyCollection">我的收藏</view>
        <view class="arrow2" @click="navigateToMyCollection"> > </view>
      </view>
      <view class="my-content-item">
        <image class="item-img" src="../../static/tabbar/屏幕截图 2025-06-15 210807.png"></image>
        <view class="text" @click="navigateToRecord">识别历史</view>
        <view class="arrow2" @click="navigateToRecord"> > </view>
      </view>
      <view class="my-content-item">
        <image class="item-img" src="../../static/tabbar/屏幕截图 2025-06-15 210707.png"></image>
        <view class="text" @click="navigateToReset">修改密码</view>
        <view class="arrow2" @click="navigateToReset"> > </view>
      </view>
      <view class="my-content-item">
        <image class="item-img" src="../../static/tabbar/屏幕截图 2025-06-15 210755.png"></image>
        <view class="text" @click="navigateToContact">联系我们</view>
        <view class="arrow2" @click="navigateToContact"> > </view>
      </view>
      <view class="my-content-item">
        <image class="item-img" src="../../static/tabbar/屏幕截图 2025-06-15 210740.png"></image>
        <view class="text" @click="navigateToNot">退出登录</view>
        <view class="arrow2" @click="navigateToNot"> > </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: false, // 假设用户未登录
      user: {
        avatar: '/static/tabbar/微信图片_20250711202407.jpg',
        username: '名刀司命',
        id: '202401234234',
      },
    };
  },
  methods: {
    navigateToContact() {
      uni.navigateTo({
        url: '/pages/my-contact us/my-contact us',
      });
    },
    navigateToMyCollection() {
      uni.navigateTo({
        url: '/pages/my-collection/my-collection',
      });
    },
	navigateToChange() {
	  uni.navigateTo({
	    url: '/pages/Change/Change',
	  });
	},
    navigateToRecord() {
      uni.navigateTo({
        url: '/pages/id record/id record',
      });
    },
    navigateToMyLogin() {
      uni.navigateTo({
        url: '/pages/my-login/my-login',
      });
    },
    navigateToNot() {
      this.logout(); // 调用退出登录方法
    },
    navigateToReset() {
      uni.navigateTo({
        url: '/pages/my-reset password/my-reset password',
      });
    },
    logout() {
      this.isAuthenticated = false; // 退出登录
      uni.showToast({
        title: '已退出登录',
        icon: 'none',
      });
    },
    // 新增方法：更新登录状态
    updateAuthStatus() {
      // 假设登录成功后，从本地存储或其他地方获取用户信息
      const userInfo = uni.getStorageSync('userInfo');
      if (userInfo) {
        this.isAuthenticated = true;
        this.user = userInfo;
      }
    },
  },
 onShow() {
   this.updateAuthStatus();
 },
};
</script>

<style lang="scss">
.name {
  color: #cca836;
}
.id {
  color: #cca836;
}
.my {
  background-image: url("/static/tabbar/屏幕截图 2025-06-15 155837.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
}
.logo-img {
  width: 170rpx;
  height: 170rpx;
  border: 2rpx solid #ccc;
  border-radius: 100%;
  background-color: #FFFFFF;
}
.my-header {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50rpx 20rpx;
}
.arrow {
  font-size: 80rpx;
  color: #c6a234;
  margin: 35rpx 200rpx;
}
.arrow1 {
  font-size: 80rpx;
  color: #c6a234;
  margin: 35rpx 280rpx;
}
.box {
  margin: 60rpx 30rpx;
}
.box0 {
  margin: 60rpx 30rpx;
  display: flex;
  flex-direction: column; 
  gap: 5rpx; 
  flex-shrink: 0; 
  min-width: 150rpx; 

  
}
.name0, .id0 {
  color: #cca836;
  /* 可保留 margin 调整位置，或用 gap 控制间距 */
}
.my-content {
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 50%;
  align-items: center;
}
.my-content-item {
  background-color: #c7a17a;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40rpx 0;
  border-radius: 20rpx;
  margin-top: 20rpx;
}
.arrow2 {
  font-size: 45rpx;
  padding-left: 510rpx;
  margin-top: -30rpx;
}
.item-img {
  width: 70rpx;
  height: 70rpx;
  border: 2rpx solid #ccc;
  border-radius: 100%;
  background-color: #FFFFFF;
}
</style>