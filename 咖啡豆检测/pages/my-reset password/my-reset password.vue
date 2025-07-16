<template>
<view class="container">
    <!-- 头部区域 -->
    <view class="header">
      <view class="cancel-btn" @click="cancel">取消</view>
      <view class="title">修改密码</view>
      <view class="confirm-btn" @click="confirm">确定</view>
    </view>

    <!-- 内容区域 -->
    <view class="content">
      <!-- 账号信息 -->
      <view class="form-item">
        <view class="label">账号</view>
        <view class="input-wrapper">
          <input type="text"value="202402150899" disabled />
        </view>
      </view>

      <!-- 旧密码 -->
      <view class="form-item">
        <view class="label">旧密码</view>
        <view class="input-wrapper">
          <input type="password" v-model="oldPassword" placeholder="请填写旧密码" />
        </view>
      </view>

      <!-- 新密码 -->
      <view class="form-item">
        <view class="label">新密码</view>
        <view class="input-wrapper">
          <input type="password" v-model="newPassword" placeholder="请填写新密码" />
        </view>
      </view>

      <!-- 确认密码 -->
      <view class="form-item">
        <view class="label">确认密码</view>
        <view class="input-wrapper">
          <input type="password" v-model="confirmPassword" placeholder="请再次填写新密码" />
        </view>
      </view>

      <!-- 忘记密码链接 -->
      <view class="forgot-password" @click="forgotPassword">忘记旧密码？</view>
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
			cancel(){
				uni.switchTab({
					url:"/pages/my/my"
				})
			}
		}
	}
</script>

<style scoped>
.container {
  height: 100vh;
  background-image: url("/static/tabbar/屏幕截图 2025-06-15 155837.png");
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30rpx 40rpx;
  background-color: rgba(0, 0, 0, 0.2);
}

.cancel-btn, .confirm-btn {
  color: #fff;
  font-size: 28rpx;
}

.confirm-btn {
  background-color: #b39283;
  padding: 10rpx 20rpx;
  border-radius: 8rpx;
}

.title {
  color: #fff;
  font-size: 32rpx;
  font-weight: bold;
}

.content {
  padding: 40rpx;
}

.form-item {
  display: flex;
  align-items: center;
  padding: 30rpx 0;
  border-bottom: 2rpx solid #ccc;
}

.label {
  width: 160rpx;
  color: #fff;
  font-size: 28rpx;
}

.input-wrapper {
  flex: 1;
}

input {
  width: 100%;
  height: 40rpx;
  line-height: 40rpx;
  color: #fff;
  font-size: 28rpx;
  background-color: transparent;
  border: none;
  outline: none;
}

input::placeholder {
  color: #ddd;
  font-size: 26rpx;
}

.forgot-password {
  margin-top: 60rpx;
  text-align: center;
  color: #007aff;
  font-size: 35rpx;
}
</style>
