"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      exampleImg: "/static/tabbar/20.png",
      moreKnowledgeIcon: "/static/tabbar/21.png",
      // 更多知识图标路径
      recognitionHistoryIcon: "/static/tabbar/22.png"
      // 识别历史图标路径
    };
  },
  methods: {
    goMoreKnowledge() {
      common_vendor.index.__f__("log", "at pages/detection/detection.vue:40", "前往更多知识");
    },
    goRecognitionHistory() {
      common_vendor.index.__f__("log", "at pages/detection/detection.vue:44", "前往识别历史");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.exampleImg,
    b: $data.moreKnowledgeIcon,
    c: common_vendor.o((...args) => $options.goMoreKnowledge && $options.goMoreKnowledge(...args)),
    d: $data.recognitionHistoryIcon,
    e: common_vendor.o((...args) => $options.goRecognitionHistory && $options.goRecognitionHistory(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-21fb94f6"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detection/detection.js.map
