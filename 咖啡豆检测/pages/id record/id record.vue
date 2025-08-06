<template>
  <view class="container">
    <view class="box1">

      <view class="image-container">
        <view class="data1">2025年x月x日15：30</view>
        <image class="img1" src="/static/tabbar/3.jpg"></image>
      </view>
      

      <view class="text-group">
        <view class="result">识别结果：</view>
        <view class="name1">XX病</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>
.container {
  background-color: #876751;
  width: 100%;
  height: 100vh;
  padding-top: 15rpx;
}
.box1 {
  display: flex;
  align-items: center; 
  gap: 20rpx; 
  width: 97%;
  margin-left: 10rpx;
  padding: 20rpx;
  background-color: #ffffff;
  border-radius: 20rpx;
  height: 250rpx;
  padding: 0 2rpx;
}
.image-container {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  gap: 10rpx; 
}
.img1 {
  width: 310rpx;
  height: 180rpx;
  border-radius: 20rpx;
}
.data1 {
  font-size: 27rpx;
  margin-left: -30rpx;

}
.text-group {
  display: flex;
  flex-direction: column;
  gap: 15rpx; 
  

}
.result {
  font-size: 33rpx;
}
.name1 {
  font-size: 33rpx;
}
</style>
    