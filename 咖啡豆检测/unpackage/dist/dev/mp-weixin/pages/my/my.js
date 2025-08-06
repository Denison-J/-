"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      isAuthenticated: false,
      // 假设用户未登录
      user: {
        avatar: "/static/tabbar/微信图片_20250711202407.jpg",
        username: "名刀司命",
        id: "202401234234"
      }
    };
  },
  methods: {
    navigateToContact() {
      common_vendor.index.navigateTo({
        url: "/pages/my-contact us/my-contact us"
      });
    },
    navigateToMyCollection() {
      common_vendor.index.navigateTo({
        url: "/pages/my-collection/my-collection"
      });
    },
    navigateToChange() {
      common_vendor.index.navigateTo({
        url: "/pages/Change/Change"
      });
    },
    navigateToRecord() {
      common_vendor.index.navigateTo({
        url: "/pages/id record/id record"
      });
    },
    navigateToMyLogin() {
      common_vendor.index.navigateTo({
        url: "/pages/my-login/my-login"
      });
    },
    navigateToNot() {
      this.logout();
    },
    navigateToReset() {
      common_vendor.index.navigateTo({
        url: "/pages/my-reset password/my-reset password"
      });
    },
    logout() {
      this.isAuthenticated = false;
      common_vendor.index.showToast({
        title: "已退出登录",
        icon: "none"
      });
    },
    // 新增方法：更新登录状态
    updateAuthStatus() {
      const userInfo = common_vendor.index.getStorageSync("userInfo");
      if (userInfo) {
        this.isAuthenticated = true;
        this.user = userInfo;
      }
    }
  },
  onShow() {
    this.updateAuthStatus();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isAuthenticated ? $data.user.avatar : "/static/tabbar/微信图片_20250711202407.jpg",
    b: !$data.isAuthenticated
  }, !$data.isAuthenticated ? {
    c: common_vendor.o((...args) => $options.navigateToMyLogin && $options.navigateToMyLogin(...args))
  } : {
    d: common_vendor.t($data.user.username),
    e: common_vendor.t($data.user.id)
  }, {
    f: !$data.isAuthenticated
  }, !$data.isAuthenticated ? {
    g: common_vendor.o((...args) => $options.navigateToMyLogin && $options.navigateToMyLogin(...args))
  } : {
    h: common_vendor.o((...args) => $options.navigateToChange && $options.navigateToChange(...args))
  }, {
    i: $data.isAuthenticated
  }, $data.isAuthenticated ? {
    j: common_assets._imports_0$2,
    k: common_vendor.o((...args) => $options.navigateToMyCollection && $options.navigateToMyCollection(...args)),
    l: common_vendor.o((...args) => $options.navigateToMyCollection && $options.navigateToMyCollection(...args)),
    m: common_assets._imports_1$2,
    n: common_vendor.o((...args) => $options.navigateToRecord && $options.navigateToRecord(...args)),
    o: common_vendor.o((...args) => $options.navigateToRecord && $options.navigateToRecord(...args)),
    p: common_assets._imports_2$2,
    q: common_vendor.o((...args) => $options.navigateToReset && $options.navigateToReset(...args)),
    r: common_vendor.o((...args) => $options.navigateToReset && $options.navigateToReset(...args)),
    s: common_assets._imports_3$1,
    t: common_vendor.o((...args) => $options.navigateToContact && $options.navigateToContact(...args)),
    v: common_vendor.o((...args) => $options.navigateToContact && $options.navigateToContact(...args)),
    w: common_assets._imports_4,
    x: common_vendor.o((...args) => $options.navigateToNot && $options.navigateToNot(...args)),
    y: common_vendor.o((...args) => $options.navigateToNot && $options.navigateToNot(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
