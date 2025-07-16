"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    cancel() {
      common_vendor.index.switchTab({
        url: "/pages/my/my"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.cancel && $options.cancel(...args)),
    b: common_vendor.o((...args) => _ctx.confirm && _ctx.confirm(...args)),
    c: _ctx.oldPassword,
    d: common_vendor.o(($event) => _ctx.oldPassword = $event.detail.value),
    e: _ctx.newPassword,
    f: common_vendor.o(($event) => _ctx.newPassword = $event.detail.value),
    g: _ctx.confirmPassword,
    h: common_vendor.o(($event) => _ctx.confirmPassword = $event.detail.value),
    i: common_vendor.o((...args) => _ctx.forgotPassword && _ctx.forgotPassword(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fc49f28e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my-reset password/my-reset password.js.map
