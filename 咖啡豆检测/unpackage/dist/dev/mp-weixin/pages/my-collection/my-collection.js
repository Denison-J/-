"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
  },
  onNavigationBarButtonTap(e) {
    if (e.float === "right") {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    }
  },
  onNavigationBarSearchInputChanged(e) {
    common_vendor.index.__f__("log", "at pages/my-collection/my-collection.vue:43", e);
  },
  methods: {
    navigateToMy(url) {
      common_vendor.index.switchTab({
        url
      });
    },
    search() {
      if (this.keyword === "") {
        return common_vendor.index.showToast({
          title: "关键词不能为空",
          icon: "none"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/search/search" + this.keyword
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$4,
    b: common_vendor.o(($event) => $options.navigateToMy("/pages/my/my")),
    c: common_assets._imports_1$4,
    d: common_vendor.o((...args) => $options.search && $options.search(...args)),
    e: common_assets._imports_0$5,
    f: common_assets._imports_0$6
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my-collection/my-collection.js.map
