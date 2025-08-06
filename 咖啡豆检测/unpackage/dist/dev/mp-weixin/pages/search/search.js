"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
  },
  onLoad(e) {
    console(e);
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$4,
    b: common_vendor.o(($event) => _ctx.navigateToMy("/pages/my/my")),
    c: common_assets._imports_1$4,
    d: common_vendor.o((...args) => _ctx.search && _ctx.search(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/search/search.js.map
