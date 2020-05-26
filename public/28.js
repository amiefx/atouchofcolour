(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/orders/print/Id.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/orders/print/Id.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
//var moment = require('moment');
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'print',
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Orders',
    titleTemplate: '%s | Khodgi'
  },
  data: function data() {
    return {
      order: [],
      logoImg: window.location.origin + "/storage/images/khodgilogo.png"
    };
  },
  updated: function updated() {
    setTimeout(function () {
      window.addEventListener("load", window.print());
    }, 1000);
  },
  //     filters: {
  //       formatDate: function (value) {
  //           return moment(value).format('MMMM D, YYYY');
  //       }
  //   },
  created: function created() {
    var _this = this;

    axios.get("/api/admin/orders/single-order/".concat(this.$route.params.id)).then(function (res) {
      _this.order = res.data.order;
    })["catch"](function (err) {
      console.log();
    });
  },
  methods: {
    printme: function printme(el) {
      // let restorepage = document.body.innerHTML;
      // let printcontent = document.getElementById(el).innerHTML;
      // document.body.innerHTML = restorepage;
      window.print(); // document.body.innerHTML = restorepage;
    }
  },
  filters: {
    formatDate: function formatDate(value) {
      return moment(value).format('MMMM D, YYYY');
    }
  },
  computed: {
    subtotal: function subtotal() {
      return parseFloat(this.order.total) + parseFloat(this.order.discount);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/orders/print/Id.vue?vue&type=template&id=42433618&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/orders/print/Id.vue?vue&type=template&id=42433618& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    "v-app",
    [
      _c("v-container", [
        _c("div", { attrs: { id: "printable" } }, [
          _c("div", { staticClass: "mx-2" }, [
            _c("div", { staticClass: "d-flex justify-space-between" }, [
              _c(
                "div",
                {
                  staticClass: "float-left",
                  attrs: { cols: "6", sm: "6", md: "6", lg: "6" }
                },
                [
                  _c("v-img", {
                    attrs: {
                      height: "80",
                      width: "100",
                      src: _vm.logoImg,
                      alt: "Khodgi"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "float-right",
                  attrs: { cols: "6", sm: "6", md: "6", lg: "6" }
                },
                [
                  _c("h1", { staticClass: "my-2 display-1" }, [
                    _vm._v("INVOICE")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "float-left" }, [
                    _vm._v("Invove ID:")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "float-right" }, [
                    _vm._v("#" + _vm._s(_vm.order.id))
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", {}, [
            _c(
              "div",
              { staticClass: "d-flex-inline" },
              [
                _c(
                  "v-col",
                  { attrs: { cols: "12", sm: "6", md: "6", lg: "6" } },
                  [
                    _c("h4", { staticClass: "my-2" }, [
                      _vm._v("Order Details")
                    ]),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("Telephone:")]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pl-5" }, [
                          _vm._v(_vm._s(_vm.order.customer_phone))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Email:")]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pl-5" }, [
                          _vm._v(_vm._s(_vm.order.customer_email))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Date:")]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pl-5" }, [
                          _vm._v(_vm._s(_vm._f("date")(_vm.order.created_at)))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", {}, [_vm._v("Payment Method:")]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pl-5" }, [
                          _vm._v(_vm._s(_vm.order.payment_method))
                        ])
                      ])
                    ])
                  ]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex-inline" },
            [
              _c(
                "v-col",
                {
                  staticClass: "float-left",
                  attrs: { cols: "6", sm: "6", md: "6", lg: "6" }
                },
                [
                  _c("h4", { staticClass: "my-2" }, [
                    _vm._v("Billing Address")
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _vm._v(
                      _vm._s(_vm.order.billing_first_name) +
                        " " +
                        _vm._s(_vm.order.billing_last_name)
                    )
                  ]),
                  _vm._v(" "),
                  _c("tr", [_vm._v(_vm._s(_vm.order.billing_address))]),
                  _vm._v(" "),
                  _c("tr", [_vm._v(_vm._s(_vm.order.billing_appartment))]),
                  _vm._v(" "),
                  _c("tr", [
                    _vm._v(
                      _vm._s(_vm.order.billing_city) +
                        " " +
                        _vm._s(_vm.order.billing_postal_code)
                    )
                  ]),
                  _vm._v(" "),
                  _c("tr", [_vm._v(_vm._s(_vm.order.billing_country_region))])
                ]
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "float-right",
                  attrs: { cols: "6", sm: "6", md: "6", lg: "6" }
                },
                [
                  _c("h4", { staticClass: "my-2" }, [
                    _vm._v("Shipping Address")
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _vm._v(
                      _vm._s(_vm.order.shipping_first_name) +
                        " " +
                        _vm._s(_vm.order.shipping_last_name)
                    )
                  ]),
                  _vm._v(" "),
                  _c("tr", [_vm._v(_vm._s(_vm.order.shipping_address))]),
                  _vm._v(" "),
                  _c("tr", [_vm._v(_vm._s(_vm.order.shipping_appartment))]),
                  _vm._v(" "),
                  _c("tr", [
                    _vm._v(
                      _vm._s(_vm.order.shipping_city) +
                        " " +
                        _vm._s(_vm.order.shipping_postal_code)
                    )
                  ]),
                  _vm._v(" "),
                  _c("tr", [_vm._v(_vm._s(_vm.order.shipping_country_region))])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "v-col",
                { staticClass: "mt-6", attrs: { cols: "12" } },
                [
                  _c("h4", { staticClass: "my-2" }, [_vm._v("Items Ordered")]),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c("v-simple-table", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function() {
                          return [
                            _c("thead", [
                              _c("tr", [
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Product")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Type")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Size")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Unit Price")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Quantity")
                                ]),
                                _vm._v(" "),
                                _c("th", { staticClass: "text-left" }, [
                                  _vm._v("Line Total")
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "tbody",
                              _vm._l(_vm.order.order_items, function(item) {
                                return _c("tr", { key: item.id }, [
                                  _c("td", [_vm._v(_vm._s(item.product_name))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.type))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.size))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(item.currency_symbol) +
                                        _vm._s(item.unit_price)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(item.qty))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(item.currency_symbol) +
                                        _vm._s(item.line_total)
                                    )
                                  ])
                                ])
                              }),
                              0
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "float-right",
                  attrs: { cols: "5", sm: "5", md: "5", lg: "5" }
                },
                [
                  _c("v-simple-table", [
                    _c("tbody", {}, [
                      _c("tr", [
                        _c("td", [_vm._v("Subtotal:")]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pl-5 text-right" }, [
                          _vm._v(
                            _vm._s(_vm.order.currency_symbol) +
                              _vm._s(_vm.subtotal)
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Discount:")]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pl-5 text-right" }, [
                          _vm._v(
                            _vm._s(_vm.order.currency_symbol) +
                              _vm._s(_vm.order.discount)
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("strong", [_vm._v("Total:")])]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pl-5 text-right" }, [
                          _c("strong", [
                            _vm._v(
                              _vm._s(_vm.order.currency_symbol) +
                                _vm._s(_vm.order.total)
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/orders/print/Id.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/admin/orders/print/Id.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Id_vue_vue_type_template_id_42433618___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Id.vue?vue&type=template&id=42433618& */ "./resources/js/views/admin/orders/print/Id.vue?vue&type=template&id=42433618&");
/* harmony import */ var _Id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Id.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/orders/print/Id.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Id_vue_vue_type_template_id_42433618___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Id_vue_vue_type_template_id_42433618___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/orders/print/Id.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/orders/print/Id.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/admin/orders/print/Id.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Id.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/orders/print/Id.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/orders/print/Id.vue?vue&type=template&id=42433618&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/admin/orders/print/Id.vue?vue&type=template&id=42433618& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Id_vue_vue_type_template_id_42433618___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Id.vue?vue&type=template&id=42433618& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/orders/print/Id.vue?vue&type=template&id=42433618&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Id_vue_vue_type_template_id_42433618___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Id_vue_vue_type_template_id_42433618___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);