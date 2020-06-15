(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      values: [],
      presets: [{
        label: "Today",
        range: [moment().subtract(0, "day"), moment()]
      }, {
        label: "Yesterday",
        range: [moment().subtract(1, "day"), moment().subtract(1, "day")]
      }, {
        label: "Last 7 Days",
        range: [moment().subtract(6, 'days'), moment()]
      }, {
        label: "This Week",
        range: [moment().startOf("week"), moment().endOf("week")]
      }, {
        label: "Last Week",
        range: [moment().subtract(1, "week").startOf("week"), moment().subtract(1, "week").endOf("week")]
      }, {
        label: "This Month",
        range: [moment().startOf("month"), moment().endOf("month")]
      }, {
        label: "Last Month",
        range: [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
      }, {
        label: "This Year",
        range: [moment().startOf("year"), moment().endOf("year")]
      }],
      total_products: '',
      total_sales: '',
      total_customers: '',
      total_orders: '',
      sales_monthly: '',
      monthly_sales: [{
        name: 'PKR',
        data: {}
      }, {
        name: 'AUD',
        data: {}
      }, {
        name: 'USD',
        data: {}
      }, {
        name: 'EUR',
        data: {}
      }, {
        name: 'GBP',
        data: {}
      }],
      orders_monthly: []
    };
  },
  created: function created() {
    this.getData();
  },
  methods: {
    handleChange: function handleChange(values) {
      this.values = values;
      this.getData();
    },
    getData: function getData() {
      var _this = this;

      axios.post('/api/admin/dashboard', this.values).then(function (res) {
        _this.total_sales = res.data.total_sales;
        _this.total_products = res.data.total_products;
        _this.total_customers = res.data.total_customers;
        _this.total_orders = res.data.total_orders;
        _this.sales_monthly = res.data.sales_monthly;
        _this.monthly_sales[0].data = res.data.sales_pkr;
        _this.monthly_sales[1].data = res.data.sales_aud;
        _this.monthly_sales[2].data = res.data.sales_usd;
        _this.monthly_sales[3].data = res.data.sales_eur;
        _this.monthly_sales[4].data = res.data.sales_gbp;
        _this.orders_monthly = res.data.orders_monthly;
        _this.TopTenProducts = res.data.TopTenProducts;
      })["catch"](function (err) {
        return console.dir(err.response);
      });
    }
  },
  computed: {
    start: function start() {
      return this.startText;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container" },
    [
      _c("v-md-date-range-picker", {
        staticClass: "ma-2",
        attrs: { presets: _vm.presets },
        on: { change: _vm.handleChange }
      }),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "pa-2", attrs: { cols: "12", sm: "6", md: "3" } },
            [
              _c(
                "v-card",
                { staticClass: "pa-4", attrs: { outlined: "", color: "" } },
                [
                  _c("div", { staticClass: "overline mb-2" }, [
                    _vm._v("Total Sales")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "title deep-purple--text text-capitalize" },
                    [_vm._v("Rs. " + _vm._s(_vm.total_sales))]
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "pa-2", attrs: { cols: "12", sm: "6", md: "3" } },
            [
              _c(
                "v-card",
                { staticClass: "pa-4 ", attrs: { outlined: "", color: "" } },
                [
                  _c("div", { staticClass: "overline mb-2" }, [
                    _vm._v("Total Orders")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "title text-capitalize" }, [
                    _vm._v(_vm._s(_vm.total_orders))
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "pa-2", attrs: { cols: "12", sm: "6", md: "3" } },
            [
              _c(
                "v-card",
                { staticClass: "pa-4 ", attrs: { outlined: "", color: "" } },
                [
                  _c("div", { staticClass: "overline mb-2" }, [
                    _vm._v("Total Products")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "title text-capitalize" }, [
                    _vm._v(_vm._s(_vm.total_products))
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "pa-2", attrs: { cols: "12", sm: "6", md: "3" } },
            [
              _c(
                "v-card",
                { staticClass: "pa-4 ", attrs: { outlined: "", color: "" } },
                [
                  _c("div", { staticClass: "overline mb-2" }, [
                    _vm._v("Total Customers")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "title text-capitalize" }, [
                    _vm._v(_vm._s(_vm.total_customers))
                  ])
                ]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticClass: "pa-2", attrs: { cols: "12", sm: "12", md: "6" } },
            [
              _c(
                "v-card",
                { attrs: { outlined: "", color: "" } },
                [
                  _c("column-chart", {
                    attrs: {
                      data: _vm.monthly_sales[0].data,
                      title: "Monthly Sales PKR"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "pa-2", attrs: { cols: "12", sm: "12", md: "6" } },
            [
              _c(
                "v-card",
                { attrs: { outlined: "", color: "" } },
                [
                  _c("column-chart", {
                    attrs: {
                      data: _vm.monthly_sales[1].data,
                      title: "Monthly Sales AUD"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "pa-2", attrs: { cols: "12", sm: "12", md: "6" } },
            [
              _c(
                "v-card",
                { attrs: { outlined: "", color: "" } },
                [
                  _c("line-chart", {
                    attrs: { data: _vm.orders_monthly, title: "Monthly Orders" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "pa-2", attrs: { cols: "12", sm: "12", md: "6" } },
            [
              _c(
                "v-card",
                { attrs: { outlined: "", color: "" } },
                [
                  _c("pie-chart", {
                    attrs: {
                      data: _vm.TopTenProducts,
                      title: "Top 10 Products"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/Dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/views/admin/Dashboard.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_22ef35f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=22ef35f6&scoped=true& */ "./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_22ef35f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_22ef35f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "22ef35f6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_22ef35f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=22ef35f6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Dashboard.vue?vue&type=template&id=22ef35f6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_22ef35f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_22ef35f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);