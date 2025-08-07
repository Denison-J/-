"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      phone: "",
      isAgreed: false
      // 用普通变量存储勾选状态
    };
  },
  onLoad() {
    common_vendor.index.__f__("log", "at pages/CAOGAO/CAOGAO.vue:89", "页面刚加载，这是onLoad里的日志");
  },
  methods: {
    handleUsernameInput(e) {
      this.username = e.detail.value;
      common_vendor.index.__f__("log", "at pages/CAOGAO/CAOGAO.vue:94", "输入的用户名：", this.username);
    },
    handlePasswordInput(e) {
      this.password = e.detail.value;
      common_vendor.index.__f__("log", "at pages/CAOGAO/CAOGAO.vue:99", "输入的密码：", this.password);
    },
    handleConfirmPasswordInput(e) {
      this.confirmPassword = e.detail.value;
      common_vendor.index.__f__("log", "at pages/CAOGAO/CAOGAO.vue:104", "输入的确认密码：", this.confirmPassword);
    },
    // 处理协议勾选状态变化
    onAgreementChange(e) {
      this.isAgreed = e.detail.value.includes("agree");
      common_vendor.index.__f__("log", "at pages/CAOGAO/CAOGAO.vue:111", "协议勾选状态：", this.isAgreed);
    },
    navigateToAgreement() {
      common_vendor.index.__f__("log", "at pages/CAOGAO/CAOGAO.vue:115", "点击了用户协议");
    },
    navigateToPrivacy() {
      common_vendor.index.__f__("log", "at pages/CAOGAO/CAOGAO.vue:119", "点击了隐私政策");
    },
    async formSubmit() {
      common_vendor.index.__f__("log", "at pages/CAOGAO/CAOGAO.vue:123", "开始执行注册逻辑");
      if (!this.isAgreed) {
        common_vendor.index.showToast({ title: "请同意用户协议", icon: "none" });
        return;
      }
      if (this.password !== this.confirmPassword) {
        common_vendor.index.showToast({ title: "两次密码不一致", icon: "none" });
        return;
      }
      const registerData = {
        username: this.username,
        password: this.password,
        email: this.email,
        phone: this.phone
      };
      try {
        common_vendor.index.__f__("log", "at pages/CAOGAO/CAOGAO.vue:144", "准备发送请求，数据：", registerData);
        const [err, res] = await common_vendor.index.request({
          url: "http://localhost:8080/user/register",
          method: "POST",
          header: { "Content-Type": "application/json" },
          data: registerData
        });
        if (err) {
          common_vendor.index.__f__("error", "at pages/CAOGAO/CAOGAO.vue:153", "请求错误：", err);
          throw err;
        }
        common_vendor.index.__f__("log", "at pages/CAOGAO/CAOGAO.vue:157", "请求成功，响应：", res.data);
        if (res.data.code === 200) {
          common_vendor.index.showToast({ title: "注册成功" });
        } else {
          common_vendor.index.showToast({ title: res.data.msg || "注册失败", icon: "none" });
        }
      } catch (error) {
        common_vendor.index.__f__("error", "at pages/CAOGAO/CAOGAO.vue:164", "捕获到异常：", error);
        common_vendor.index.showToast({ title: "请求失败", icon: "none" });
      }
    },
    formReset() {
      common_vendor.index.__f__("log", "at pages/CAOGAO/CAOGAO.vue:170", "表单重置");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.handleUsernameInput && $options.handleUsernameInput(...args)),
    b: common_vendor.o((...args) => $options.handlePasswordInput && $options.handlePasswordInput(...args)),
    c: common_vendor.o((...args) => $options.handleConfirmPasswordInput && $options.handleConfirmPasswordInput(...args)),
    d: $data.isAgreed,
    e: common_vendor.o((...args) => $options.navigateToAgreement && $options.navigateToAgreement(...args)),
    f: common_vendor.o((...args) => $options.navigateToPrivacy && $options.navigateToPrivacy(...args)),
    g: common_vendor.o((...args) => $options.onAgreementChange && $options.onAgreementChange(...args)),
    h: common_vendor.o((...args) => $options.formSubmit && $options.formSubmit(...args)),
    i: common_vendor.o((...args) => $options.formReset && $options.formReset(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/CAOGAO/CAOGAO.js.map
