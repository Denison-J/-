"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$5,
    b: common_assets._imports_1$4,
    c: _ctx.phone,
    d: common_vendor.o(($event) => _ctx.phone = $event.detail.value),
    e: common_assets._imports_2$4,
    f: _ctx.pwd,
    g: common_vendor.o(($event) => _ctx.pwd = $event.detail.value),
    h: common_vendor.o(($event) => _ctx.login()),
    i: common_vendor.o(($event) => _ctx.reg()),
    j: common_assets._imports_3$2,
    k: common_assets._imports_4$1,
    l: common_assets._imports_5$1
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f8c771f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my-login/my-login.js.map
