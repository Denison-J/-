if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _imports_0$8 = "/static/tabbar/制作咖啡历史海报 (4).png";
  const _imports_1$7 = "/static/tabbar/制作咖啡历史海报 (1).png";
  const _imports_2$5 = "/static/tabbar/制作咖啡历史海报 (5).png";
  const _imports_3$4 = "/static/tabbar/制作咖啡历史海报.png";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$i = {
    data() {
      return {};
    },
    methods: {
      navigateToPage(url) {
        uni.navigateTo({
          url
          // 跳转到指定页面的路径
        });
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("view", { class: "grid" }, [
          vue.createElementVNode("image", {
            class: "grid-item",
            src: _imports_0$8,
            onClick: _cache[0] || (_cache[0] = ($event) => $options.navigateToPage("/pages/Baike/Baike"))
          }),
          vue.createElementVNode("image", {
            class: "grid-item",
            src: _imports_1$7,
            onClick: _cache[1] || (_cache[1] = ($event) => $options.navigateToPage("/pages/Wenhua/Wenhua"))
          }),
          vue.createElementVNode("image", {
            class: "grid-item",
            src: _imports_2$5,
            onClick: _cache[2] || (_cache[2] = ($event) => $options.navigateToPage("/pages/Jingdian/Jingdian"))
          }),
          vue.createElementVNode("image", {
            class: "grid-item",
            src: _imports_3$4,
            onClick: _cache[3] || (_cache[3] = ($event) => $options.navigateToPage("/pages/Lishi/Lishi"))
          })
        ])
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/index/index.vue"]]);
  const _imports_0$7 = "/static/tabbar/屏幕截图 2025-07-11 160249.png";
  const _imports_1$6 = "/static/tabbar/屏幕截图 2025-06-15 165557.png";
  const _imports_2$4 = "/static/tabbar/coffee-beans_15451246.png";
  const _sfc_main$h = {
    data() {
      return {};
    },
    onLoad() {
    },
    methods: {
      navigateToRead() {
        uni.navigateTo({
          url: "/pages/read/read"
          // 跳转到读物页面的路径
        });
      },
      navigateToFavorites() {
        uni.navigateTo({
          url: "/pages/favorites/favorites"
          // 跳转到收藏页面的路径
        });
      },
      navigateToPage() {
        uni.navigateTo({
          url: "/pages/detection/detection"
          // 替换为你的目标页面路径
        });
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "title1" }, " Hi，欢迎来到 "),
      vue.createElementVNode("view", { class: "title2" }, " 豆识CoffeeBean "),
      vue.createElementVNode("view", { class: "camera" }, [
        vue.createElementVNode("image", {
          src: _imports_0$7,
          onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateToPage && $options.navigateToPage(...args))
        })
      ]),
      vue.createElementVNode("view", { class: "box" }, [
        vue.createElementVNode("view", {
          class: "section",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.navigateToRead && $options.navigateToRead(...args))
        }, [
          vue.createElementVNode("text", { class: "title" }, "读物"),
          vue.createElementVNode("text", { class: "subtitle" }, "在线读，一起学"),
          vue.createElementVNode("image", {
            class: "icon",
            src: _imports_1$6
          })
        ]),
        vue.createElementVNode("view", { class: "divider" }),
        vue.createElementVNode("view", {
          class: "section",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.navigateToFavorites && $options.navigateToFavorites(...args))
        }, [
          vue.createElementVNode("text", { class: "title" }, "收藏"),
          vue.createElementVNode("text", { class: "subtitle" }, "个人收藏"),
          vue.createElementVNode("image", {
            class: "icon",
            src: _imports_2$4
          })
        ])
      ])
    ]);
  }
  const PagesBeanIdBeanId = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/bean id/bean id.vue"]]);
  const _imports_0$6 = "/static/tabbar/屏幕截图 2025-06-15 210128.png";
  const _imports_1$5 = "/static/tabbar/屏幕截图 2025-06-15 210807.png";
  const _imports_2$3 = "/static/tabbar/屏幕截图 2025-06-15 210707.png";
  const _imports_3$3 = "/static/tabbar/屏幕截图 2025-06-15 210755.png";
  const _imports_4$1 = "/static/tabbar/屏幕截图 2025-06-15 210740.png";
  const _sfc_main$g = {
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
        uni.navigateTo({
          url: "/pages/my-contact us/my-contact us"
        });
      },
      navigateToMyCollection() {
        uni.navigateTo({
          url: "/pages/my-collection/my-collection"
        });
      },
      navigateToChange() {
        uni.navigateTo({
          url: "/pages/Change/Change"
        });
      },
      navigateToRecord() {
        uni.navigateTo({
          url: "/pages/id record/id record"
        });
      },
      navigateToMyLogin() {
        uni.navigateTo({
          url: "/pages/my-login/my-login"
        });
      },
      navigateToNot() {
        this.logout();
      },
      navigateToReset() {
        uni.navigateTo({
          url: "/pages/my-reset password/my-reset password"
        });
      },
      logout() {
        this.isAuthenticated = false;
        uni.showToast({
          title: "已退出登录",
          icon: "none"
        });
      },
      // 新增方法：更新登录状态
      updateAuthStatus() {
        const userInfo = uni.getStorageSync("userInfo");
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
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "my" }, [
      vue.createCommentVNode(" 头部 "),
      vue.createElementVNode("view", { class: "my-header" }, [
        vue.createElementVNode("view", { class: "header-main" }, [
          vue.createElementVNode("image", {
            class: "logo-img",
            src: $data.isAuthenticated ? $data.user.avatar : "/static/tabbar/微信图片_20250711202407.jpg",
            mode: ""
          }, null, 8, ["src"])
        ]),
        !$data.isAuthenticated ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "box0",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.navigateToMyLogin && $options.navigateToMyLogin(...args))
        }, [
          vue.createElementVNode("view", { class: "name0" }, "点击登录"),
          vue.createElementVNode("view", { class: "id0" }, "未登录")
        ])) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "box"
        }, [
          vue.createElementVNode(
            "view",
            { class: "name" },
            vue.toDisplayString($data.user.username),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "id" },
            vue.toDisplayString($data.user.id),
            1
            /* TEXT */
          )
        ])),
        !$data.isAuthenticated ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "arrow1",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.navigateToMyLogin && $options.navigateToMyLogin(...args))
        }, " > ")) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 3,
          class: "arrow",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.navigateToChange && $options.navigateToChange(...args))
        }, " > "))
      ]),
      vue.createCommentVNode(" 内容列表 "),
      $data.isAuthenticated ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "my-content"
      }, [
        vue.createElementVNode("view", { class: "my-content-item" }, [
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_0$6
          }),
          vue.createElementVNode("view", {
            class: "text",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.navigateToMyCollection && $options.navigateToMyCollection(...args))
          }, "我的收藏"),
          vue.createElementVNode("view", {
            class: "arrow2",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.navigateToMyCollection && $options.navigateToMyCollection(...args))
          }, " > ")
        ]),
        vue.createElementVNode("view", { class: "my-content-item" }, [
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_1$5
          }),
          vue.createElementVNode("view", {
            class: "text",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.navigateToRecord && $options.navigateToRecord(...args))
          }, "识别历史"),
          vue.createElementVNode("view", {
            class: "arrow2",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.navigateToRecord && $options.navigateToRecord(...args))
          }, " > ")
        ]),
        vue.createElementVNode("view", { class: "my-content-item" }, [
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_2$3
          }),
          vue.createElementVNode("view", {
            class: "text",
            onClick: _cache[7] || (_cache[7] = (...args) => $options.navigateToReset && $options.navigateToReset(...args))
          }, "修改密码"),
          vue.createElementVNode("view", {
            class: "arrow2",
            onClick: _cache[8] || (_cache[8] = (...args) => $options.navigateToReset && $options.navigateToReset(...args))
          }, " > ")
        ]),
        vue.createElementVNode("view", { class: "my-content-item" }, [
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_3$3
          }),
          vue.createElementVNode("view", {
            class: "text",
            onClick: _cache[9] || (_cache[9] = (...args) => $options.navigateToContact && $options.navigateToContact(...args))
          }, "联系我们"),
          vue.createElementVNode("view", {
            class: "arrow2",
            onClick: _cache[10] || (_cache[10] = (...args) => $options.navigateToContact && $options.navigateToContact(...args))
          }, " > ")
        ]),
        vue.createElementVNode("view", { class: "my-content-item" }, [
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_4$1
          }),
          vue.createElementVNode("view", {
            class: "text",
            onClick: _cache[11] || (_cache[11] = (...args) => $options.navigateToNot && $options.navigateToNot(...args))
          }, "退出登录"),
          vue.createElementVNode("view", {
            class: "arrow2",
            onClick: _cache[12] || (_cache[12] = (...args) => $options.navigateToNot && $options.navigateToNot(...args))
          }, " > ")
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/my/my.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main$f = {
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
        formatAppLog("log", "at pages/detection/detection.vue:40", "前往更多知识");
      },
      goRecognitionHistory() {
        formatAppLog("log", "at pages/detection/detection.vue:44", "前往识别历史");
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "card" }, [
        vue.createElementVNode("text", { class: "card-title" }, "象耳豆"),
        vue.createElementVNode("view", { class: "card-content" }, [
          vue.createElementVNode("image", {
            class: "example-img",
            src: $data.exampleImg
          }, null, 8, ["src"]),
          vue.createElementVNode("view", { class: "text-group" }, [
            vue.createElementVNode("text", { class: "text-item" }, "象耳豆为xx"),
            vue.createElementVNode("text", { class: "text-item" }, "现象"),
            vue.createElementVNode("text", { class: "text-item" }, "原因")
          ])
        ])
      ]),
      vue.createCommentVNode(" 底部按钮区域 "),
      vue.createElementVNode("view", { class: "bottom-bar" }, [
        vue.createElementVNode("view", {
          class: "bar-item1",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goMoreKnowledge && $options.goMoreKnowledge(...args))
        }, [
          vue.createElementVNode("image", {
            class: "bar-icon",
            src: $data.moreKnowledgeIcon,
            mode: "widthFix"
          }, null, 8, ["src"]),
          vue.createElementVNode("text", { class: "bar-text" }, "更多知识")
        ]),
        vue.createElementVNode("view", {
          class: "bar-item2",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.goRecognitionHistory && $options.goRecognitionHistory(...args))
        }, [
          vue.createElementVNode("image", {
            class: "bar-icon",
            src: $data.recognitionHistoryIcon,
            mode: "widthFix"
          }, null, 8, ["src"]),
          vue.createElementVNode("text", { class: "bar-text" }, "识别历史")
        ])
      ])
    ]);
  }
  const PagesDetectionDetection = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-21fb94f6"], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/detection/detection.vue"]]);
  const _sfc_main$e = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesReadRead = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/read/read.vue"]]);
  const _sfc_main$d = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" });
  }
  const PagesBaikeBaike = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/Baike/Baike.vue"]]);
  const _sfc_main$c = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" });
  }
  const PagesWenhuaWenhua = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/Wenhua/Wenhua.vue"]]);
  const _sfc_main$b = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" });
  }
  const PagesLishiLishi = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/Lishi/Lishi.vue"]]);
  const _imports_0$5 = "/static/tabbar/18.png";
  const _imports_1$4 = "/static/tabbar/微信图片_20250711202407.jpg";
  const _imports_2$2 = "/static/tabbar/17.png";
  const _sfc_main$a = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "coffee-book-read" }, [
      vue.createCommentVNode(" 搜索框 "),
      vue.createElementVNode("view", { class: "search-box" }, [
        vue.createElementVNode("image", {
          class: "search-icon",
          src: _imports_0$5
        }),
        vue.createElementVNode("input", {
          type: "text",
          class: "search-input"
        })
      ]),
      vue.createCommentVNode(" 用户信息及书架区域 "),
      vue.createElementVNode("view", { class: "user-section" }, [
        vue.createElementVNode("view", { class: "box" }, [
          vue.createElementVNode("view", { class: "user-info" }, [
            vue.createElementVNode("image", {
              class: "user-avatar",
              src: _imports_1$4
            }),
            vue.createElementVNode("text", { class: "user-name" }, "名刀司命")
          ]),
          vue.createElementVNode("image", {
            class: "shelf-img",
            src: _imports_2$2
          })
        ]),
        vue.createElementVNode("view", { class: "book-shelf" }, [
          vue.createElementVNode("view", { class: "shelf-text" }, [
            vue.createElementVNode("text", { class: "shelf-title" }, "书架"),
            vue.createElementVNode("text", { class: "arrow-right" }, ">")
          ])
        ])
      ]),
      vue.createCommentVNode(" 书籍列表项 "),
      vue.createElementVNode("view", { class: "book-item" }, [
        vue.createElementVNode("image", {
          class: "book-cover",
          src: _imports_2$2
        }),
        vue.createElementVNode("view", { class: "book-info" }, [
          vue.createElementVNode("text", { class: "book-title" }, "咖啡豆书"),
          vue.createElementVNode("text", { class: "book-author" }, "作者：大哥"),
          vue.createElementVNode("text", { class: "book-category" }, "历史")
        ])
      ])
    ]);
  }
  const PagesJingdianJingdian = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-4a214e9d"], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/Jingdian/Jingdian.vue"]]);
  const _imports_0$4 = "/static/tabbar/2.png";
  const _imports_1$3 = "/static/tabbar/1.png";
  const _imports_0$3 = "/static/tabbar/3.jpg";
  const _imports_0$2 = "/static/tabbar/微信图片_20250714105154.png";
  const _sfc_main$9 = {
    data() {
      return {};
    },
    onNavigationBarButtonTap(e) {
      if (e.float === "right") {
        uni.navigateTo({
          url: "/pages/search/search"
        });
      }
    },
    onNavigationBarSearchInputChanged(e) {
      formatAppLog("log", "at pages/my-collection/my-collection.vue:43", e);
    },
    methods: {
      navigateToMy(url) {
        uni.switchTab({
          url
        });
      },
      search() {
        if (this.keyword === "") {
          return uni.showToast({
            title: "关键词不能为空",
            icon: "none"
          });
        } else {
          uni.navigateTo({
            url: "/pages/search/search" + this.keyword
          });
        }
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "box1" }, [
        vue.createElementVNode("image", {
          class: "exit",
          src: _imports_0$4,
          onClick: _cache[0] || (_cache[0] = ($event) => $options.navigateToMy("/pages/my/my"))
        }),
        vue.createElementVNode("view", { class: "title" }, "我的收藏"),
        vue.createElementVNode("image", {
          class: "share",
          src: _imports_1$3
        })
      ]),
      vue.createElementVNode("view", { class: "search" }, [
        vue.createElementVNode("input", {
          class: "inp",
          type: "text",
          placeholder: "搜索",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.search && $options.search(...args))
        })
      ]),
      vue.createElementVNode("view", { class: "box2" }, [
        vue.createElementVNode("view", { class: "name1" }, "象耳豆"),
        vue.createElementVNode("image", {
          class: "img1",
          src: _imports_0$3
        }),
        vue.createElementVNode("view", { class: "data1" }, "2025/7/13")
      ]),
      vue.createElementVNode("view", { class: "box3" }, [
        vue.createElementVNode("view", { class: "name2" }, "咖啡豆"),
        vue.createElementVNode("image", {
          class: "img2",
          src: _imports_0$2
        }),
        vue.createElementVNode("view", { class: "data2" }, "2024/8/15")
      ])
    ]);
  }
  const PagesMyCollectionMyCollection = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/my-collection/my-collection.vue"]]);
  const _imports_0$1 = "/static/tabbar/4.png";
  const _imports_1$2 = "/static/tabbar/7.png";
  const _imports_2$1 = "/static/tabbar/8.png";
  const _imports_3$2 = "/static/tabbar/5.png";
  const _imports_4 = "/static/tabbar/6.png";
  const _imports_5 = "/static/tabbar/9.png";
  const _sfc_main$8 = {
    data() {
      return {
        phone: "",
        // 用户输入的手机号
        pwd: ""
        // 用户输入的密码
      };
    },
    methods: {
      // 登录方法
      login() {
        if (this.phone === "12345678901" && this.pwd === "123456") {
          uni.setStorageSync("userInfo", {
            avatar: "/static/tabbar/微信图片_20250711202407.jpg",
            username: "名刀司命",
            id: "202401234234",
            phone: this.phone
          });
          uni.showToast({
            title: "登录成功",
            icon: "success",
            duration: 2e3
          });
          uni.reLaunch({
            url: "/pages/my/my"
            // 假设“我的”页面路径为 /pages/my/my
          });
        } else {
          uni.showToast({
            title: "账号或密码错误",
            icon: "none",
            duration: 2e3
          });
        }
      },
      // 注册方法（这里只是简单跳转，具体逻辑需要根据需求实现）
      reg() {
        uni.navigateTo({
          url: "/pages/Register/Register"
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "login-bg" }, [
        vue.createElementVNode("image", {
          class: "img1",
          src: _imports_0$1
        }),
        vue.createElementVNode("view", { class: "t-login" }, [
          vue.createElementVNode("form", { class: "cl" }, [
            vue.createElementVNode("view", { class: "t-a" }, [
              vue.createElementVNode("image", { src: _imports_1$2 }),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "number",
                  name: "phone",
                  placeholder: "请输入账号",
                  maxlength: "11",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.phone = $event)
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.phone]
              ])
            ]),
            vue.createElementVNode("view", { class: "t-a" }, [
              vue.createElementVNode("image", { src: _imports_2$1 }),
              vue.withDirectives(vue.createElementVNode(
                "input",
                {
                  type: "password",
                  name: "code",
                  maxlength: "6",
                  placeholder: "请输入密码",
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.pwd = $event)
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vModelText, $data.pwd]
              ])
            ]),
            vue.createElementVNode("button", {
              onClick: _cache[2] || (_cache[2] = (...args) => $options.login && $options.login(...args))
            }, "登 录"),
            vue.createElementVNode("view", { class: "t-c" }, [
              vue.createElementVNode("text", {
                class: "t-c-txt",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.reg && $options.reg(...args))
              }, "注册"),
              vue.createElementVNode("text", null, "忘记密码")
            ])
          ]),
          vue.createElementVNode("view", { class: "box" }, [
            vue.createElementVNode("image", {
              class: "wx",
              src: _imports_3$2
            }),
            vue.createElementVNode("image", {
              class: "dh",
              src: _imports_4
            })
          ]),
          vue.createElementVNode("image", {
            class: "yinsi",
            src: _imports_5
          })
        ])
      ])
    ]);
  }
  const PagesMyLoginMyLogin = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-f8c771f0"], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/my-login/my-login.vue"]]);
  const _imports_1$1 = "/static/tabbar/微信图片_20250714122519.png";
  const _imports_2 = "/static/tabbar/微信图片_20250714122551.png";
  const _imports_3$1 = "/static/tabbar/微信图片_20250714122600.png";
  const _sfc_main$7 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("image", {
        class: "img1",
        src: _imports_0$2
      }),
      vue.createElementVNode("view", { class: "title1" }, "豆识coffee"),
      vue.createElementVNode("view", { class: "text1" }, "让每次识豆都充满智慧与快乐"),
      vue.createElementVNode("view", { class: "text2" }, "我们致力于为用户提供智能，准确的识豆体验"),
      vue.createElementVNode("view", { class: "box2" }, [
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_1$1
          }),
          vue.createElementVNode("view", { class: "word1" }, [
            vue.createElementVNode("view", { class: "item-title" }, "联系客服"),
            vue.createElementVNode("view", { class: "item-text" }, "为您提供专业的服务")
          ])
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_2
          }),
          vue.createElementVNode("view", { class: "word" }, [
            vue.createElementVNode("view", { class: "item-title" }, "当前版本"),
            vue.createElementVNode("view", { class: "item-text" }, "Version 1.0.0")
          ])
        ]),
        vue.createElementVNode("view", { class: "item" }, [
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_3$1
          }),
          vue.createElementVNode("view", { class: "word" }, [
            vue.createElementVNode("view", { class: "item-title" }, "意见反馈"),
            vue.createElementVNode("view", { class: "item-text" }, "帮助我们变得更好")
          ])
        ])
      ])
    ]);
  }
  const PagesMyContactUsMyContactUs = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/my-contact us/my-contact us.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {};
    },
    methods: {
      cancel() {
        uni.switchTab({
          url: "/pages/my/my"
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createCommentVNode(" 头部区域 "),
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("view", {
          class: "cancel-btn",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.cancel && $options.cancel(...args))
        }, "取消"),
        vue.createElementVNode("view", { class: "title" }, "修改密码"),
        vue.createElementVNode("view", {
          class: "confirm-btn",
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.confirm && _ctx.confirm(...args))
        }, "确定")
      ]),
      vue.createCommentVNode(" 内容区域 "),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createCommentVNode(" 账号信息 "),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "账号"),
          vue.createElementVNode("view", { class: "input-wrapper" }, [
            vue.createElementVNode("input", {
              type: "text",
              value: "202402150899",
              disabled: ""
            })
          ])
        ]),
        vue.createCommentVNode(" 旧密码 "),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "旧密码"),
          vue.createElementVNode("view", { class: "input-wrapper" }, [
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "password",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.oldPassword = $event),
                placeholder: "请填写旧密码"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, _ctx.oldPassword]
            ])
          ])
        ]),
        vue.createCommentVNode(" 新密码 "),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "新密码"),
          vue.createElementVNode("view", { class: "input-wrapper" }, [
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "password",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.newPassword = $event),
                placeholder: "请填写新密码"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, _ctx.newPassword]
            ])
          ])
        ]),
        vue.createCommentVNode(" 确认密码 "),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "确认密码"),
          vue.createElementVNode("view", { class: "input-wrapper" }, [
            vue.withDirectives(vue.createElementVNode(
              "input",
              {
                type: "password",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.confirmPassword = $event),
                placeholder: "请再次填写新密码"
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vModelText, _ctx.confirmPassword]
            ])
          ])
        ]),
        vue.createCommentVNode(" 忘记密码链接 "),
        vue.createElementVNode("view", {
          class: "forgot-password",
          onClick: _cache[5] || (_cache[5] = (...args) => _ctx.forgotPassword && _ctx.forgotPassword(...args))
        }, "忘记旧密码？")
      ])
    ]);
  }
  const PagesMyResetPasswordMyResetPassword = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-fc49f28e"], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/my-reset password/my-reset password.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {};
    },
    onLoad(e) {
      console(e);
    },
    methods: {}
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "box1" }, [
        vue.createElementVNode("image", {
          class: "exit",
          src: _imports_0$4,
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.navigateToMy("/pages/my/my"))
        }),
        vue.createElementVNode("view", { class: "title" }, "我的收藏"),
        vue.createElementVNode("image", {
          class: "share",
          src: _imports_1$3
        })
      ]),
      vue.createElementVNode("view", { class: "search" }, [
        vue.createElementVNode("input", {
          class: "inp",
          type: "text",
          placeholder: "搜索",
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.search && _ctx.search(...args))
        })
      ])
    ]);
  }
  const PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/search/search.vue"]]);
  const _imports_0 = "/static/tabbar/14.png";
  const _imports_1 = "/static/tabbar/13.png";
  const _imports_3 = "/static/tabbar/15.png";
  const _sfc_main$4 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("image", {
          class: "img",
          src: _imports_0
        }),
        vue.createElementVNode("text", { class: "title" }, "豆识助手")
      ]),
      vue.createElementVNode("view", { class: "chat-content" }, [
        vue.createElementVNode("view", { class: "message-item other" }, [
          vue.createElementVNode("image", {
            class: "avatar other-avatar",
            src: _imports_1
          }),
          vue.createElementVNode("view", { class: "message-bubble other-bubble" }, [
            vue.createElementVNode("text", null, "你好！请问有什么可以帮助您的吗？")
          ])
        ]),
        vue.createElementVNode("view", { class: "message-item self" }, [
          vue.createElementVNode("view", { class: "message-bubble self-bubble" }, [
            vue.createElementVNode("text", null, "好的，收到")
          ]),
          vue.createElementVNode("image", {
            class: "avatar self-avatar",
            src: _imports_1$4
          })
        ])
      ]),
      vue.createCommentVNode(" 输入区域 "),
      vue.createElementVNode("view", { class: "input-area" }, [
        vue.createElementVNode("input", {
          class: "input-box",
          type: "text",
          placeholder: "请输入你的问题"
        }),
        vue.createElementVNode("image", {
          class: "send-btn",
          src: _imports_3
        })
      ])
    ]);
  }
  const PagesTalkTalk = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/talk/talk.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "box1" }, [
        vue.createElementVNode("view", { class: "image-container" }, [
          vue.createElementVNode("view", { class: "data1" }, "2025年x月x日15：30"),
          vue.createElementVNode("image", {
            class: "img1",
            src: _imports_0$3
          })
        ]),
        vue.createElementVNode("view", { class: "text-group" }, [
          vue.createElementVNode("view", { class: "result" }, "识别结果："),
          vue.createElementVNode("view", { class: "name1" }, "XX病")
        ])
      ])
    ]);
  }
  const PagesIdRecordIdRecord = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/id record/id record.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    },
    methods: {
      NavigateToBack() {
        uni.switchTab({
          url: "/pages/my/my"
        });
      },
      handleOuterClick(e) {
        uni.createSelectorQuery().in(this).select(".container").boundingClientRect((rect) => {
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
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "my",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.handleOuterClick && $options.handleOuterClick(...args))
    }, [
      vue.createCommentVNode(" 头部区域 "),
      vue.createElementVNode("view", {
        class: "my-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.NavigateToBack && $options.NavigateToBack(...args))
      }, [
        vue.createElementVNode("view", { class: "header-main" }, [
          vue.createElementVNode("image", {
            class: "logo-img",
            src: _imports_1$4
          })
        ]),
        vue.createElementVNode("view", { class: "box" }, [
          vue.createElementVNode("view", { class: "name" }, "名刀司命"),
          vue.createElementVNode("view", { class: "id" }, "202401234234")
        ]),
        vue.createElementVNode("view", { class: "arrow" }, " > ")
      ]),
      vue.createCommentVNode(" 内容区域 "),
      vue.createElementVNode("view", { class: "container" }, [
        vue.createElementVNode("view", { class: "user-info" }, [
          vue.createElementVNode("image", {
            class: "avatar",
            src: _imports_1$4
          }),
          vue.createElementVNode("view", { class: "user-details" }, [
            vue.createElementVNode("input", {
              class: "inp",
              type: "text",
              placeholder: "请输入新的昵称"
            }),
            vue.createElementVNode("button", { class: "save-button" }, "保存")
          ])
        ]),
        vue.createElementVNode("view", { class: "agreement" }, [
          vue.createElementVNode("checkbox"),
          vue.createElementVNode("text", null, "您已阅读并同意"),
          vue.createElementVNode("navigator", {
            url: "/pages/user-agreement/user-agreement",
            class: "agreement-link"
          }, "《用户协议》")
        ])
      ])
    ]);
  }
  const PagesChangeChange = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/Change/Change.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        username: "帅哥"
      };
    },
    methods: {
      handleUsernameInput(e) {
        this.username = e.detail.value;
        formatAppLog("log", "at pages/Register/Register.vue:93", "当前的输入是", this.username);
      },
      async formSubmit() {
        const registerData = {
          username: this.username,
          // 对应 DTO 的 username 字段
          password: this.password,
          // 对应 DTO 的 password 字段
          email: this.email,
          // 对应 DTO 的 email 字段
          phone: this.phone
          // 对应 DTO 的 phone 字段（可选）
        };
        try {
          const res = await uni.request({
            url: "https://你的后端域名/user/register",
            method: "POST",
            header: { "Content-Type": "application/json" },
            data: registerData
            // 传递符合 DTO 格式的数据
          });
          if (res[1].data.code === 200) {
            uni.showToast({ title: "注册成功" });
          }
        } catch (error) {
          uni.showToast({ title: "请求失败", icon: "none" });
        }
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 注册页面 "),
        vue.createElementVNode("view", { class: "register-container" }, [
          vue.createCommentVNode(" 标题区域 "),
          vue.createElementVNode("view", { class: "title-container" }, [
            vue.createElementVNode("text", { class: "title" }, "账号注册"),
            vue.createElementVNode("text", { class: "subtitle" }, "创建新账号，开启全新体验")
          ]),
          vue.createCommentVNode(" 表单区域 "),
          vue.createElementVNode("form", {
            class: "register-form",
            bindsubmit: "formSubmit",
            bindreset: "formReset"
          }, [
            vue.createCommentVNode(" 用户名输入 "),
            vue.createElementVNode("view", { class: "form-group" }, [
              vue.createElementVNode("view", { class: "input-wrapper" }, [
                vue.createElementVNode("icon", {
                  type: "user",
                  size: "20",
                  class: "input-icon"
                }),
                vue.createElementVNode("input", {
                  type: "text",
                  name: "username",
                  placeholder: "请输入用户名",
                  "placeholder-class": "placeholder",
                  bindinput: "handleUsernameInput",
                  value: ""
                })
              ])
            ]),
            vue.createCommentVNode(" 密码输入 "),
            vue.createElementVNode("view", { class: "form-group" }, [
              vue.createElementVNode("view", { class: "input-wrapper" }, [
                vue.createElementVNode("icon", {
                  type: "lock",
                  size: "20",
                  class: "input-icon"
                }),
                vue.createElementVNode("input", {
                  name: "password",
                  placeholder: "请设置密码",
                  "placeholder-class": "placeholder",
                  bindinput: "handlePasswordInput",
                  value: ""
                })
              ])
            ]),
            vue.createCommentVNode(" 确认密码输入 "),
            vue.createElementVNode("view", { class: "form-group" }, [
              vue.createElementVNode("view", { class: "input-wrapper" }, [
                vue.createElementVNode("icon", {
                  type: "lock",
                  size: "20",
                  class: "input-icon"
                }),
                vue.createElementVNode("input", {
                  name: "confirmPassword",
                  placeholder: "请确认密码",
                  "placeholder-class": "placeholder",
                  bindinput: "handleConfirmPasswordInput",
                  value: ""
                })
              ])
            ]),
            vue.createCommentVNode(" 同意协议 "),
            vue.createElementVNode("view", { class: "agreement" }, [
              vue.createElementVNode("checkbox-group", { name: "agreement" }, [
                vue.createElementVNode("label", { class: "checkbox-label" }, [
                  vue.createElementVNode("checkbox", {
                    value: "agree",
                    checked: "{{agree}}",
                    bindchange: "handleAgreementChange"
                  }),
                  vue.createElementVNode("text", null, "我已阅读并同意"),
                  vue.createElementVNode("text", {
                    class: "agreement-link",
                    bindtap: "navigateToAgreement"
                  }, "《用户协议》"),
                  vue.createElementVNode("text", null, "和"),
                  vue.createElementVNode("text", {
                    class: "agreement-link",
                    bindtap: "navigateToPrivacy"
                  }, "《隐私政策》")
                ])
              ])
            ]),
            vue.createCommentVNode(" 注册按钮 "),
            vue.createElementVNode("button", {
              formType: "submit",
              class: "register-btn"
            }, " 注册 "),
            vue.createCommentVNode(" 已有账号 "),
            vue.createElementVNode("view", { class: "login-link" }, [
              vue.createElementVNode("text", null, "已有账号？"),
              vue.createElementVNode("navigator", {
                url: "/pages/my-login/my-login",
                class: "link"
              }, "立即登录")
            ])
          ])
        ])
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  const PagesRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/pages/Register/Register.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/bean id/bean id", PagesBeanIdBeanId);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/detection/detection", PagesDetectionDetection);
  __definePage("pages/read/read", PagesReadRead);
  __definePage("pages/Baike/Baike", PagesBaikeBaike);
  __definePage("pages/Wenhua/Wenhua", PagesWenhuaWenhua);
  __definePage("pages/Lishi/Lishi", PagesLishiLishi);
  __definePage("pages/Jingdian/Jingdian", PagesJingdianJingdian);
  __definePage("pages/my-collection/my-collection", PagesMyCollectionMyCollection);
  __definePage("pages/my-login/my-login", PagesMyLoginMyLogin);
  __definePage("pages/my-contact us/my-contact us", PagesMyContactUsMyContactUs);
  __definePage("pages/my-reset password/my-reset password", PagesMyResetPasswordMyResetPassword);
  __definePage("pages/search/search", PagesSearchSearch);
  __definePage("pages/talk/talk", PagesTalkTalk);
  __definePage("pages/id record/id record", PagesIdRecordIdRecord);
  __definePage("pages/Change/Change", PagesChangeChange);
  __definePage("pages/Register/Register", PagesRegisterRegister);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/邓浩键/Desktop/咖啡豆检测uniapp/咖啡豆检测/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
