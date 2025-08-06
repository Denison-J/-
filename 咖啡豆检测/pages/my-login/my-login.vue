<template>
	<view>
		<view class="login-bg">
			<image class="img1" src="/static/tabbar/4.png"></image>
			
			<view class="t-login">
				<form class="cl">
					<view class="t-a">
						<image src="/static/tabbar/7.png"></image>
						<input type="number" name="phone" placeholder="请输入账号" maxlength="11" v-model="phone" />
					</view>
					<view class="t-a">
						<image src="/static/tabbar/8.png"></image>
						<input type="password" name="code" maxlength="6" placeholder="请输入密码" v-model="pwd" />
					</view>
					<button @tap="login">登 录</button>
					<view class="t-c">
						<text class="t-c-txt" @tap="reg">注册</text>
						<text>忘记密码</text>
					</view>
				</form>
				
				<view class="box">
					<image class="wx" src="/static/tabbar/5.png"></image>
					<image class="dh" src="/static/tabbar/6.png"></image>
				</view>
				
				<image class="yinsi" src="/static/tabbar/9.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '', // 用户输入的手机号
				pwd: '', // 用户输入的密码
			}
		},
		methods: {
			// 登录方法
			login() {
				// 模拟登录逻辑
				if (this.phone === '12345678901' && this.pwd === '123456') {
					// 登录成功，存储用户信息到本地存储
					uni.setStorageSync('userInfo', {
						avatar: '/static/tabbar/微信图片_20250711202407.jpg',
						username: '名刀司命',
						id: '202401234234',
						phone: this.phone
					});
					uni.showToast({
						title: '登录成功',
						icon: 'success',
						duration: 2000
					});
					// 登录成功后跳转到“我的”页面
					uni.reLaunch({
						url: '/pages/my/my' // 假设“我的”页面路径为 /pages/my/my
					});
				} else {
					uni.showToast({
						title: '账号或密码错误',
						icon: 'none',
						duration: 2000
					});
				}
			},
			// 注册方法（这里只是简单跳转，具体逻辑需要根据需求实现）
			reg() {
				uni.navigateTo({
					url:"/pages/Register/Register"
				});
				
			}
		}
	}
</script>

<style scoped>
.login-bg {
	width: 100%;
	height: 100vh;
	background-color: #f8dfc3;
}

.img1 {
	width: 260rpx;
	height: 260rpx;
	margin: 50rpx 245rpx;
}

.t-login {
	width: 80%;
	padding: 55rpx;
	margin: 0rpx auto 0 auto;
	font-size: 28rpx;
	z-index: 9;
}

.t-login button {
	font-size: 28rpx;
	background: #641013;
	color: #fff;
	height: 90rpx;
	line-height: 90rpx;
	border-radius: 50rpx;
}

.t-login input {
	padding: 0 20rpx 0 120rpx;
	height: 90rpx;
	line-height: 90rpx;
	margin-bottom: 50rpx;
	background: #f6f6f6;
	border: 1px solid #f6f6f6;
	font-size: 28rpx;
	border-radius: 50rpx;
}

.t-login .t-a {
	position: relative;
}

.t-login .t-a image {
	width: 40rpx;
	height: 40rpx;
	position: absolute;
	left: 40rpx;
	top: 28rpx;
}

.t-login .t-c {
	display: flex;
	justify-content: space-evenly;
	color: #3056ee;
	margin: 30rpx 30rpx 40rpx 0;
	cursor: pointer;
}

.t-login .t-c .t-c-txt {
	margin-right: 300rpx;
}


.box {
	display: flex;
	flex-direction: row;
}

.wx {
	width: 200rpx;
	height: 180rpx;
	padding-right: 210rpx;
}

.dh {
	width: 156rpx;
	height: 156rpx;
	margin: 17rpx 0rpx;
}

.yinsi {
	width: 530rpx;
	height: 70rpx;
	margin: 90rpx 20rpx;
}
</style>
