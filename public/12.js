(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/account/wishlist.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/account/wishlist.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'khod',
  middleware: ['auth'],
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Reviews',
    titleTemplate: '%s | Khodgi',
    content: ''
  },
  data: function data() {
    return {
      dialog: false,
      snackbar: false,
      headers: [{
        text: '#',
        value: 'id'
      }, {
        text: 'Thumbnail',
        align: 'start',
        sortable: false,
        value: 'image1'
      }, {
        text: 'Product',
        value: 'name'
      }, {
        text: 'Actions',
        value: 'action',
        sortable: false
      }],
      wishlist: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        name: '',
        image1: '',
        slug: ''
      },
      defaultItem: {
        id: '',
        name: '',
        image1: '',
        slug: ''
      },
      imgBase: window.location.origin + "/storage"
    };
  },
  //     filters: {
  //       formatDate: function (value) {
  //           return moment(value).format('MMMM D, YYYY');
  //       }
  //   },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      // Add a request interceptor
      axios.interceptors.request.use(function (config) {
        _this.loading = true;
        return config;
      }, function (error) {
        _this.loading = false;
        return Promise.reject(error);
      }); // Add a response interceptor

      axios.interceptors.response.use(function (response) {
        _this.loading = false;
        return response;
      }, function (error) {
        _this.loading = false;
        return Promise.reject(error);
      });
      axios.get('/api/wishlist').then(function (res) {
        _this.wishlist = res.data.wishlist;
      })["catch"](function (err) {//----
      });
    },
    deleteItem: function deleteItem(item) {
      var _this2 = this;

      var index = this.wishlist.indexOf(item);
      axios["delete"]('/api/wishlist/' + item.id).then(function (res) {
        _this2.$router.replace("/products/".concat(item.slug));
      })["catch"](function (err) {
        return console.log(err.response);
      });
    }
  },
  computed: {
    currentUrl: function currentUrl() {
      return window.location.origin;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/account/wishlist.vue?vue&type=template&id=249e0634&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/account/wishlist.vue?vue&type=template&id=249e0634& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: { headers: _vm.headers, items: _vm.wishlist, "sort-by": "id" },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-toolbar",
                  { attrs: { flat: "", color: "white" } },
                  [
                    _c("v-toolbar-title", [_vm._v("My reviews")]),
                    _vm._v(" "),
                    _c("v-divider", {
                      staticClass: "mx-4",
                      attrs: { inset: "", vertical: "" }
                    }),
                    _vm._v(" "),
                    _c("v-spacer")
                  ],
                  1
                )
              ]
            },
            proxy: true
          },
          {
            key: "item.action",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-tooltip",
                  {
                    attrs: { bottom: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            return [
                              _c(
                                "v-btn",
                                _vm._g({ attrs: { icon: "" } }, on),
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      attrs: { small: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteItem(item)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                        mdi-cart\n                    "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [_vm._v(" "), _c("span", [_vm._v("Remove and Add to cart")])]
                ),
                _vm._v(" "),
                _c(
                  "v-tooltip",
                  {
                    attrs: { bottom: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            return [
                              _c(
                                "v-btn",
                                _vm._g(
                                  {
                                    attrs: {
                                      icon: "",
                                      to: "/products/" + item.slug
                                    }
                                  },
                                  on
                                ),
                                [
                                  _c("v-icon", { attrs: { small: "" } }, [
                                    _vm._v("\n            mdi-eye\n        ")
                                  ])
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [_vm._v(" "), _c("span", [_vm._v("View product details")])]
                )
              ]
            }
          },
          {
            key: "item.image1",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-list-item-avatar",
                  {
                    staticClass: "mr-2",
                    attrs: { horizontal: "", size: "65" }
                  },
                  [
                    _c("v-img", {
                      attrs: {
                        src: _vm.currentUrl + "/storage/" + item.image1,
                        contain: ""
                      }
                    })
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "item.rating",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("v-rating", {
                  attrs: {
                    "background-color": "grey",
                    color: "yellow accent-4",
                    dense: "",
                    readonly: "",
                    size: "18"
                  },
                  model: {
                    value: item.rating,
                    callback: function($$v) {
                      _vm.$set(item, "rating", $$v)
                    },
                    expression: "item.rating"
                  }
                })
              ]
            }
          },
          {
            key: "item.created_at",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("span", [_vm._v(_vm._s(_vm._f("date")(item.created_at)))])
              ]
            }
          },
          {
            key: "no-data",
            fn: function() {
              return [
                _c(
                  "v-btn",
                  {
                    attrs: { color: "primary" },
                    on: { click: _vm.initialize }
                  },
                  [_vm._v("Reset")]
                )
              ]
            },
            proxy: true
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/account/wishlist.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/account/wishlist.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wishlist_vue_vue_type_template_id_249e0634___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.vue?vue&type=template&id=249e0634& */ "./resources/js/views/account/wishlist.vue?vue&type=template&id=249e0634&");
/* harmony import */ var _wishlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlist.vue?vue&type=script&lang=js& */ "./resources/js/views/account/wishlist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _wishlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wishlist_vue_vue_type_template_id_249e0634___WEBPACK_IMPORTED_MODULE_0__["render"],
  _wishlist_vue_vue_type_template_id_249e0634___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/account/wishlist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/account/wishlist.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/account/wishlist.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wishlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./wishlist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/account/wishlist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wishlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/account/wishlist.vue?vue&type=template&id=249e0634&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/account/wishlist.vue?vue&type=template&id=249e0634& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_wishlist_vue_vue_type_template_id_249e0634___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./wishlist.vue?vue&type=template&id=249e0634& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/account/wishlist.vue?vue&type=template&id=249e0634&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_wishlist_vue_vue_type_template_id_249e0634___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_wishlist_vue_vue_type_template_id_249e0634___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);