<template>
	<view class="register-container">
	  
	  <view class="title-container">
	    <text class="title">账号注册</text>
	    <text class="subtitle">创建新账号，开启全新体验</text>
	  </view>
	  
	  <form class="register-form" @submit="formSubmit" @reset="formReset">
	    <!-- 用户名输入 -->
	    <view class="form-group">
	      <view class="input-wrapper">
	        <icon type="user" size="20" class="input-icon"></icon>
	        <input type="text" name="username" placeholder="请输入用户名"  placeholder-class="placeholder" @input="handleUsernameInput" value="" />
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
	          @input="handlePasswordInput"
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
	          @input="handleConfirmPasswordInput"
	          value=""
	        />
	      </view>
	    </view>
	    
	    <!-- 同意协议（修复v-model错误） -->
	    <view class="agreement">
	      <checkbox-group @change="onAgreementChange">
	        <label class="checkbox-label">
	          <checkbox value="agree" :checked="isAgreed" />
	          <text>我已阅读并同意</text>
	          <text class="agreement-link" @tap="navigateToAgreement">《用户协议》</text>
	          <text>和</text>
	          <text class="agreement-link" @tap="navigateToPrivacy">《隐私政策》</text>
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
				username: '',
				password: '',
				confirmPassword: '',
				//email: '',
				//phone: '',
				isAgreed: false // 用普通变量存储勾选状态
			}
		},
		onLoad() {
			console.log('页面刚加载，这是onLoad里的日志');
		},
		methods: {
			handleUsernameInput(e){
				this.username = e.detail.value;
				console.log("输入的用户名：", this.username);
			},
			
			handlePasswordInput(e) {
				this.password = e.detail.value;
				console.log("输入的密码：", this.password);
			},
			
			handleConfirmPasswordInput(e) {
				this.confirmPassword = e.detail.value;
				console.log("输入的确认密码：", this.confirmPassword);
			},
			
			// 处理协议勾选状态变化
			onAgreementChange(e) {
				// 当勾选时，e.detail.value会包含"agree"
				this.isAgreed = e.detail.value.includes('agree');
				console.log("协议勾选状态：", this.isAgreed);
			},
			
			navigateToAgreement() {
				console.log('点击了用户协议');
			},
			
			navigateToPrivacy() {
				console.log('点击了隐私政策');
			},
			
			async formSubmit() {
				console.log('开始执行注册逻辑');
				
				// 协议勾选判断
				if (!this.isAgreed) {
					uni.showToast({ title: '请同意用户协议', icon: 'none' });
					return;
				}
				
				if (this.password !== this.confirmPassword) {
					uni.showToast({ title: '两次密码不一致', icon: 'none' });
					return;
				}
				
				const registerData = {
					username: this.username,
					password: this.password,
					email: this.email,
					phone: this.phone
				};
				
				try {
				  console.log('准备发送请求，数据：', registerData);
				  const res = await uni.request({
				    url: "http://localhost:8080/api/user/register",
				    method: "POST",
				    header: { "Content-Type": "application/json" },
				    data: JSON.stringify(registerData), // 显式转 JSON
				  });
				
				  if (res.statusCode >= 200 && res.statusCode < 300) {
				    console.log('请求成功，响应：', res.data);
				    if (res.data.code === 200) {
				      uni.showToast({ title: "注册成功" });
				    } else {
				      uni.showToast({ title: res.data.msg || "注册失败", icon: "none" });
				    }
				  } else {
				    console.error('HTTP 错误：', res.statusCode);
				    uni.showToast({ title: `请求失败 (${res.statusCode})`, icon: "none" });
				  }
				} catch (error) {
				  console.error('网络异常：', error);
				  uni.showToast({ title: "网络错误，请检查连接", icon: "none" });
				}
			}, // 这里是两个方法之间的分隔逗号（正确）
			
			formReset() {
				console.log('表单重置');
			}
		}
	}
</script>


<style>
.register-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 0 30rpx;
  box-sizing: border-box;
  background-color: #f8dfc3;
}

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
