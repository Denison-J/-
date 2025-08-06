"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      phone: "",
      // 用户输入的手机号
      pwd: ""
      // 用户输入的密码
    };
  },
  methods: {
    // 登录方法
    login() {
      if (this.phone === "12345678901" && this.pwd === "123456") {
        common_vendor.index.setStorageSync("userInfo", {
          avatar: "/static/tabbar/微信图片_20250711202407.jpg",
          username: "名刀司命",
          id: "202401234234",
          phone: this.phone
        });
        common_vendor.index.showToast({
          title: "登录成功",
          icon: "success",
          duration: 2e3
        });
        common_vendor.index.reLaunch({
          url: "/pages/my/my"
          // 假设“我的”页面路径为 /pages/my/my
        });
      } else {
        common_vendor.index.showToast({
          title: "账号或密码错误",
          icon: "none",
          duration: 2e3
        });
      }
    },
    // 注册方法（这里只是简单跳转，具体逻辑需要根据需求实现）
    reg() {
      common_vendor.index.navigateTo({
        url: "/pages/Register/Register"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$7,
    b: common_assets._imports_1$5,
    c: $data.phone,
    d: common_vendor.o(($event) => $data.phone = $event.detail.value),
    e: common_assets._imports_2$4,
    f: $data.pwd,
    g: common_vendor.o(($event) => $data.pwd = $event.detail.value),
    h: common_vendor.o((...args) => $options.login && $options.login(...args)),
    i: common_vendor.o((...args) => $options.reg && $options.reg(...args)),
    j: common_assets._imports_3$2,
    k: common_assets._imports_4$1,
    l: common_assets._imports_5
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f8c771f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my-login/my-login.js.map
