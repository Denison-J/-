"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
  },
  onLoad() {
  },
  methods: {
    navigateToRead() {
      common_vendor.index.navigateTo({
        url: "/pages/read/read"
        // 跳转到读物页面的路径
      });
    },
    navigateToFavorites() {
      common_vendor.index.navigateTo({
        url: "/pages/favorites/favorites"
        // 跳转到收藏页面的路径
      });
    },
    navigateToPage() {
      common_vendor.index.navigateTo({
        url: "/pages/detection/detection"
        // 替换为你的目标页面路径
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$1,
    b: common_vendor.o((...args) => $options.navigateToPage && $options.navigateToPage(...args)),
    c: common_assets._imports_1$1,
    d: common_vendor.o((...args) => $options.navigateToRead && $options.navigateToRead(...args)),
    e: common_assets._imports_2$1,
    f: common_vendor.o((...args) => $options.navigateToFavorites && $options.navigateToFavorites(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/bean id/bean id.js.map
