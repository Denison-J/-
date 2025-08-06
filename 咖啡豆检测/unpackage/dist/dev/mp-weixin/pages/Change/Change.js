"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    NavigateToBack() {
      common_vendor.index.switchTab({
        url: "/pages/my/my"
      });
    },
    handleOuterClick(e) {
      common_vendor.index.createSelectorQuery().in(this).select(".container").boundingClientRect((rect) => {
        if (rect) {
          const { top, left, right, bottom } = rect;
          const { clientX, clientY } = e.touches[0];
          if (clientX < left || clientX > right || clientY < top || clientY > bottom) {
            this.NavigateToBack();
          }
        }
      }).exec();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_1$3,
    b: common_vendor.o((...args) => $options.NavigateToBack && $options.NavigateToBack(...args)),
    c: common_assets._imports_1$3,
    d: common_vendor.o((...args) => $options.handleOuterClick && $options.handleOuterClick(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/Change/Change.js.map
