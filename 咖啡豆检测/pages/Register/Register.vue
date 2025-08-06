<template>
	<!-- 注册页面 -->
	<view class="register-container">
	  <!-- 标题区域 -->
	  <view class="title-container">
	    <text class="title">账号注册</text>
	    <text class="subtitle">创建新账号，开启全新体验</text>
	  </view>
	  
	  <!-- 表单区域 -->
	  <form class="register-form" bindsubmit="formSubmit" bindreset="formReset">
	    <!-- 用户名输入 -->
	    <view class="form-group">
	      <view class="input-wrapper">
	        <icon type="user" size="20" class="input-icon"></icon>
	        <input type="text" name="username" placeholder="请输入用户名"  placeholder-class="placeholder" bindinput="handleUsernameInput" value="" />
	      </view>
	    </view>
	    
	    
	    <!-- 密码输入 -->
	    <view class="form-group">
	      <view class="input-wrapper">
	        <icon type="lock" size="20" class="input-icon"></icon>
	        <input 
	          name="password" 
	          placeholder="请设置密码" 
	          placeholder-class="placeholder"
	          bindinput="handlePasswordInput"
	          value=""
	        />
	      </view>
	      
	    </view>
	    
	     <!-- 确认密码输入 -->
	        <view class="form-group">
	          <view class="input-wrapper">
	            <icon type="lock" size="20" class="input-icon"></icon>
	            <input 
	              
	              name="confirmPassword" 
	              placeholder="请确认密码" 
	              placeholder-class="placeholder"
	              bindinput="handleConfirmPasswordInput"
	              value=""
	            />
	          </view>
	          
	        </view>
	    
	    <!-- 同意协议 -->
	    <view class="agreement">
	      <checkbox-group name="agreement">
	        <label class="checkbox-label">
	          <checkbox value="agree" checked="{{agree}}" bindchange="handleAgreementChange" />
	          <text>我已阅读并同意</text>
	          <text class="agreement-link" bindtap="navigateToAgreement">《用户协议》</text>
	          <text>和</text>
	          <text class="agreement-link" bindtap="navigateToPrivacy">《隐私政策》</text>
	        </label>
	      </checkbox-group>
	    </view>
	    
	    <!-- 注册按钮 -->
	    <button 
	      formType="submit" 
	      class="register-btn"
	    >
	      注册
	    </button>
	    
	    <!-- 已有账号 -->
	    <view class="login-link">
	      <text>已有账号？</text>
	      <navigator url="/pages/my-login/my-login" class="link">立即登录</navigator>
	    </view>
	  </form>
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
/* 注册页面样式 */
.register-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 0 30rpx;
  box-sizing: border-box;
  background-color: #f8dfc3;
}

/* 标题样式 */
.title-container {
  margin-top: 80rpx;
  margin-bottom: 60rpx;
  text-align: center;
}

.title {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
  display: block;
  margin-bottom: 15rpx;
}

.subtitle {
  font-size: 24rpx;
  color: #666;
}

/* 表单样式 */
.register-form {
  width: 100%;
  margin-top: 50rpx;
}

.form-group {
  margin-bottom: 50rpx;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 50rpx;
  padding: 0 20rpx;
  height: 90rpx;
  border: 1rpx solid #ee1;
  transition: border-color 0.3s;
}

.input-wrapper:focus-within {
  border-color: #07c160;
}

.input-icon {
  color: #999;
  margin-right: 20rpx;
  width: 30rpx;
  text-align: center;
}


.input {
  flex: 1;
  height: 100%;
  font-size: 28rpx;
  color: #333;
}

.placeholder {
  color: #ccc;
}

/* 协议 */
.agreement {
  margin: 10rpx 0 40rpx 0;
  padding-top: 30rpx;
  padding-bottom: 80rpx;
}

.checkbox-label {
  display: flex;
  align-items: center;
  font-size: 24rpx;
  color: #666;
}

.agreement-link {
  color: #07c160;
  margin: 0 5rpx;
}

/* 按钮 */
.register-btn {
  width: 100%;
  height: 90rpx;
  line-height: 90rpx;
  font-size: 30rpx;
  background-color: #07c160;
  color: #fff;
  border-radius: 8rpx;
  margin-bottom: 30rpx;
}

.register-btn::after {
  border: none;
}

/* 登录链接 */
.login-link {
  text-align: center;
  font-size: 26rpx;
  color: #666;
  margin-top: 20rpx;
}

.link {
  color: #07c160;
  text-decoration: none;
  margin-left: -26rpx;
}

</style>
