"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    navigateToPage(url) {
      common_vendor.index.navigateTo({
        url
        // 跳转到指定页面的路径
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.o(($event) => $options.navigateToPage("/pages/Baike/Baike")),
    c: common_assets._imports_1,
    d: common_vendor.o(($event) => $options.navigateToPage("/pages/Wenhua/Wenhua")),
    e: common_assets._imports_2,
    f: common_vendor.o(($event) => $options.navigateToPage("/pages/Jingdian/Jingdian")),
    g: common_assets._imports_3,
    h: common_vendor.o(($event) => $options.navigateToPage("/pages/Lishi/Lishi"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
