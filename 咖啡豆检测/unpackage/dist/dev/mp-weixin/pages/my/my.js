"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
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
    navigateToMyLogin() {
      common_vendor.index.navigateTo({
        url: "/pages/my-login/my-login"
      });
    },
    navigateToReset() {
      common_vendor.index.navigateTo({
        url: "/pages/my-reset password/my-reset password"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$2,
    b: common_vendor.o((...args) => $options.navigateToMyLogin && $options.navigateToMyLogin(...args)),
    c: common_vendor.o((...args) => $options.navigateToMyLogin && $options.navigateToMyLogin(...args)),
    d: common_vendor.o((...args) => $options.navigateToMyLogin && $options.navigateToMyLogin(...args)),
    e: common_vendor.o((...args) => $options.navigateToMyLogin && $options.navigateToMyLogin(...args)),
    f: common_assets._imports_1$2,
    g: common_vendor.o((...args) => $options.navigateToMyCollection && $options.navigateToMyCollection(...args)),
    h: common_vendor.o((...args) => $options.navigateToMyCollection && $options.navigateToMyCollection(...args)),
    i: common_assets._imports_2$2,
    j: common_assets._imports_3$1,
    k: common_vendor.o((...args) => $options.navigateToReset && $options.navigateToReset(...args)),
    l: common_vendor.o((...args) => $options.navigateToReset && $options.navigateToReset(...args)),
    m: common_assets._imports_4,
    n: common_vendor.o((...args) => $options.navigateToContact && $options.navigateToContact(...args)),
    o: common_vendor.o((...args) => $options.navigateToContact && $options.navigateToContact(...args)),
    p: common_assets._imports_5
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
